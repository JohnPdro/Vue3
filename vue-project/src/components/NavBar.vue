<script setup>
import { useCargos } from '@/stores/cargos'
import { storeToRefs } from 'pinia';

const store = useCargos()
const { totalCargos } = storeToRefs(store)

    const menus = [
        { id: 1, name: 'Home', path: '/'},
        { id: 2, name: 'Equipe', path: '/equipe'},
    ]
</script>

<template>
    <nav>
        <span>Tutorial Vue</span>
        Total Cargos {{ totalCargos }}
        <ul>
            <li v-for="menu in menus" :key="menu.id">
                <RouterLink :to="menu.path">{{ menu.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3542b8;
}
span{
    color: white;
}
ul {
    display: flex;
    list-style-type: none;
}
ul li{
    padding: 0 5px;
}
ul li a{
    text-decoration: none;
    color: white;
}
</style>