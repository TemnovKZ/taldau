<script setup>
import ButtonRoundedArrow from "./ButtonRoundedArrow.vue";
import {computed, ref} from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const prop = defineProps({
    minMonths: Number,
    maxMonths: Number,
    tags: Array,
    imageSrc: String,
    title: String,
    subtitle: String,
    activityId: String,
    steps: Array,
})

const subtitleHeight = ref(null)

const spliceSubtitle = computed(() => {
    if (prop.subtitle.length >= 70) {
        return prop.subtitle.slice(0, 70) + '...'
    } else {
        return prop.subtitle
    }
})

const goToActivity = () => {
    router.push({
        path: `/single-activity/${prop.activityId}`,
        query: {
            steps: JSON.stringify(prop.steps),
            tags: JSON.stringify(prop.tags),
        }
    })
}

const tagSrc = [
    {
        name: 'caregiver-health',
        src: '../src/assets/icons/focus/caregiver.svg',
    },
    {
        name: 'creativity',
        src: '../src/assets/icons/focus/creativity.svg',
    },
    {
        name: 'culture-identity',
        src: '../src/assets/icons/focus/culture.svg',
    },
    {
        name: 'emotions',
        src: '../src/assets/icons/focus/emotions.svg',
    },
    {
        name: 'health-nutrition',
        src: '../src/assets/icons/focus/health.svg',
    },
    {
        name: 'language',
        src: '../src/assets/icons/focus/language.svg',
    },
    {
        name: 'motor-skills',
        src: '../src/assets/icons/focus/motor.svg',
    },
    {
        name: 'relationships',
        src: '../src/assets/icons/focus/relationships.svg',
    },
    {
        name: 'safety',
        src: '../src/assets/icons/focus/safety.svg',
    },
    {
        name: 'thinking-skills',
        src: '../src/assets/icons/focus/thinking.svg',
    },
]

function getAgeRange(minMonths, maxMonths) {
    const ageGroups = [
        { name: '0 - 6 months', minMonths: 0, maxMonths: 6 },
        { name: '6 - 12 months', minMonths: 7, maxMonths: 12 },
        { name: '1 year', minMonths: 13, maxMonths: 24 },
        { name: '2 year', minMonths: 25, maxMonths: 36 },
        { name: '3 year', minMonths: 37, maxMonths: 48 },
        { name: '4 year', minMonths: 49, maxMonths: 60 },
    ];

    const startGroup = ageGroups.find(
        group => minMonths >= group.minMonths && minMonths <= group.maxMonths
    );
    const endGroup = ageGroups.find(
        group => maxMonths >= group.minMonths && maxMonths <= group.maxMonths
    );

    if (startGroup && endGroup) {
        if (startGroup.minMonths > 12 && endGroup.maxMonths > 12) {
            return `${startGroup.name[0]} - ${endGroup.name}`;
        }
        return `${startGroup.name} - ${endGroup.name}`;
    }
}
const ageRange = computed(() => getAgeRange(prop.minMonths, prop.maxMonths));

const processedTags = computed(() => {
    return prop.tags.map((tag) => {
        const matchedTag = tagSrc.find((srcTag) => srcTag.name === tag.focusAreaId);
        return matchedTag ? matchedTag.src : null;
    });
});
</script>

<template>
    <div class="activities-card">
        <div class="card-header">
            <p class="card-period">
                {{ ageRange }}
            </p>
            <div class="card-tags">
                <img
                    v-for="(tagSrc, index) in processedTags"
                    :key="index"
                    :src="tagSrc"
                    :alt="tagSrc"
                    class="card-tag"
                >
            </div>
        </div>
        <div class="card-image">
            <img :src="imageSrc" alt="card-image">
        </div>
        <div class="card-content">
            <div class="max-w-[252px]">
                <p class="card-title">
                    {{ title }}
                </p>
                <p ref="subtitleHeight" class="card-subtitle">
                    {{ spliceSubtitle }}
                </p>
            </div>
            <ButtonRoundedArrow @click="goToActivity" class="card-button"/>
        </div>
    </div>
</template>

<style scoped>
.activities-card {
    @apply relative w-[342px] h-[320px] p-4 rounded-[32px] overflow-hidden;
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

        img {
            @apply relative -top-10 scale-90;
        }
    }

    .card-content {
        @apply flex items-end text-start py-4 pt-[22px];

        .card-title {
            @apply text-xl text-indigo font-medium mb-1;
        }

        .card-subtitle {
            @apply inline-block text-grays text-sm opacity-60 after:content-[''] after:block after:h-[200px] after:w-full after:absolute after:bottom-0;

            &:after {
                box-shadow: inset 0 -34px 19px -8px rgba(255,255,255,1);
            }
        }

        .card-button {
            @apply absolute bottom-8 right-4
        }
    }
}
</style>