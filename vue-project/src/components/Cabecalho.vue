<script setup lang='ts'>
const name = 'Usuários'
</script>

<template>
    <div>
        <h1 class="titulo">{{ name }}</h1>
    </div>
</template>

<style scoped> /* SCOPED - significa que esse estilo será aplicado somente neste componente*/
    .titulo{
        margin: 0 auto;
        text-align: center;
        color: #3d81ff;
    }
</style>