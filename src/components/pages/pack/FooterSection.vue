<script setup>

import ButtonLearnMore from "../../general/ButtonLearnMore.vue";
</script>

<template>
<div class="footer-section container">
    <p class="footer-text">
        Cant find what you’re looking for?
    </p>
    <RouterLink to="/activities">
        <ButtonLearnMore text="All activities"/>
    </RouterLink>
</div>
</template>

<style scoped>
    .footer-section {
        @apply py-24 px-4 mx-auto max-lg:py-12 max-md:py-8 flex flex-col justify-center items-center;

        .footer-text {
            @apply text-[28px] text-[#161925] font-semibold text-center mb-6
        }
    }
</style>