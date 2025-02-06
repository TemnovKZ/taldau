<script setup>

import {ref} from "vue";
import CollectionsCard from "../../general/CollectionsCard.vue";
import ButtonLearnMore from "../../general/ButtonLearnMore.vue";

const tabs = ref([
    'Focus areas',
    'Collections'
])

const activeTab = ref('Focus areas');

const collectionsData = [
    {
        period: "0-6 months",
        title: "Supporting growth at age 0-6 months",
        tags: ['/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/emotions.svg'],
    },
    {
        period: "1-2 years",
        title: "Supporting growth at age 1-2 years",
        tags: ['/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/emotions.svg'],
    },
]

const topicsData = [
    {
        iconSrc: "src/assets/icons/focus/emotions.svg",
        name: "Emotions"
    },
    {
        iconSrc: "src/assets/icons/focus/motor.svg",
        name: "Motor skills"
    },
    {
        iconSrc: "src/assets/icons/focus/culture.svg",
        name: "Culture & Identity"
    },
    {
        iconSrc: "src/assets/icons/focus/thinking.svg",
        name: "Thinking skills"
    },
    {
        iconSrc: "src/assets/icons/focus/caregiver.svg",
        name: "Caregiver health"
    },
    {
        iconSrc: "src/assets/icons/focus/health.svg",
        name: "Health & Nutrition"
    },
    {
        iconSrc: "src/assets/icons/focus/language.svg",
        name: "Language"
    },
    {
        iconSrc: "src/assets/icons/focus/safety.svg",
        name: "Safety"
    },
    {
        iconSrc: "src/assets/icons/focus/creativity.svg",
        name: "Creativity"
    },
    {
        iconSrc: "src/assets/icons/focus/relationships.svg",
        name: "Relationships"
    },
]

</script>

<template>
    <div class="topics-section container">
        <div class="topics-tabs flex justify-center">
            <div
                v-for="tab in tabs"
                :key="tab"
                :class="{active: activeTab === tab}"
                class="tab"
                @click="activeTab = tab"
            >
                {{ tab }}
            </div>
        </div>
        <div class="topics-main">
            <p
                v-if="activeTab === 'Focus areas'"
                class="topics-subtitle"
            >
                Focus Areas are topics you can learn about in the Thrive by Five app that are linked to your child’s
                key developmental areas. Explore our focus areas by clicking below!
            </p>
            <p
                v-else
                class="topics-subtitle"
            >
                Collections are groups of activities that our experts have selected to target a specific stage of
                development or goal. Try our collections by clicking below!
            </p>
            <div class="topics-cards">
                <div
                    v-if="activeTab === 'Focus areas'"
                    v-for="card in topicsData"
                    :key="card.name"
                    class="topics-card"
                >
                    <img class="card-image" :src="card.iconSrc" alt="icon-topics">
                    <p class="card-text">
                        {{ card.name }}
                    </p>
                </div>

                <div
                    v-if="activeTab === 'Collections'"
                    class="collection"
                >
                    <CollectionsCard
                        v-for="card in collectionsData"
                        :key="card.title"
                        :period="card.period"
                        :title="card.title"
                        :tags="card.tags"
                    />

                    <ButtonLearnMore text="Explore collections" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.topics-section {
    @apply pt-6 pb-12 max-md:py-8;

    .topics-tabs {
        .tab {
            @apply py-3 px-12  text-2xl text-center text-grays font-semibold max-md:text-base max-md:px-6 max-md:py-3 cursor-pointer;
        }
        .active {
            @apply bg-background-light rounded-t-[32px] text-indigo;
        }
    }

    .topics-main {
        @apply py-12 px-16 bg-background-light rounded-[32px] max-md:px-4 text-center text-grays;

        .topics-subtitle {
            @apply mb-6 text-2xl text-grays max-md:text-lg
        }

        .topics-cards {
            @apply mt-6 flex justify-center items-center gap-7 flex-wrap max-md:gap-4;

            .topics-card {
                @apply w-[220px] h-[120px] py-4 px-6 flex flex-col justify-center items-center gap-3 bg-white border border-[#D6D2E5] rounded-[32px] text-center max-lg:w-[200px] max-md:w-[150px] max-md:h-[80px] max-md:gap-1;

                .card-image {
                    @apply w-12 h-12 max-md:h-8 max-md:w-8;
                }

                .card-text {
                    @apply text-base font-medium max-md:text-xs;
                }
            }

            .collection {
                @apply w-full flex justify-between items-start gap-10 flex-wrap max-md:flex-col max-md:items-center;
            }
        }
    }
}
</style>