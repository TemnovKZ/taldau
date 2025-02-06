<script setup>

</script>

<template>
    <div class="hero-section container">
        <div class="hero-media">
            <div class="media-text">
                <p class="media-description">
                    About us
                </p>
                <h3 class="media-title title">
                    We believe every child can, and should, thrive by the age of five.
                </h3>
                <p class="media-subtitle">
                    In the most popular TED Talk of 2021, seven-year-old Molly Wright explains why interactions early and often matter during the first five years in a child’s life.
                </p>
                <img class="media-underline" src="/src/assets/background/aboutus/underline.png" alt="line">
            </div>
            <div class="media-content">
                <img class="circle circle1" src="/src/assets/background/aboutus/circle-2.png" alt="circle">
                <iframe class="media-player" width="560" height="315" src="https://www.youtube.com/embed/fHDy7Jzp-5I?si=E_8BkvLLG4loLoU5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <img class="circle circle2" src="/src/assets/background/aboutus/circle-3.png" alt="circle">
            </div>
        </div>
        <div class="hero-main">
            <img class="hero-image" src="/src/assets/background/aboutus/hero.png" alt="content-hero">
            <div class="hero-text">
                <h4 class="hero-title">
                    Our approach is based on a science and community
                </h4>
                <p class="hero-subtitle">
                    We prioritise children by implementing a long-term, evidence-based strategy. Partnering with research institutions, investing in communities, and engaging policymakers, we advocate for policy changes that support optimal early development.
                </p>
                <p class="hero-subtitle">
                    With 90% of brain growth occurring by age five, our focus is on effective policy, investments, and collaboration to empower children, parents, and caregivers.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hero-section {
        @apply pt-12 pb-[72px] px-4 max-lg:py-12 max-md:py-8;

        .hero-media {
            @apply flex justify-between items-center gap-4 max-md:flex-col;

            .media-text {
                @apply max-w-[600px] flex flex-col gap-4;

                .media-description {
                    @apply text-[28px] font-semibold text-[#707174];
                }

                .media-subtitle {
                    @apply text-lg text-grays;
                }

                .media-underline {
                    @apply max-w-[210px] relative left-40 bottom-4 -z-20 max-md:left-20 max-md:w-full max-md:bottom-40
                }
            }

            .media-content {
                @apply relative p-10 max-md:p-0;

                .media-player {
                    @apply max-w-full relative z-10 rounded-[42px] max-lg:max-w-fit max-md:max-w-full max-lg:h-[250px];
                }

                .circle {
                    @apply absolute;
                }

                .circle1 {
                    @apply -top-4 -right-4
                }

                .circle2 {
                    @apply -bottom-4 -left-4
                }
            }
        }

        .hero-main {
            @apply py-[72px] max-lg:py-12 max-md:py-8 flex items-center max-md:flex-col;

            .hero-image {
                @apply max-w-full max-lg:max-w-[540px] max-md:max-w-full;
            }

            .hero-text {
                @apply relative flex flex-col gap-4 -left-20 max-md:left-auto;

                .hero-title {
                    @apply text-4xl text-indigo font-semibold max-md:text-[28px] max-md:leading-[33px];
                }

                .hero-subtitle {
                    @apply text-grays text-lg max-md:text-base;
                }
            }
        }
    }
</style>