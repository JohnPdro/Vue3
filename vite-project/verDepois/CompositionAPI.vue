<script setup>
import Diretivas from './Diretivas.vue';
import { ref, reactive, onMounted, computed } from 'vue';

let nome = ref('Vue')
let temperatura = ref(0)
let person = reactive ({
    name: 'Joe',
    age: 30
})

onMounted(() => {
    nome.value = 'Vite'
    person.name ='John'
    console.log(person)
})

const verificaTemperatura = computed(() => {
    return temperatura.value > 25 ? 'Temperatura alta' : 'Temperatura baixa'
})

const verificaTemperaturaFunction = () => {
    return temperatura.value > 25 ? 'Temperatura alta' : 'Temperatura baixa'
}

</script>

<template>
    <div>
        <h1>Composition</h1>
        <p>{{ nome }}</p>
        <input type="text" v-model="nome"><br />
        <input type="text" v-model="temperatura"><br />
        <span>{{ verificaTemperatura }}</span><br />
        <span>{{ verificaTemperaturaFunction() }}</span>
    </div>
    <Diretivas />
</template>

<style scoped>

</style>