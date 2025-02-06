<script setup>

</script>

<template>
    <footer>
        <div class="footer container">
            <div class="footer-logo" href="/">
                <a href="">
                    <img class="max-w-[126px]" src="../../assets/icons/logo-thrive-by-five.png" alt="logo-main">
                </a>
                <img class="max-w-[126px]" src="../../assets/icons/logo_minderoo.png" alt="logo-logo_minderoo">
            </div>
            <div class="footer-menu">
                <p>Thrive By Five</p>
                <ul>
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/activities">Activities</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About Us</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="footer-menu">
                <p>Legal</p>
                <ul>
                    <li>
                        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/terms">Terms of use</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="footer-menu">
                <p>Explore</p>
                <ul>
                    <li class="max-md:text-sm">
                        Explore the Thrive by Five activities in a way that works best for you and your family:
                    </li>
                    <li class="!opacity-100">
                        <a href="">
                            <img src="../../assets/icons/button_google.png" alt="buy-for-google">
                        </a>
                    </li>
                    <li class="!opacity-100">
                        <a href="">
                            <img src="../../assets/icons/button_apple.png" alt="buy-for-apple">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright container">Copyright © 2023 Minderoo Foundation Limited. All rights reserved</div>
    </footer>
</template>

<style scoped>

footer {
    @apply py-10 px-4 rounded-t-[32px] bg-[#F3F5F9];

    .footer {
        @apply flex justify-between gap-[36px] mb-[80px] max-lg:mb-[40px] max-md:flex-col max-md:gap-6;

        .footer-logo {
            @apply w-full flex items-start gap-8 flex-grow;
        }

        .footer-menu {
            @apply min-w-[160px];

            p {
                @apply font-bold text-base text-[#101317] mb-10 max-md:mb-4;
            }

            ul {
                @apply flex flex-col gap-6;

                li {
                    @apply text-grays opacity-80;
                }
            }
        }
    }

    .copyright {
        @apply border-t text-center text-[14px] text-[#999999] pt-[33px];
    }
}
</style>