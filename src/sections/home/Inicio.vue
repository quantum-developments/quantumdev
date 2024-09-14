<script setup>
import GitHubIcon from '../../icons/GitHub.vue';
</script>

<template>
    <main class="mx-auto my-0 max-w-7xl">
        <div class="px-8 py-16">
            <div class="flex justify-center mb-5">
                <p
                    class="inline-flex items-center gap-5 p-1.5 px-2 text-sm border rounded-full border-button1hover bg-button1">
                    ✨
                    ¡Servidor de discord
                    ya
                    disponible!
                    <a href="https://discord.com" class="text-blue-500 transition hover:text-blue-500/70">Ir ahora ⟶</a>
                </p>
            </div>
            <h1
                class="py-2 mb-5 text-5xl font-bold text-center text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Una Comunidad De
                <br>
                Programación En Español
            </h1>
            <p class="max-w-3xl mx-auto my-0 mb-10 text-center md:text-long text-white/60">
                Únete a una comunidad dedicada a la <br>
                <strong>programación en español</strong>, donde podrás aprender, colaborar y
                crecer
                junto a otros
                desarrolladores.
            </p>
            <div class="flex flex-wrap justify-center gap-5">
                <a href="https://github.com/quantum-developments/quantumdev" target="_blank"
                    class="px-4 py-2 transition bg-blue-500 rounded hover:bg-blue-600">Repositorio</a>
                <a href="/"
                    class="px-4 py-2 transition rounded text-white/80 hover:text-white bg-button1 hover:bg-button1hover">¡Únete
                    ahora!</a>
                <a href="https://github.com/quantum-developments" target="_blank"
                    class="px-4 py-2 transition rounded text-white/80 hover:text-white bg-button1 hover:bg-button1hover">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    </main>
</template>