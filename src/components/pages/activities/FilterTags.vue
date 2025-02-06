<script setup>
import {computed, ref, watch} from "vue";
import MobileMenuFilter from "../../general/MobileMenuFilter.vue";
import { useFiltersStore } from "../../../store/activities.js";

const isMenuOpen = ref(false);
const filtersStore = useFiltersStore();

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (newState) => {
    if (newState) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

const activeTags = computed(() => filtersStore.state.activeTags);
const activeFilters = computed(() => filtersStore.state.activeFilters);
const dataTags = computed(() => filtersStore.dataTags);
const dataFilters = computed(() => filtersStore.dataFilters);

console.log(dataTags.value)

</script>


<template>
    <div class="filter-tags container">
        <div class="tags-container">
            <div
                v-for="tag in dataTags"
                class="tag"
                :style="{ background: activeTags.includes(tag.title) ? tag.background : 'white' }"
                @click="filtersStore.toggleFocus(tag.title)"
            >
                <img class="h-8 w-8" :src="tag.iconSrc" alt="tags-icon"/>
                <p>{{ tag.name }}</p>
            </div>
        </div>

        <div class="filter-container">
            <div class="filter-by-age">
                <span class="filter-title">
                    Filter by age
                </span>
                <div class="filter-wrapper">
                    <div
                        v-for="item in dataFilters || []"
                        :key="item.title"
                        class="filter-item"
                        :class="{ 'active-item': activeFilters.includes(item.title) }"
                        @click="filtersStore.toggleFilter(item.title)"
                    >
                        {{ item.title }}
                    </div>
                </div>
            </div>
            <div class="filter-by-sort">
                <span class="filter-title">
                    Sort by:
                </span>
                <div class="sort-item">
                    Alphabetical
                    <img src="/src/assets/icons/sort.svg" alt="filter-icon"/>
                </div>
            </div>
        </div>
    </div>
    <div class="mobile-actions">
        <div class="mobile-filters">
            <div class="mobile-filter">
                <p class="filter-title">
                    Filter by
                </p>
                <div
                    @click="openMenu"
                    class="filter-button"
                >
                    <p>Filter by</p>
                    <img src="/src/assets/icons/filter.svg" alt="filter-icon"/>
                </div>
            </div>
            <div class="mobile-filter">
                <p class="filter-title">
                    Sort by:
                </p>
                <div class="filter-button">
                    <p>Alphabetical</p>
                    <img src="/src/assets/icons/sort.svg" alt="filter-icon"/>
                </div>
            </div>
        </div>
    </div>

    <MobileMenuFilter
        v-if="isMenuOpen"
        @close-menu="isMenuOpen = false"
        class=""
    />
</template>

<style scoped>
    .filter-tags {
        @apply py-12 max-md:hidden;

        .tags-container {
            @apply flex flex-wrap gap-x-4 gap-y-5 mb-12 mx-14 max-md:hidden;

            .tag {
                @apply w-fit flex items-center justify-between gap-[10px] px-2 py-1.5 bg-white rounded-full cursor-pointer font-semibold;

                p {
                    @apply font-semibold pr-6;
                }
            }
        }

        .filter-container {
            @apply flex justify-end items-center gap-4 text-grays gap-y-12 max-lg:flex-wrap max-lg:justify-end max-md:hidden;

            .filter-by-age {
                @apply w-full items-center text-start flex gap-2;

                .filter-wrapper {
                    @apply flex items-center justify-center gap-1.5 ;

                    .filter-item {
                        @apply py-3 px-4 border-2 border-indigo rounded-full text-indigo text-sm font-semibold leading-none cursor-pointer;
                    }

                    .active-item {
                        @apply bg-indigo text-white;
                    }
                }
            }

            .filter-by-sort {
                @apply flex justify-between items-center gap-2 text-nowrap;

                .sort-item {
                    @apply flex items-center justify-between gap-2 py-3 px-4 pr-7 border-2 border-indigo rounded-full text-indigo text-sm font-semibold leading-none cursor-pointer;
                }
            }
        }
    }

    .mobile-actions {
        @apply my-8 pl-2 mb-12 md:hidden;
        .mobile-filters {
            @apply flex gap-4;

            .mobile-filter {
                .filter-title {
                    @apply mb-2 text-sm text-grays;
                }

                .filter-button {
                    @apply px-4 py-2 flex justify-between gap-2 min-w-[133px] border-2 border-indigo text-indigo rounded-full font-semibold cursor-pointer;
                }
            }
        }
    }
</style>