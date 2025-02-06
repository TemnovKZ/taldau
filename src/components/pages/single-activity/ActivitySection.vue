<script setup>

import ActivitiesCard from "../../general/ActivitiesCard.vue";
import ButtonLearnMore from "../../general/ButtonLearnMore.vue";

const cards = [
    {
        period: '6 - 12 months - 2 years',
        tags: ['/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/relationships.svg',],
        imageSrc: '/src/assets/background/activity/activity-card1.svg',
        title: 'Imaginary play',
        subtitle: 'Take your child on a journey into your past!',
    },
    {
        period: '6 - 12 months - 2 years',
        tags: ['/src/assets/icons/focus/culture.svg', '/src/assets/icons/focus/relationships.svg', '/src/assets/icons/focus/relationships.svg',],
        imageSrc: '/src/assets/background/activity/activity-card2.svg',
        title: 'My multilingual baby',
        subtitle: 'Take your child on a journey into your past!',
    },
    {
        period: '6 - 12 months - 2 years',
        tags: [
            {
                iconSrc: '/src/assets/icons/focus/culture.svg',
                title: 'culture-identity',
                name: 'Culture & Identity',
                background: '#FFF2DD',
            },
            {
                iconSrc: '/src/assets/icons/focus/relationships.svg',
                title: 'relationships',
                name: 'Relationships',
                background: '#F5E5FB',
            },
            {
                iconSrc: '/src/assets/icons/focus/relationships.svg',
                title: 'relationships',
                name: 'Relationships',
                background: '#F5E5FB',
            },
        ],
        imageSrc: '/src/assets/background/activity/activity-card3.svg',
        title: 'My familys stories',
        subtitle: 'Take your child on a journey into your past!',
    },
]
</script>

<template>
    <div class="activity-section container">
        <p class="activity-title">
            Discover more activities to help with
        </p>

        <div class="activity-main">
            <div class="tag">
                <img class="h-8 w-8" src="/src/assets/icons/focus/culture.svg" alt="culture-icon">
                <p>
                    Culture + Identity
                </p>
            </div>
            <div class="activity-cards">
                <ActivitiesCard
                    v-for="card in cards"
                    :period="card.period"
                    :title="card.title"
                    :tags="card.tags"
                    :subtitle="card.subtitle"
                    :imageSrc="card.imageSrc"
                />
            </div>
        </div>

        <RouterLink to="/activities">
            <ButtonLearnMore text="Browse all activities" />
        </RouterLink>
    </div>
</template>

<style scoped>

.activity-section {
    @apply flex flex-col items-center py-[72px] max-lg:py-12 max-md:py-8;

    .activity-title {
        @apply text-4xl text-indigo font-semibold text-center max-md:text-2xl;
    }

    .activity-main {
        @apply flex flex-col gap-6 my-20 max-md:my-8;

        .tag {
            @apply mx-auto w-fit flex items-center justify-between gap-[10px] px-2 py-1.5 bg-[#FFF2DD] rounded-full;

            p {
                @apply font-semibold pr-6;
            }
        }

        .activity-cards {
            @apply flex justify-center gap-6 flex-wrap
        }

    }
}
</style>