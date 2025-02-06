<script setup>
import { ref } from 'vue';
import { useLocalStore } from '../../store/local.js';

const localeStore = useLocalStore();

const isDropdownOpen = ref(false);

const languages = ref([
    { code: 'en-KZ', label: 'English', icon: '../../../src/assets/icons/eng.png' },
    { code: 'kz-KZ', label: 'Қазақша', icon: '../../../src/assets/icons/kaz.png' },
    { code: 'ru-KZ', label: 'Русский', icon: '../../../src/assets/icons/rus.png' }
]);

const changeLanguage = async (newLocale) => {
    await localeStore.setLocale(newLocale);
    isDropdownOpen.value = false;
};

const currentLanguage = () => {
    return languages.value.find((lang) => lang.code === localeStore.locale);
};

</script>

<template>
    <div @click="isDropdownOpen = !isDropdownOpen" class="local-select relative">
        <div class="flex items-center gap-2 cursor-pointer">
            <img
                class="icon"
                :src="currentLanguage()?.icon"
                :alt="currentLanguage()?.label"
            >
            <p class="local-title">{{ currentLanguage()?.label }}</p>
            <img
                class="arrow-down"
                src="../../../src/assets/icons/arrow-down.svg"
                alt="arrow-down"
                :class="{ 'rotate-180': isDropdownOpen }"
            >
        </div>

        <div
            v-if="isDropdownOpen"
            class="dropdown absolute top-14 bg-white border border-gray-300 rounded-md shadow-md flex flex-col"
        >
            <div
                v-for="language in languages"
                :key="language.code"
                @click="changeLanguage(language.code)"
                class="dropdown-item flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
            >
                <img
                    class="icon"
                    :src="language.icon"
                    :alt="language.label"
                >
                <p class="max-md:hidden">{{ language.label }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.local-select {
    @apply p-3 h-12 flex justify-between items-center gap-2 border-2 border-indigo rounded-full relative;

    .icon {
        @apply h-6 w-6;
    }

    .local-title {
        @apply max-md:hidden;
        font-family: "Poppins", serif;
    }

    .arrow-down {
        @apply h-5 w-5 ml-3 max-md:ml-0 transition-transform;
    }

    .dropdown {
        @apply w-full z-10;
    }

    .dropdown-item {
        @apply flex items-center gap-2 px-4 py-2 text-sm text-gray-700;
    }
}
</style>