<script setup>

const cardsData = [
    {
        name: "Content for your culture",
        src: "/src/assets/background/home/home-advantage1.png",
        description: "Our activities are adapted to suit each country. You’ll even be able to see your culture in the illustrations!",
    },
    {
        name: "Personalised for your family ",
        src: "/src/assets/background/home/home-advantage2.png",
        description: "Activities are recommended for your child’s age, and the areas you want to focus on together.",
    },
    {
        name: "Easy to understand science",
        src: "/src/assets/background/home/home-advantage3.png",
        description: "Our activities have been created with purpose by the University of Sydney Brain and Mind Centre.\n",
    },
]

</script>

<template>
    <div class="advantages-section container">
        <div class="advantages-main">
            <h2 class="title mb-12 max-lg:mb-6 text-center">Developed with your family in mind</h2>
            <div class="advantages-cards">
                <div
                    v-for="card in cardsData"
                    class="advantages-card"
                >
                    <div class="card-image">
                        <img :src="card.src" alt="advantage-images">
                    </div>
                    <p class="card-name">
                        {{ card.name }}
                    </p>
                    <p class="card-description">
                        {{ card.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .advantages-section {
        @apply py-[72px] max-lg:py-12 max-md:py-8;

        .advantages-main {
            @apply py-12 px-16 max-md:py-6 max-md:px-4 bg-background-light rounded-[32px] ;

            .advantages-cards {
                @apply flex gap-8 max-md:gap-6 justify-center items-stretch max-md:flex-col max-md:items-center;

                .advantages-card {
                    @apply max-w-[380px] px-5 py-6 max-lg:px-4 max-md:px-3.5 flex flex-col gap-4 rounded-[32px] bg-white;

                    .card-image {
                        @apply mb-2 rounded-[32px] overflow-hidden;

                        img {
                            @apply w-fit
                        }
                    }

                    .card-name {
                        @apply text-2xl text-indigo font-semibold
                    }

                    .card-description {
                        @apply text-base text-grays
                    }
                }
            }
        }
    }

</style>