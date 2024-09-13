<template>
    <div>
        <header>
            <!-- Barra de navegación -->
        </header>
        <main>
            <router-view></router-view> <!-- Aquí se renderizan las vistas -->
        </main>
        <footer>
            <!-- Pie de página -->
        </footer>
    </div>
</template>

<script>
export default {
    name: 'MainLayout',
};
</script>

<style>
/* Estilos para el layout */
</style>