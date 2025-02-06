<script setup>
import { ref } from "vue";

const isSoundOn = ref(false);

const toggleSound = () => {
    isSoundOn.value = !isSoundOn.value;
};
</script>

<template>
    <div class="flex items-center justify-start my-2">
        <label
            class="relative inline-flex items-center cursor-pointer"
            @click="toggleSound"
        >
            <div
                class="w-[70px] h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full transition"
                :class="{ 'bg-indigo': isSoundOn }"
            ></div>

            <div
                class="absolute left-0 -top-3 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center transition-all duration-300"
                :class="{ 'left-7': isSoundOn }"
            >
                <img
                    v-if="isSoundOn"
                    src="/src/assets/icons/soundon.svg"
                    alt="Sound On"
                    class="w-6 h-6"
                />
                <img
                    v-else
                    src="/src/assets/icons/soundoff.svg"
                    alt="Sound Off"
                    class="w-6 h-6"
                />
            </div>
        </label>
    </div>
</template>

<style scoped>
/* Дополнительные стили, если нужно */
</style>