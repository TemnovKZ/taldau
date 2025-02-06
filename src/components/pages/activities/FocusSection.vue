<script setup>
import FilterTags from "./FilterTags.vue";
import FocusCards from "./FocusCards.vue";

</script>

<template>
    <div class="focus-section container">
        <div class="focus-main">
            <h3 class="focus-title title">
                Explore activities by focus area
            </h3>
            <p class="focus-subtitle">
                Use the buttons below to find activities that interest you, and are suitable for your children's age.
            </p>
            <FilterTags />
            <FocusCards/>
        </div>
    </div>
</template>

<style scoped>
    .focus-section {
        @apply py-[72px] max-lg:py-12 max-md:py-8 text-center;

        .focus-main {
            @apply py-12 px-16 bg-background-light rounded-[32px] max-lg:px-8 max-md:px-8 text-center max-md:text-start;

            .focus-title {
                @apply mb-6 max-md:mb-4;
            }

            .focus-subtitle {
                @apply mb-6 text-2xl text-grays font-normal max-md:mb-4 max-md:text-lg;
            }
        }
    }
</style>