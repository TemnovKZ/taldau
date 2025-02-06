import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { fetchActivityContent,fetchUiContent } from "../apiService.js";

export const useLocalStore = defineStore('local', () => {
    const locale = ref('en-KZ')
    const uiContent = ref(null)
    const activityContent = ref(null)
    const isLoading = ref(false)

    const locales = reactive([
        { code: 'en-KZ', label: 'English', iconSrc: '/src/assets/icons/eng.png' },
        { code: 'kz-KZ', label: 'Қазақша', iconSrc: '/src/assets/icons/kaz.png' },
        { code: 'ru-KZ', label: 'Русский', iconSrc: '/src/assets/icons/rus.png' }
    ]);

    const setLocale = async (newLocale) => {
        locale.value = newLocale
        await fetchData()
    }

    const fetchData = async () => {
        isLoading.value = true
        try {
            uiContent.value = await fetchUiContent(locale.value)
            activityContent.value = await fetchActivityContent(locale.value)
        } catch (e) {
            console.log(e)
        } finally {
            isLoading.value = false
        }
    }

    const init = async () => {
        await fetchData();
    }

    return {
        locale,
        locales,
        uiContent,
        activityContent,
        isLoading,
        setLocale,
        fetchData,
        init,
    }
})