<script setup>
import ButtonRoundedArrow from "./ButtonRoundedArrow.vue";

defineProps({
    period: String,
    title: String,
    tags: Array,
})
</script>

<template>
    <div class="collection-card">
        <span class="card-period">
            {{ period }}
        </span>
        <p class="card-title">
            {{ title }}
        </p>
        <div class="card-tags">
            <img
                v-for="img in tags"
                :src="img"
                alt="tags-content"
                class="card-tag"
            >
        </div>
        <ButtonRoundedArrow class="card-button"/>
    </div>
</template>

<style scoped>
    .collection-card {
        @apply relative min-w-[342px] text-start;
        background-image: url("/src/assets/background/collection-card.png");
        background-repeat: no-repeat;
        background-position: top right;

        .card-period {
            @apply text-xs text-[#707174] max-md:mb-2;
        }

        .card-title {
            @apply max-w-[200px] text-2xl text-indigo font-semibold max-md:mb-8;
        }

        .card-tags {
            @apply w-fit py-1 flex gap-1 border-t border-background-light;

            .card-tag {
                @apply h-5 w-5;
            }
        }
        .card-button {
            @apply absolute right-0 bottom-0
        }
    }
</style>