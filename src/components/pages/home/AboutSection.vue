<script setup>

import ButtonLearnMore from "../../general/ButtonLearnMore.vue";
</script>

<template>
    <div class="about-section container">
        <div class="about-main">
            <img class="about-image" src="@/assets/background/home/home-about.png" alt="mobile-app-screen">
            <div class="about-content">
                <h2 class="title max-md:px-4">About us</h2>
                <p class="about-subtitle">
                    The Thrive by Five app is based on the latest early childhood development research and filled with fun activities that help you and your child connect, talk, play, build habits for a healthy home, and strengthen ties to your community.
                </p>
                <div class="about-card">
                    <span class="card-description">Brought to you by:</span>
                    <p class="card-name">
                        Taldau
                    </p>
                    <img class="card-image" src="@/assets/background/home/home-partners.png" alt="">
                    <p class="card-text">
                        The "Taldau" National Center for Education Quality and Assessment, named after Ahmet Baitursynuly, is a prominent institution in Kazakhstan dedicated to conducting scientific research and assessments in the field of education. It plays a crucial role in evaluating educational standards, promoting quality education, and providing diagnostic and corrective assistance to children with various developmental challenges. The center's mission includes improving the quality of education and contributing to the overall development of the education system in Kazakhstan.
                    </p>
                </div>
                <RouterLink class="max-md:mx-auto" to="/about">
                    <ButtonLearnMore class="w-[250px]" :text="'Learn more about us'"/>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-section {
        @apply py-20 max-lg:py-12 max-md:py-8;

        .about-main {
            @apply relative z-20 flex items-center justify-end max-md:justify-center max-md:flex-col;

            .about-image {
                @apply absolute left-0 max-md:static max-md:mb-5 max-md:px-4;
            }

            .about-content {
                @apply relative z-10 max-w-[592px] flex flex-col gap-6 max-lg:gap-4;

                .about-subtitle {
                    @apply text-lg text-grays max-lg:text-base max-md:text-base max-md:px-4;
                }

                .about-card {
                    @apply relative my-6 max-lg:my-2 max-md:my-1.5 py-8 px-6 flex flex-col gap-4 text-grays bg-[#FCFCFD] rounded-[32px] border border-[#E6E8EC];

                    .card-name {
                        @apply text-4xl font-semibold text-blacks max-md:text-3xl;
                    }

                    .card-image {
                        @apply absolute top-4 right-4 h-24 w-24 max-md:static;
                    }
                }
            }
        }
    }
</style>