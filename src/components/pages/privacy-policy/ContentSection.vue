<script setup>
</script>

<template>
    <div class="content-section container">
        <div class="content-main">
            <div
                class="content-paragraph"
            >
                <p class="paragraph-title">
                    As a quick summary
                </p>
                <p class="paragraph-subtitle">
                    If we ask for your personal information, we only ask for personal information that we need.
                    <br>
                    If you give us your personal information, we will treat it in accordance with our privacy policy.
                </p>
            </div>
            <div
                class="content-paragraph"
            >
                <p class="paragraph-title">
                    Who we are
                </p>
                <p class="paragraph-subtitle">
                    This is the Privacy Policy of the Minderoo Foundation Pty Ltd as trustee for The Minderoo Foundation Trust (Minderoo Foundation). Our postal address is PO Box 3155, Broadway Nedlands, Western Australia, 6009.
                </p>
            </div>
            <div
                class="content-paragraph"
            >
                <p class="paragraph-title">
                    Our commitment to privacy of personal information
                </p>
                <p class="paragraph-subtitle">
                    Minderoo Foundation may at any time immediately terminate your access (including restricting access) to this website or any feature of this website for any reason (including due to your breach or alleged breach of these terms) in its sole discretion and without prior notice.
                </p>
            </div>
            <div
                class="content-paragraph"
            >
                <p class="paragraph-title">
                    What we know about you from visiting our website
                </p>
                <p class="paragraph-subtitle">
                    When you visit our website, our web server automatically records some general information about your visit. The information we record for statistical purposes is your server address, the date and time, the pages accessed and documents downloaded, the previous site visited, and the type of browser used. We may make these details available to third parties for the sole purpose of providing analysis of website traffic.
                    <br><br>
                    We use information from visitors to our website to improve the content of our website and analyse what pages people visit.
                    <br><br>
                    Cookies are only used on our website where required for website functionality. Disabling cookies should not affect your overall website experience. We do not collect or store personal or private information in any cookies originating from our website. However, Facebook and Google provide third party analytical services to us in respect of our website. A summary of information about how we use third party services and links is set out below.
                </p>
            </div>
            <div
                class="content-paragraph"
            >
                <p class="paragraph-title">
                    Google analytics and re-marketing
                </p>
                <div class="paragraph-subtitle">
                    <p class="mb-1">Our website uses:</p>
                    <ul>
                        <li>Google Analytics: a service which transmits website traffic data to Google servers in the United States. We use reports provided by Google Analytics to help us understand website traffic and webpage usage.</li>
                        <li>Google remarketing technology: a service which allows Google to display relevant content based on what pages on our website you have viewed. The content will be displayed using cookies. These cookies don’t record any personal information or identify you personally.</li>
                    </ul>
                    <p>By using this website, you consent to the processing of data about you by Google for the purposes set out and in the manner described in Google’s data protection policy (which can be accessed here (https://www.google.com/intl/en/policies/privacy/)). You can opt out of Google Analytics if you disable or refuse the cookie, disable JavaScript, or use the opt out service provided by Google here (https://tools.google.com/dlpage/gaoptout).</p>
                </div>
            </div>
            <div
                class="content-paragraph"
            >
                <p class="paragraph-title">
                    Facebook conversion tracking pixel
                </p>
                <p class="paragraph-subtitle">
                    We may from time to time use Facebook Advertising, Facebook Pixel Re-Marketing, and communications. This tool allows us to understand and deliver content and make it more relevant to you. The collected data remains anonymous and we cannot see the personal data of any individual user.
                    <br><br>
                    However, the collected data is saved and processed by Facebook. Facebook may be able to connect the data with your Facebook account and use the data for their own advertising purposes (in accordance with Facebook’s Data Use Policy found under: https://www.facebook.com/about/privacy/). Facebook has ultimate control of the information gathered through Facebook Advertising, Facebook Pixel Re-Marketing, and communications. You can opt-out of Facebook’s use of cookies and Facebook Pixel Re-Marketing through settings on your Facebook Account.
                 </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content-section {
        @apply my-[72px];

        .content-main {
            @apply max-w-[1006px] py-12 px-[68px] bg-background-light rounded-[32px] max-md:px-4;

            .content-paragraph {
                @apply mb-12 max-md:mb-6;

                .paragraph-title {
                    @apply text-2xl text-[#101317] font-semibold mb-2 max-md:text-lg;
                }

                .paragraph-subtitle {
                    @apply text-grays;

                    ul {
                        @apply ml-6;

                        li {
                            @apply list-disc
                        }
                    }
                }
            }
        }
    }
</style>