<script setup>
import { ref } from 'vue';

const nome = ref('Fulano')
const show = true
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
</script>

<template>
    <div>
        <h2>Composition Diretivas</h2>

        <h3>v-if</h3>
        <span v-if="show">Olá pessoas!</span>
        <span v-else-if="show == null">Olá kt#$f3j4u#%$!!</span>
        <span v-else>Oh nooohh!</span>

        <br /><br />
        
        <h3>v-show</h3>
        <span v-show="show">Falando sobre v-show</span>
        <p>Diferença entre v-if e v-show: Qunado utilizamos v-if é rederizado apenas o que passar na validação<v-show></v-show></p>
        <p>O contrario do v-show que rendieriza todo o conteúdo com display none, exibindo apenas o que passar na validação</p>

        <br />
        
        <h3>v-for</h3>
        <ul>
            <li v-for="item, index in array" :key="index">
                {{ item }}
            </li>
        </ul>

    </div>
</template>

<style scoped>

</style>