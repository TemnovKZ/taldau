<script setup>

</script>

<template>
    <div class="hero-section container">
        <div class="hero-main">
            <span class="hero-description">
                All Activities
            </span>
            <h1 class="hero-title">
                Activities for every family
            </h1>
            <p class="hero-subtitle">
                Explore our activities by the area you want to focus on, your children’s age, or try one of our Starter Packs, which have recommended popular activities for every situation.
            </p>
            <div class="flex flex-col gap-5">
                <RouterLink to="/pack" class="hero-button">
                    Explore focus areas
                </RouterLink>
                <RouterLink to="/single-activity" class="hero-button ">
                    Explore single activity
                </RouterLink>
            </div>
        </div>
        <img class="hero-image" src="@/assets/background/activity/activity-hero.png" alt="">
    </div>
</template>

<style scoped>
    .hero-section {
        @apply flex gap-4 p-12 pr-0 max-lg:pt-6 max-lg:px-4 max-md:flex-col;

        .hero-main {
            .hero-description {
                @apply inline-block text-2xl text-grays font-semibold mb-4 max-md:text-2xl;
            }

            .hero-title {
                @apply relative max-w-[620px] text-5xl text-indigo font-semibold mb-6 max-md:text-4xl;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 40px;
                    left: -105px;
                    z-index: -1;
                    background: url("../../../assets/icons/homepage-underline.png") no-repeat top;
                    @media (max-width: 767px) {
                        width: 25%;
                        top: 30px;
                        left: 150px;
                    }
                }
            }

            .hero-subtitle {
                @apply w-[520px] text-lg text-grays max-md:text-base mb-12 max-lg:mb-6 max-md:w-full;
            }

            .hero-button {
                @apply border-2 border-indigo rounded-full px-4 py-2 text-indigo font-semibold w-fit;
            }

        }

        .hero-image {
            @apply w-full h-fit
        }
    }
</style>