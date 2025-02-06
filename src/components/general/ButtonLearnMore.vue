
<script setup>
defineProps({
    text: String,
    link: String
})
</script>

<template>
    <a :href="link" class="button-learn-more">
        <p class="text">{{ text }}</p>
        <img class="arrow" src="../../assets/icons/arrow-right.svg" alt="arrow-link-browse-activities">
    </a>
</template>

<style scoped>
    .button-learn-more {
        @apply min-w-[220px] inline-flex justify-center items-center gap-2.5 px-5 py-3 border-2 border-indigo rounded-full;

        &:hover {
            @apply cursor-pointer;
        }

        .text {
            @apply text-indigo font-semibold leading-4;
        }
    }
</style>