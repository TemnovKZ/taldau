<script setup>
import {ref, watch} from "vue";
import LocalSelect from "../general/LocalSelect.vue";

const isMenuOpen = ref(false);

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const tabsHeader = ref([
    {
        title: 'Activities',
        link: '/activities',
    },
    {
        title:'About us',
        link: '/about',
    }
])

const activeTab = ref('')

watch(isMenuOpen, (newState) => {
    if (newState) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});
</script>

<template>
    <header class="header container">
        <a class="logo" href="/">
            <img src="../../assets/icons/logo-thrive-by-five.png" alt="logo">
        </a>
        <div class="menu">
            <router-link
                v-for="tab in tabsHeader"
                :class="{active: activeTab === tab.title}"
                :to="tab.link"
                @click.prevent="activeTab = tab.title"
            >
                {{ tab.title }}
            </router-link>
        </div>
        <LocalSelect/>
        <button
            @click="openMenu"
            class="burger-menu"
        >
            <img :src="isMenuOpen ? '/src/assets/icons/close.svg' : '/src/assets/icons/burger.svg' " alt="burger-menu">
        </button>
    </header>
    <div
        v-if="isMenuOpen"
        class="mobile-menu"
    >
        <div class="menu">
            <router-link
                v-for="tab in tabsHeader"
                :class="{active: activeTab === tab.title}"
                :to="tab.link"
                @click.prevent="() => { activeTab = tab.title; openMenu(); }"
            >
                {{ tab.title }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    .header {
        @apply relative z-50 flex justify-between items-center py-[34px] gap-6 max-lg:py-6 max-md:px-4;

        .logo {
            @apply max-md:flex-grow;

            img {
                @apply max-lg:max-w-[120px];
            }
        }

        .menu {
            @apply flex gap-7 text-grays max-md:hidden;

            a {
                @apply px-6 py-5 no-underline;
            }

            a:hover {
                @apply border-b-[2px] border-indigo
            }

            .active {
                @apply border-b-[2px] border-indigo
            }
        }

        .burger-menu {
            @apply hidden max-md:block;
        }
    }

    .mobile-menu {
        @apply fixed top-0 left-0 w-full h-screen bg-white z-30 flex flex-col justify-start items-start;

        .menu {
            @apply relative top-40 flex flex-col gap-7 text-grays;

            a {
                @apply px-6 py-5 text-2xl;
            }

            .active {
                @apply text-slate-950 border-l-4 border-indigo
            }
        }
    }
</style>