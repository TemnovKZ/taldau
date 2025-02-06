<script setup>
 import CollectionsCard from "../../general/CollectionsCard.vue";
 import { Splide, SplideSlide } from '@splidejs/vue-splide';
 import '@splidejs/vue-splide/css';
 import {onBeforeUnmount, onMounted, ref} from "vue";
 import '@splidejs/splide/dist/css/splide.min.css';

 const isSliderActive = ref(false);
 const breakpoint = 768;

 const handleResize = () => {
     isSliderActive.value = window.innerWidth <= breakpoint;
 };

 onMounted(() => {
     handleResize();
     window.addEventListener('resize', handleResize);
 });

 onBeforeUnmount(() => {
     window.removeEventListener('resize', handleResize);
 });

 const splideRef = ref(null);

 const goToPrevSlide = () => {
     splideRef.value?.splide?.go("<");
 };

 const goToNextSlide = () => {
     splideRef.value?.splide?.go(">");
 };

 const data = [
     {
         imgSrc: '/src/assets/background/activity/collection1.png',
         period: '0-6 months',
         title: 'Supporting growth at age 0-6 months',
         tags: ['/src/assets/icons/focus/emotions.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/motor.svg','/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/health.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/language.svg']
     },
     {
         imgSrc: '/src/assets/background/activity/collection2.png',
         period: '0-6 months',
         title: 'Supporting growth at age 7-12 months',
         tags: ['/src/assets/icons/focus/emotions.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/motor.svg','/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/health.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/language.svg']     },
     {
         imgSrc: '/src/assets/background/activity/collection3.png',
         period: '1 year old',
         title: 'Supporting growth at age four',
         tags: ['/src/assets/icons/focus/emotions.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/motor.svg','/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/health.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/language.svg']     },
     {
         imgSrc: '/src/assets/background/activity/collection4.png',
         period: '2 years old +',
         title: 'Supporting growth at age one',
         tags: ['/src/assets/icons/focus/emotions.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/motor.svg','/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/health.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/language.svg']     },
     {
         imgSrc: '/src/assets/background/activity/collection5.png',
         period: '3 years old +',
         title: 'Supporting growth at age two',
         tags: ['/src/assets/icons/focus/emotions.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/motor.svg','/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/health.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/language.svg']     },
     {
         imgSrc: '/src/assets/background/activity/collection6.png',
         period: '3 years old +',
         title: 'Supporting growth at age three',
         tags: ['/src/assets/icons/focus/emotions.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/motor.svg','/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/health.svg', '/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/language.svg']     },
 ]
</script>

<template>
    <div v-if="!isSliderActive" class="collection-section container">
        <h3 class="collection-title title">
            Try our collections by clicking below!
        </h3>

        <div class="collection-main">
            <div
                v-for="card in data"
                class="collection-card"
            >
                <div class="rounded-[32px] overflow-hidden">
                    <img class="card-image" :src="card.imgSrc" alt="123">
                </div>
                <CollectionsCard
                    :period="card.period"
                    :tags="card.tags"
                    :title="card.title"
                    class="card-collection"
                />
            </div>
        </div>
    </div>

    <div v-else>
        <h3 class="collection-title title">
            Try our collections by clicking below!
        </h3>
        <div class="slider">

            <Splide
                ref="splideRef"
                :options="{
            rewind: true,
            perPage: 1,
            pagination: true,
            arrows: false,
        }"
                aria-label="Collections slider"
                class="collection-slide"
            >
                <SplideSlide v-for="(card, index) in data" :key="index">
                    <div class="collection-slider">
                        <div class="rounded-[32px] overflow-hidden">
                            <img class="card-image w-full" :src="card.imgSrc" :alt="card.title" />
                        </div>
                        <CollectionsCard
                            :period="card.period"
                            :tags="card.tags"
                            :title="card.title"
                            class="card-collection"
                        />
                    </div>
                </SplideSlide>
            </Splide>

            <div class="splide-container">
                <button
                    class="custom-arrow custom-arrow-prev"
                    @click="goToPrevSlide"
                >
                    <img src="/src/assets/icons/splide-left.svg" alt="slide-prev">
                </button>

                <button
                    class="custom-arrow custom-arrow-next"
                    @click="goToNextSlide"
                >
                    <img src="/src/assets/icons/splide-right.svg" alt="slide-prev">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .collection-section {
        @apply pb-16 px-4 max-lg:pb-12 max-md:pb-8;

        .collection-title {
            @apply mb-16 text-center max-md:mb-4;
        }

        .collection-main {
            @apply px-7 max-md:px-0 flex justify-center gap-[76px] gap-y-[82px] flex-wrap;

            .collection-card {
                @apply max-w-[400px] flex flex-col gap-6;

                .card-image {
                    @apply w-full hover:scale-110 transition;

                }
            }
        }
    }

    .collection-title {
        @apply mb-12 text-center max-md:mb-4;
    }

    .collection-slide {
        @apply relative max-w-[400px] py-8 w-full mx-auto ;

        .collection-slider {
            @apply max-w-[400px] px-4 flex flex-col gap-6;
        }
    }

    .slider {
        @apply max-w-[400px] mx-auto relative;

        .splide-container {
            @apply flex gap-4 justify-end absolute bottom-9 right-4;

            .custom-arrow {
                @apply p-4 rounded-full bg-white;

                img {
                    @apply h-4 w-4;
                }
            }
        }
    }

    :deep(.splide__pagination) {
        @apply static py-6 justify-start;

        .is-active {
            @apply bg-indigo scale-100 opacity-100 w-[50px] rounded-[32px];
        }
    }
</style>