<script setup>
import { RouterLink } from 'vue-router';
import GitHubIcon from '../../icons/GitHub.vue';
import DiscordIcon from '../../icons/Discord.vue';
import MenuBurgerIcon from '../../icons/MenuBurger.vue';
</script>

<template>
    <header
        class=" justify-between flex p-1 px-5 md:justify-around items-center bg-[#1A1A1A] border-b border-[#363636]">
        <RouterLink to="/" class="flex items-center">
            <img src="../../resources/imgs/quantum-devs.webp" alt="quantum-logo" class="size-12">
            <span class="text-lg font-medium">Quantum</span>
        </RouterLink>
        <div class="items-center hidden gap-5 md:flex">
            <nav class="flex gap-5">
                <RouterLink to="/" class="transition hover:text-blue-400">
                    Inicio
                </RouterLink>
                <RouterLink to="/docs" class="transition hover:text-blue-400">
                    Docs
                </RouterLink>
                <RouterLink to="/resources" class="transition hover:text-blue-400">
                    Recursos
                </RouterLink>
                <RouterLink to="/contributors" class="transition hover:text-blue-400">
                    Contribuidores
                </RouterLink>
            </nav>
            <div class="flex items-center gap-2">
                <a href="https://github.com/quantum-developments" target="_blank"
                    class="p-1.5 border rounded transition border-button1 hover:bg-button1hover">
                    <GitHubIcon />
                </a>
                <a href="https://discord.com" target="_blank"
                    class="p-1.5 border rounded transition border-button1 hover:bg-button1hover">
                    <DiscordIcon />
                </a>
            </div>
        </div>
        <button
            class="block md:hidden p-1.5 cursor-pointer border rounded transition border-button1 hover:bg-button1hover">
            <MenuBurgerIcon />
        </button>
    </header>
</template>