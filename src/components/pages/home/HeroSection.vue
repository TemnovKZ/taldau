<script setup>

import ButtonLearnMore from "@/components/general/ButtonLearnMore.vue";
</script>

<template>
    <div class="hero-section container">
        <div class="hero-main">
            <div class="hero-content">
                <h1 class="hero-title">
                    The first five years will shape a child's life
                </h1>
                <p class="hero-subtitle">
                    Thrive By Five offers free evidence-based, locally-tailored activities for parents, caregivers and families to give the best start in life to their young children.
                </p>
                <div class="hero-action">
                    <div class="action-browse">
                        <p>Ready to get started?</p>
                        <RouterLink to="/activities">
                            <ButtonLearnMore class="action-buttons" :text="'Browse activities'" />
                        </RouterLink>
                    </div>
                    <div class="border-line"></div>
                    <div class="action-browse">
                        <p>Download the app:</p>
                        <div class="flex gap-3 max-md:flex-col max-md:items-center">
                            <img class="action-buttons" src="@/assets/icons/button_apple.png" alt="Google Play Badge" />
                            <img class="action-buttons" src="@/assets/icons/button_google.png" alt="Google Play Badge" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img class="hero-image" src="@/assets/background/home/home-hero.png" alt="content-men-with-children">
    </div>
</template>

<style scoped>

.hero-section {
    @apply relative flex justify-center items-center pt-12 pb-28 max-md:flex-col max-md:py-6;

    .hero-main {
        @apply relative flex justify-between flex-grow p-16 h-[542px] bg-background-light rounded-[32px] max-md:flex-col max-md:p-6 max-md:mb-20;

        .hero-content {
            @apply w-[592px] flex flex-col gap-6 max-md:w-full max-md:gap-4;

            .hero-title {
                @apply relative text-[64px] leading-[76px] text-indigo font-semibold z-20 max-md:text-4xl;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 50px;
                    left: 100px;
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
                @apply relative text-lg text-grays z-20 max-md:mb-2 max-md:text-base;
            }

            .hero-action {
                @apply relative w-max flex gap-4 bg-white rounded-[32px] p-6 z-20 max-md:flex-col max-md:w-full max-md:items-center max-md:text-center;
                box-shadow: 0 4px 10px rgba(60, 128, 209, 0.086);

                p {
                    @apply text-lg text-grays mb-4 font-normal
                }

                .border-line {
                    @apply w-[1px] h-[96px] bg-gray-200 max-md:h-[1px] max-md:w-full;
                }

                .action-buttons {
                    @apply w-fit max-h-12 max-md:max-h-10;
                }
            }
        }
    }

    .hero-image {
        @apply absolute top-0 -right-10 z-10 max-md:static;
    }
}

</style>