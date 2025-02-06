<script setup>

</script>


<template>
    <div class="app-links-section container">
        <div class="app-links-main">
            <p class="app-links-title">
                Activities look and sound better in the app
            </p>
            <div class="app-links-list">
                Download the Thrive by Five app to:
                <ul>
                    <li>See animations</li>
                    <li>Listen to the activities</li>
                    <li>Track witch activities you’ve done</li>
                </ul>
            </div>
            <div class="app-links-active">
                <p>
                    Download the Thrive by Five app:
                </p>
                <div class="app-links-links">
                    <img class="action-buttons" src="@/assets/icons/button_apple.png" alt="Google Play Badge" />
                    <img class="action-buttons" src="@/assets/icons/button_google.png" alt="Google Play Badge" />
                </div>
            </div>
        </div>
        <img class="w-full max-w-[540px]" src="/src/assets/background/single-activity/hero-links.png" alt="hero-links">
    </div>
</template>

<style scoped>

    .app-links-section {
        @apply py-[72px] max-lg:py-12 max-md:py-8 px-4 flex items-center justify-center gap-4 max-md:flex-col;

        .app-links-main {
            @apply max-w-[600px] max-lg:max-w-[416px] text-grays text-lg;

            .app-links-title {
                @apply text-4xl text-indigo font-semibold mb-4 max-md:text-3xl;
            }

            .app-links-list {
                @apply mb-6;

                ul {
                    @apply mt-2 ml-4;
                    li {
                        @apply list-disc;
                    }
                }
            }

            .app-links-active {
                p {
                    @apply mb-4
                }

                .app-links-links {
                    @apply flex gap-3 max-md:flex-col max-md:items-center;

                }
            }
        }

    }
</style>