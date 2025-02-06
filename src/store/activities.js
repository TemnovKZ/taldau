import {defineStore} from "pinia";
import {computed, reactive, watch} from "vue";
import {fetchActivityContent} from "../apiService.js";
import {useLocalStore} from "./local.js";
export const useActivitiesStore = defineStore('activities', () => {
    const localeStore = useLocalStore();

    const activities = reactive({
        data: [],
        loading: false
    });

    const fetchActivitiesData = async () => {
        activities.loading = true;
        try {
            const response = await fetchActivityContent(localeStore.locale);
            activities.data = response.activities || [];
        } catch (e) {
            console.error(e);
        } finally {
            activities.loading = false;
        }
    };

    function getFilteredActivities(activeTags, activeFilters) {
        if (activeTags.length === 0 && activeFilters.length === 0) return activities.data;

        return activities.data.filter((activity) => {
            const matchesTags = activeTags.length
                ? activity.focusWhys.some(focus => activeTags.includes(focus.focusAreaId))
                : true;

            const matchesFilters = activeFilters.length
                ? activeFilters.some(filter => {
                    const minAge = activity.minMonths || 0;
                    const maxAge = activity.maxMonths || Infinity;

                    switch (filter) {
                        case '0-6 months': return minAge <= 0 && maxAge >= 6;
                        case '7-12 months': return minAge <= 7 && maxAge >= 12;
                        case '1 year old': return minAge <= 12 && maxAge >= 24;
                        case '2 years old': return minAge <= 24 && maxAge > 36;
                        case '3 years old': return minAge <= 36 && maxAge >= 48;
                        case '4+ years old': return maxAge >= 48;
                    }
                    return false;
                })
                : true;

            return matchesTags && matchesFilters;
        });
    }

    watch(
        () => localeStore.locale,
        async () => {
            await fetchActivitiesData();
        },
        { immediate: true }
    );

    return {
        activities,
        fetchActivitiesData,
        getFilteredActivities,
    };
});

