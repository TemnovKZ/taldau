<script setup>
import ButtonRoundedArrow from "./ButtonRoundedArrow.vue";

defineProps({
    period: String,
    tags: Array,
    shareImage: {
        type: Object,
        required: true,
        default: () => ({ src: '' }),
    },
    title: String,
    subtitle: String,
})

</script>

<template>
    <div class="activities-card">
        <div class="card-header">
            <p class="card-period">
                {{ period }}
            </p>
            <div class="card-tags">
                <img
                    class="card-tag"
                    v-for="img in tags"
                    :src="img"
                    alt="tags-content"
                >
            </div>
        </div>
        <div class="card-image">
            <img :src="shareImage.src" alt="card-image">
        </div>
        <div class="card-content">
            <div class="max-w-[252px]">
                <p class="card-title">
                    {{ title }}
                </p>
                <p class="card-subtitle">
                    {{ subtitle }}
                </p>
            </div>
            <ButtonRoundedArrow/>
        </div>
    </div>
</template>

<style scoped>
.activities-card {
    @apply max-w-[342px] p-4 rounded-[32px];
    box-shadow: 0 12px 19px rgba(60, 128, 209, 0.08);

    .card-header {
        @apply flex justify-between items-center;

        .card-period {
            @apply text-xs text-[#707174]
        }

        .card-tags {
            @apply flex gap-2;

            .card-tag {
                @apply w-5 h-5;
            }
        }
    }

    .card-image {
        @apply h-[142px] overflow-hidden;
    }

    .card-content {
        @apply flex items-end text-start py-4;

        .card-title {
            @apply text-xl text-indigo font-medium mb-1;
        }

        .card-subtitle {
            @apply text-grays text-sm;
        }
    }
}
</style>