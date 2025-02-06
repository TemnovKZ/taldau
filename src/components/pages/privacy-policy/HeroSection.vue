<script setup>

</script>

<template>
    <div class="hero-section container">
        <h3 class="hero-title title">
            Privacy Policy
        </h3>
        <img class="hero-image" src="/src/assets/background/privacy-policy/hero.png" alt="hero-logo">
    </div>
</template>

<style scoped>
    .hero-section {
        @apply py-12 flex items-center gap-4 max-md:flex-col max-lg:py-6 max-md:py-8;

        .hero-title {
            @apply min-w-[592px] max-lg:min-w-[416px] max-md:mb-6 max-md:text-center
        }

        .hero-image {
            @apply w-full max-md:w-[360px]
        }
    }
</style>