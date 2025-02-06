<script setup>

</script>

<template>
    <div class="hero-section container">
        <div class="hero-main">
            <RouterLink to="activities" class="hero-back">
                <div class="back-arrow">
                    <img src="/src/assets/icons/pack-arrow.svg" alt="left-arrow">
                </div>
                <p class="back-text">
                    Back to all activities
                </p>
            </RouterLink>
            <div class="hero-content">
                <p class="hero-description">
                    Packs
                </p>
                <h3 class="title hero-title">
                    Supporting growth at 7-12 months
                </h3>
                <p class="hero-subtitle">
                    Activities and materials across most of our focus areas suited for children aged 7-12 months old.
                </p>
            </div>
        </div>
        <img class="hero-image" src="/src/assets/background/pack/pack-hero-section.png" alt="hero-content">
    </div>
</template>

<style scoped>
    .hero-section {
        @apply pt-12 pb-[72px] max-lg:pt-6 max-lg:pb-12 max-md:py-8 flex gap-4 max-md:flex-col max-md:px-4;

        .hero-main {

            .hero-back {
                @apply mb-12 flex items-center gap-3 max-lg:mb-6;

                .back-arrow {
                    @apply relative h-12 w-12 p-4 flex items-center justify-center border border-[#CFD0D1] rounded-full;

                    img {
                        @apply absolute h-6 w-6;
                    }
                }

                .back-text {
                    @apply text-lg font-semibold text-indigo max-md:text-base;
                }
            }

            .hero-content {
                @apply flex flex-col gap-6 max-lg:gap-4;

                .hero-description {
                    @apply text-[28px] font-semibold text-[#707174];
                }

                .hero-title {
                    @apply leading-[57px] max-md:leading-[43px]
                }

                .hero-subtitle {
                    @apply text-lg font-normal text-grays max-md:text-base;
                }
            }
        }

        .hero-image {
            @apply w-full h-fit
        }


    }
</style>