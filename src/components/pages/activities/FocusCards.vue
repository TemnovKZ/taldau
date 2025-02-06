<script setup>
import ActivitiesCard from "../../general/ActivitiesCard.vue";
import { computed, onMounted, ref, watch } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useActivitiesStore, useFiltersStore } from "../../../store/activities.js";
import { Grid } from '@splidejs/splide-extension-grid';

const splideRef = ref(null);
const activitiesStore = useActivitiesStore();
const filtersStore = useFiltersStore();
const isSplideReady = ref(true)
const isLoading = computed(() => activitiesStore.activities.loading)

const filteredActivities = computed(() => {
    const activeTags = filtersStore.state.activeTags;
    const activeFilters = filtersStore.state.activeFilters;
    return activitiesStore.getFilteredActivities(activeTags, activeFilters);
});

watch(filteredActivities, () => {
    isSplideReady.value = false;
    setTimeout(() => {
        isSplideReady.value = true;
    }, 0);
});

const goToPrevSlide = () => {
    splideRef.value?.splide.go('<');
};

const goToNextSlide = () => {
    splideRef.value?.splide.go('>');
};

onMounted(() => {
    activitiesStore.fetchActivitiesData()
    isLoading.value = true;
});

</script>

<template>
    <Splide
        v-if="isSplideReady"
        :options="{
        rewind: true,
        pagination: true,
        arrows: false,
        grid: {
            rows: 3,
            cols: 3,
            gap: { row: '24px' },
        },
        breakpoints: {
            '1024': {
                grid: {
                    rows: 3,
                    cols: 2,
                },
            },
            '768': {
                grid: {
                    rows: 3,
                    cols: 1,
                },
            },
        }
    }"
        ref="splideRef"
        :extensions="{ Grid }"
    >
        <SplideSlide
            v-for="(card, slideIndex) in filteredActivities"
            :key="`slide-${slideIndex}`"
        >
            <ActivitiesCard
                :imageSrc="card.shareImage?.src"
                :minMonths="card.minMonths"
                :maxMonths="card.maxMonths"
                :title="card.name"
                :subtitle="card.tagline"
                :tags="card.focusWhys"
                :activityId="card.activityId"
                :steps="card.steps"
                class="bg-white"
            />
        </SplideSlide>
    </Splide>

    <div
        v-if="filteredActivities.length > 0"
        class="relative"
    >
        <div class="splide-container">
            <button
                class="custom-arrow custom-arrow-prev"
                @click="goToPrevSlide"
            >
                <img src="/src/assets/icons/splide-left.svg" alt="slide-prev"/>
            </button>
            <button
                class="custom-arrow custom-arrow-next"
                @click="goToNextSlide"
            >
                <img src="/src/assets/icons/splide-right.svg" alt="slide-next"/>
            </button>
        </div>
    </div>
</template>

<style scoped>
.splide-container {
    @apply mx-auto flex justify-between relative -top-[99px];

    .custom-arrow {
        @apply h-[45px] w-[45px] flex justify-center items-center p-4 rounded-full bg-white;

        img {
            @apply h-4 w-4;
        }
    }
}

:deep(.splide__slide) {
}

:deep(.splide__pagination) {
    @apply my-12;
    counter-reset: pagination-num;
    position: static;

    .is-active {
        @apply scale-100 bg-indigo opacity-100 text-white;
    }
}

:deep(.splide__pagination__page:before) {
    counter-increment: pagination-num;
    content: counter(pagination-num);
}

:deep(.splide__pagination__page) {
    @apply h-[45px] w-[45px] p-2.5 flex justify-center items-center bg-background-light font-semibold text-indigo text-lg opacity-100 z-20;
}
</style>