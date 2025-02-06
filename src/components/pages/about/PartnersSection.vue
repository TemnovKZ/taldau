<script setup>

const data = [
    {
        imgSrc: '/src/assets/background/aboutus/logo/bayat.png',
        title: 'Bayat',
        country: 'Afghanistan'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/bilim.png',
        title: 'Billim Makan',
        country: 'Uzbekistan'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/aimi.png',
        title: 'Aimi',
        country: 'Indonesia'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/sydney.png',
        title: 'Sydney University',
        country: 'Australia'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/kdi.png',
        title: 'Kdi',
        country: 'Cameroon'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/minderoo.png',
        title: 'Minderoo Foundation',
        country: 'Australia'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/roza.png',
        title: 'Roza',
        country: 'Kyrgystan'
    },
    {
        imgSrc: '/src/assets/background/aboutus/logo/ykai.png',
        title: 'Ykai',
        country: 'Indonesia'
    },
]

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
        <p class="partners-title">
            Our in-country partners
        </p>
        <div class="partners-cards">
            <div
                v-for="card in data"
                class="partners-card"
            >
                <img class="card-image" :src="card.imgSrc" alt="logo">
                <p class="card-title">
                    {{ card.title }}
                </p>
                <p class="card-subtitle">
                    {{ card.country }}
                </p>
            </div>
        </div>
        <div class="partners-proudly">
            <p class="partners-title">
                Proudly supported by:
            </p>
            <div class="proudly-cards">
                <div
                    v-for="card in partnersData"
                    class="proudly-card"
                >
                    <img class="card-image" :src="card.logoSrc" alt="logo">
                    <p class="card-title">
                        {{ card.title }}
                    </p>
                    <p class="card-subtitle">
                        {{card.subtitle}}
                    </p>
                    <p class="card-description">
                        {{ card.description }}
                    </p>
                    <a href="" class="link-more">
                        <img class="max-md:h-4 max-md:w-4" src="@/assets/icons/link.svg" alt="link-icon">
                        <span> {{ card.button }} </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .partners-section {
        @apply mb-12 py-12 px-[62px] bg-background-light max-md:py-6 max-md:px-4 rounded-[32px];

        .partners-title {
            @apply mb-12 text-center font-semibold text-indigo text-4xl max-md:text-3xl max-lg:mb-6;
        }

        .partners-cards {
            @apply flex justify-center items-center gap-12 flex-wrap max-md:gap-6;

            .partners-card {
                @apply min-w-[256px] flex flex-col justify-center items-center py-12 bg-white rounded-[32px] max-md:min-w-[185px] max-md:py-6;

                .card-image {
                    @apply mb-8;
                }

                .card-title {
                    @apply text-lg text-[#101317] max-md:text-base
                }

                .card-subtitle {
                    @apply text-grays;
                }
            }
        }

        .partners-proudly {
            @apply mt-12 max-md:mt-6;

            .proudly-cards {
                @apply flex gap-8 justify-center items-stretch flex-wrap;

                .proudly-card {
                    @apply flex flex-col py-[68px] px-6 text-grays bg-white rounded-[32px] max-w-[416px];

                    .card-image {
                        @apply mb-12 max-w-fit;
                    }

                    .card-title {
                        @apply mb-3 text-3xl text-[#101317] font-semibold;
                    }

                    .card-subtitle {
                        @apply mb-6 text-lg;
                    }

                    .card-description {
                        @apply mb-6 flex-grow;
                    }

                    .link-more {
                        @apply flex items-center gap-1 px-4 py-3 bg-indigo rounded-full text-white max-w-[334px] text-sm
                    }
                }
            }
        }
    }
</style>