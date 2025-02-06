<script setup>
import SoundSwitch from "../../general/SoundSwitch.vue";
import { useFiltersStore } from "../../../store/activities.js";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const steps = route.query.steps ? JSON.parse(route.query.steps) : null;
const tags = route.query.tags ? JSON.parse(route.query.tags) : null;

const filtersStore = useFiltersStore();

const mappedTags = computed(() => {
    if (!tags) return []

    return tags.map(tag => {
        const matchedTag = filtersStore.dataTags.find(dataTag => dataTag.title === tag.focusAreaId)
        return matchedTag
            ? { ...tag, name: matchedTag.name, iconSrc: matchedTag.iconSrc, background: matchedTag.background } : tag
    })
});

</script>

<template>
    <div class="guide-section container">
        <div class="guide-main">
            <div class="guide-how">
                <p class="guide-title">
                    How this helps...
                </p>
                <div
                    class="how-cards"
                >
                    <div
                        v-for="tag in mappedTags"
                        class="how-card bg-[#FFE9D3]"
                        :style="{ background: tag.background }"
                    >

                        <div class="card-title">
                            <img :src="tag.iconSrc" :alt="tag.name">
                            <p>
                                {{ tag.name }}
                            </p>
                        </div>
                        <p class="card-text">
                            {{ tag.explanation }}
                        </p>
                        <SoundSwitch/>
                    </div>
                </div>
            </div>
            <div class="guide-doing">
                <p class="guide-title">
                    Doing the activity:
                </p>
                <div class="doing-connect">
                    <div class="doing-line">
                    </div>
                    <div class="doing-blocks">
                        <div
                            v-for="(step, index) in steps"
                            class="doing-block"
                        >
                            <div class="doing-dot">
                                <img src="/src/assets/icons/dot.svg" alt="dot">
                            </div>
                            <p class="doing-title">
                               Step {{ index + 1 }}
                            </p>
                            <div class="doing-card">
                                <p>
                                    {{ step.instruction }}
                                </p>
                                <SoundSwitch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .guide-section {
        @apply py-[72px] max-lg:py-12 max-md:py-8 max-md:px-0;

        .guide-main {
            @apply flex gap-8 max-md:flex-col py-12 px-[68px] pb-16 max-lg:px-8 max-md:py-12 bg-background-light rounded-[32px];

            .guide-title {
                @apply text-3xl text-indigo font-semibold mb-12
            }

            .guide-how {
                @apply w-1/2 max-md:w-full;

                .how-cards {
                    @apply flex flex-col gap-6 justify-between;

                    .how-card {
                        @apply p-6 flex flex-col gap-4 rounded-[32px];

                        .card-title {
                            @apply flex items-center gap-4 font-semibold text-[#101317] text-2xl;
                        }

                        .card-text {
                            @apply text-grays;
                        }
                    }
                }
            }

            .guide-doing {
                @apply w-1/2 max-md:w-full;

                .doing-connect {
                    @apply flex gap-8 max-md:gap-6;

                    .doing-line {
                        @apply w-[3px] h-auto bg-[#B9C9FF]
                    }
                }

                .doing-blocks {
                    @apply flex flex-col justify-between gap-12 h-fit;

                    .doing-block {
                        @apply relative;

                        .doing-dot {
                            @apply absolute -left-[49px] max-md:-left-[41px] h-8 w-8 flex justify-center items-center bg-white rounded-full
                        }

                        .doing-title {
                            @apply text-2xl text-[#1E2131] font-semibold mb-6;
                        }

                        .doing-card {
                            @apply flex flex-col gap-4 px-6 py-8 rounded-[32px] text-grays bg-white;
                            box-shadow: 0 0 19px 0 rgba(60, 128, 209, 0.09);
                        }
                    }
                }
            }
        }
    }
</style>