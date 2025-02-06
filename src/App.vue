<script setup>
import {onMounted} from "vue";
import { useLocalStore } from "./store/local.js";
import AppHeader from "./components/structural/AppHeader.vue";
import AppFooter from "./components/structural/AppFooter.vue";

const localeStore = useLocalStore();

onMounted( async () => {
      await localeStore.init();
})
</script>

<template>
    <div class="flex flex-col justify-between h-screen">
        <AppHeader />
        <RouterView class="flex-grow"/>
        <AppFooter />
    </div>
</template>

<style scoped>
</style>
