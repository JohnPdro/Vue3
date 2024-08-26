<script setup>

import {ref, reactive, onMounted} from 'vue';

const email = ref('');
const password = ref('');

const user = reactive({
    email: '',
    password: '',
});

const names = reactive([]);

onMounted(() => {
    names.push(
        {
            firstName:'Joao',
            age: 20
        },
        {
            firstName:'Maria',
            age: 25
        },
        {
            firstName:'Pedro',
            age: 30
        }
    )
})

function login(){
    console.log(user.email, user.password)
}

function remove(user){
    const index = names.findIndex(name => name.firstName === user.firstName)
    names.splice(index, 1)
}
</script>

<template>
    
    <template v-if="names.length > 0">
        <ul>
            <li v-for="name in names">{{ name.firstName }} - <button @click="remove(name)">Remover</button></li>
        </ul>
    </template>
    <template v-else>Nenhum user encontrado</template>

    <template v-if="user.email.length <= 0">Email vazio</template>
    <template v-else>Email {{ user.email }}</template>

    <form action="" @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="user.email">
        <input type="text" placeholder="Password" v-model="user.password">
        <button type="submit">Login</button>
    </form>
</template>

<style>

</style>