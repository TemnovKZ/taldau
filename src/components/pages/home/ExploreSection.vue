<script setup>

import ButtonLearnMore from "../../general/ButtonLearnMore.vue";
</script>

<template>
    <div class="explore-section container">
        <div class="explore-main">
            <div class="explore-content">
                <h2 class="title">Explore activities in a  way that works for you</h2>
                <p class="explore-subtitle">
                    You can explore activities by focus areas, or try one of our collections for a quick start.
                </p>
                <ButtonLearnMore class="w-[210px]" text="Explore activities" />
            </div>
            <img class="max-lg:w-full" src="@/assets/background/home/home-explore.png" alt="content-explore">
        </div>
        
    </div>
</template>

<style scoped>
    .explore-section {
        @apply py-8 pl-10 max-md:px-4;
        .explore-main {
            @apply flex justify-between items-center max-md:flex-col max-md:gap-6;

            .explore-content {
                @apply max-w-[592px] flex flex-col gap-6 max-lg:gap-4
            }

            .explore-subtitle {
                @apply text-[22px] leading-[35px] text-grays mb-6 max-lg:mb-2 max-md:text-base;
            }
        }
    }
</style>