export const useFiltersStore = defineStore('filters', () => {
    const localeStore = useLocalStore();

    const translations = {
        en: {
            tags: [
                {
                    iconSrc: '/src/assets/icons/focus/emotions.svg',
                    title: 'emotions',
                    name: 'Emotions',
                    background: '#FFE2DD',
                },
                {
                    iconSrc: '/src/assets/icons/focus/motor.svg',
                    title: 'motor-skills',
                    name: 'Motor Skills',
                    background: '#FFE9D3',
                },
                {
                    iconSrc: '/src/assets/icons/focus/culture.svg',
                    title: 'culture-identity',
                    name: 'Culture & Identity',
                    background: '#FFF2DD',
                },
                {
                    iconSrc: '/src/assets/icons/focus/thinking.svg',
                    title: 'thinking-skills',
                    name: 'Thinking Skills',
                    background: '#FFF7D7',
                },
                {
                    iconSrc: '/src/assets/icons/focus/caregiver.svg',
                    title: 'caregiver-health',
                    name: 'Caregiver Health',
                    background: '#EEF8E1',
                },
                {
                    iconSrc: '/src/assets/icons/focus/health.svg',
                    title: 'health-nutrition',
                    name: 'Health & Nutrition',
                    background: '#E5F9EF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/language.svg',
                    title: 'language',
                    name: 'Language',
                    background: '#E3F5FF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/safety.svg',
                    title: 'safety',
                    name: 'Safety',
                    background: '#E8EDFF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/creativity.svg',
                    title: 'creativity',
                    name: 'Creativity',
                    background: '#E9E6FF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/relationships.svg',
                    title: 'relationships',
                    name: 'Relationships',
                    background: '#F5E5FB',
                },
            ],
            filters: [
                { title: '0-6 months' },
                { title: '7-12 months' },
                { title: '1 year old' },
                { title: '2 years old' },
                { title: '3 years old' },
                { title: '4+ years old' },
            ]
        },
        ru: {
            tags: [
                {
                    iconSrc: '/src/assets/icons/focus/emotions.svg',
                    title: 'emotions',
                    name: 'Emotions',
                    background: '#FFE2DD',
                },
                {
                    iconSrc: '/src/assets/icons/focus/motor.svg',
                    title: 'motor-skills',
                    name: 'Motor Skills',
                    background: '#FFE9D3',
                },
                {
                    iconSrc: '/src/assets/icons/focus/culture.svg',
                    title: 'culture-identity',
                    name: 'Culture & Identity',
                    background: '#FFF2DD',
                },
                {
                    iconSrc: '/src/assets/icons/focus/thinking.svg',
                    title: 'thinking-skills',
                    name: 'Thinking Skills',
                    background: '#FFF7D7',
                },
                {
                    iconSrc: '/src/assets/icons/focus/caregiver.svg',
                    title: 'caregiver-health',
                    name: 'Caregiver Health',
                    background: '#EEF8E1',
                },
                {
                    iconSrc: '/src/assets/icons/focus/health.svg',
                    title: 'health-nutrition',
                    name: 'Health & Nutrition',
                    background: '#E5F9EF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/language.svg',
                    title: 'language',
                    name: 'Language',
                    background: '#E3F5FF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/safety.svg',
                    title: 'safety',
                    name: 'Safety',
                    background: '#E8EDFF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/creativity.svg',
                    title: 'creativity',
                    name: 'Creativity',
                    background: '#E9E6FF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/relationships.svg',
                    title: 'relationships',
                    name: 'Relationships',
                    background: '#F5E5FB',
                },
            ],
            filters: [
                { title: '0-6 месяцев' },
                { title: '7-12 месяцев' },
                { title: '1 год' },
                { title: '2 года' },
                { title: '3 года' },
                { title: '4+ года' },
            ]
        },
        kz: {
            tags: [
                {
                    iconSrc: '/src/assets/icons/focus/emotions.svg',
                    title: 'emotions',
                    name: 'Emotions',
                    background: '#FFE2DD',
                },
                {
                    iconSrc: '/src/assets/icons/focus/motor.svg',
                    title: 'motor-skills',
                    name: 'Motor Skills',
                    background: '#FFE9D3',
                },
                {
                    iconSrc: '/src/assets/icons/focus/culture.svg',
                    title: 'culture-identity',
                    name: 'Culture & Identity',
                    background: '#FFF2DD',
                },
                {
                    iconSrc: '/src/assets/icons/focus/thinking.svg',
                    title: 'thinking-skills',
                    name: 'Thinking Skills',
                    background: '#FFF7D7',
                },
                {
                    iconSrc: '/src/assets/icons/focus/caregiver.svg',
                    title: 'caregiver-health',
                    name: 'Caregiver Health',
                    background: '#EEF8E1',
                },
                {
                    iconSrc: '/src/assets/icons/focus/health.svg',
                    title: 'health-nutrition',
                    name: 'Health & Nutrition',
                    background: '#E5F9EF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/language.svg',
                    title: 'language',
                    name: 'Language',
                    background: '#E3F5FF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/safety.svg',
                    title: 'safety',
                    name: 'Safety',
                    background: '#E8EDFF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/creativity.svg',
                    title: 'creativity',
                    name: 'Creativity',
                    background: '#E9E6FF',
                },
                {
                    iconSrc: '/src/assets/icons/focus/relationships.svg',
                    title: 'relationships',
                    name: 'Relationships',
                    background: '#F5E5FB',
                },
            ],
            filters: [
                { title: '0-6 ай' },
                { title: '7-12 ай' },
                { title: '1 жас' },
                { title: '2 жас' },
                { title: '3 жас' },
                { title: '4+ жас' },
            ]
        }
    };

    const dataTags = computed(() => {
        const lang = localeStore.locale.split('-')[0];
        return translations[lang]?.tags || translations.en.tags;
    });

    const dataFilters = computed(() => {
        const lang = localeStore.locale.split('-')[0];
        return translations[lang]?.filters || translations.en.filters;
    });

    const state = reactive({
        activeTags: [],
        activeFilters: [],
    });

    const toggleFocus = (tag) => {
        if (state.activeTags.includes(tag)) {
            state.activeTags = state.activeTags.filter(item => item !== tag);
        } else {
            state.activeTags.push(tag);
        }
    };

    const toggleFilter = (filter) => {
        if (state.activeFilters.includes(filter)) {
            state.activeFilters = state.activeFilters.filter(item => item !== filter);
        } else {
            state.activeFilters.push(filter);
        }
    };

    return {
        state,
        dataTags,
        dataFilters,
        toggleFocus,
        toggleFilter,
    };
});