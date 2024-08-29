<script setup>
    const menus = [
        { id: 1, name: 'Home'},
        { id: 2, name: 'Sobre'},
        { id: 3, name: 'Login'},
    ]
</script>

<template>
    <nav>
        <span>Tutorial Vue</span>
        <ul>
            <li v-for="menu in menus" :key="menu.id"><a href="#">{{ menu.name }}</a></li>
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