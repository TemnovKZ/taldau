<script setup>

const partnersData = [
    {
        logoSrc: "/src/assets/background/home/home-bmc.png",
        title: "University of Sydney",
        subtitle: "Brain and Mind Centre ",
        description: "Founded in 1850, the University of Sydney is Australia's oldest university. It has become a leading global university. \n" +
          "University of Sydney's Brain and Mind Centre is a global leader in neuroscience, with a focus on child development and youth mental health.",
        button: "Learn more about University of Sydney",

    },
    {
        logoSrc: "/src/assets/background/home/home-minderoo.png",
        title: "Minderoo Foundation",
        subtitle: "",
        description: "Minderoo Foundation is one of Australasia’s largest philanthropies, with AUD$2.6 billion funds invested in philanthropic causes. \n" +
          "These causes range from eliminating childhood cancer to improving early childhood education, ending modern slavery and driving accountability in and responsibility for global overfishing, plastic pollution, global warming and the tech ecosystem.",
        button: "Learn more about Minderoo fundation",
    },
]

</script>

<template>
<div class="partners-section container">
    <div class="partners-text">
        <h2 class="title mb-6 max-md:mb-4">Proudly supported by:</h2>
        <p class="partners-subtitle">
            Our activities are for all the important people in your child's life, and can be enjoyed as often as you like in different settings.
        </p>
    </div>
    <div class="partners-cards">
        <div v-for="card in partnersData" class="partners-card">
            <img class="card-image" :src="card.logoSrc" alt="logo-partners">
            <p class="card-title">
                {{ card.title }}
            </p>
            <p
                v-if="card.subtitle"
                class="card-subtitle"
            >
                {{ card.subtitle }}
            </p>
            <span class="card-description">
                {{ card.description }}
            </span>
            <a href="" class="link-more">
                <img class="max-md:h-4 max-md:w-4" src="@/assets/icons/link.svg" alt="link-icon">
                <span> {{ card.button }} </span>
            </a>
        </div>
    </div>
</div>
</template>

<style scoped>
    .partners-section {
        @apply py-16 px-10 max-lg:py-12 max-md:py-8 max-md:px-4;

        .partners-text {
            @apply max-w-[800px] mb-12 max-md:mb-6 mx-auto text-center;

            .partners-subtitle {
                @apply text-lg text-grays max-md:text-base;
            }
        }

        .partners-cards {
            @apply flex justify-center items-stretch gap-8 max-md:flex-col max-md:items-center;

            .partners-card {
                @apply flex flex-col w-1/2 py-12 px-16 max-lg:px-7 text-grays bg-[#FCFCFD] rounded-[32px] border border-[#E6E8EC] max-md:px-3.5 max-md:py-6 max-md:w-full;

                .card-image {
                    @apply mb-12 h-20 w-20
                }

                .card-title {
                    @apply mb-3 text-[28px] leading-[33px] text-[#101317] font-semibold;
                }

                .card-subtitle {
                    @apply text-lg;
                }

                .card-description {
                    @apply flex-grow my-6
                }

                .link-more {
                    @apply flex items-center gap-1 px-4 py-3 bg-indigo rounded-full text-white max-w-[334px] text-sm
                }
            }
        }
    }
</style>