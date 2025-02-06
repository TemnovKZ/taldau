import axios from 'axios';

const BASE_URL = 'https://stage-publish.testingcms.innovation.nprod.thrivebyfive.com';

export const fetchUiContent = async (locale = 'en-KZ') => {
    const url = `${BASE_URL}/app/ui/0.35/${locale}/uicontent.json`;
    const response = await axios.get(url);
    return response.data;

};

export const fetchActivityContent = async (locale = 'en-KZ') => {
    const url = `${BASE_URL}/catalogue/58/${locale}/catalogue.json`;
    const response = await axios.get(url);
    return response.data;
};

export const fetchLocaleData = async () => {

    const locales = [
        'en-KZ',
        'kz-KZ',
        'ru-KZ',
    ]

    const url = `${BASE_URL}/`
}