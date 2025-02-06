<script setup>
import { computed } from "vue";
import { useFiltersStore } from "../../store/activities.js"

const emit = defineEmits(["close-menu"]);

const filtersStore = useFiltersStore();

const activeTags = computed(() => filtersStore.state.activeTags);
const activeFilters = computed(() => filtersStore.state.activeFilters);
const dataTags = computed(() => filtersStore.dataTags);
const dataFilters = computed(() => filtersStore.dataFilters);
</script>

<template>
    <div class="mobile-menu-filter">
        <div class="mobile-filter-header">
            <p class="filter-title">
                Filter by
            </p>
            <img
                @click="$emit('close-menu')"
                src="/src/assets/icons/close.svg"
                alt="close"
                class="cursor-pointer h-8 w-8"
            >
        </div>
        <div class="mobile-filter-main">
            <div class="filter-focus">
                <span>Filter by Focus Area</span>
                <div class="filter-tags">
                    <div
                        v-for="tag in dataTags"
                        class="tag"
                        :style="{ background: activeTags.includes(tag.title) ? tag.background : 'white' }"
                        @click="filtersStore.toggleFocus(tag.title)"
                    >
                        <img class="h-8 w-8" :src="tag.iconSrc" alt="tags-icon">
                        <p>
                            {{ tag.title }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="filter-age">
                <span>Filter by age</span>
                <div class="filter-items">
                    <div
                        v-for="item in dataFilters"
                        :key="item.title"
                        class="filter-item"
                        :class="{ 'active-item': activeFilters.includes(item.title) }"
                        @click="filtersStore.toggleFilter(item.title)"
                    >
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-filter-footer">
            <button class="clear-all">
                Clear all
            </button>
            <button
                @click="$emit('close-menu')"
                class="apply"
            >
                Apply
            </button>
        </div>
    </div>
</template>

<style scoped>
    .mobile-menu-filter {
        @apply h-screen w-screen bg-white fixed left-0 top-0 z-50;

        .mobile-filter-header {
            @apply pt-12 pb-6 px-8 flex justify-between items-center;

            .filter-title {
                @apply text-3xl font-semibold text-indigo
            }
        }

        .mobile-filter-main {
            @apply py-6 px-8 flex flex-col gap-3;

            .filter-focus {
                span {
                    @apply mb-3 text-grays inline-block;
                }

                .filter-tags {
                    @apply flex flex-col gap-3;

                    .tag {
                        @apply w-fit flex items-center justify-between gap-[10px] px-2 py-1.5 bg-white rounded-full cursor-pointer font-semibold;
                    }
                }
            }

            .filter-age {
                span {
                    @apply mb-3 text-grays inline-block;
                }

                .filter-items {
                    @apply flex items-center justify-center gap-1.5 flex-wrap ;

                    .filter-item {
                        @apply py-3 px-4 border-2 border-indigo rounded-full text-indigo text-sm font-semibold leading-none cursor-pointer;
                    }

                    .active-item {
                        @apply bg-indigo text-white;
                    }
                }
            }
        }

        .mobile-filter-footer {
            @apply flex justify-between items-center px-12 py-6 border-t-2;

            button {
                @apply py-3 px-5 rounded-full font-semibold;
            }

            .clear-all {
                @apply text-indigo
            }

            .apply {
                @apply bg-indigo text-white;
            }
        }
    }
</style>