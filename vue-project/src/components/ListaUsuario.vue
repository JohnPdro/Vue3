<script setup>
import { ref, computed } from 'vue';
import Usuario from './Usuario.vue';
import { useFetch } from '@/composables/fetch';

const { data: users, error, carregando } = useFetch(`https://reqres.in/api/users?page=2`)

const idsSelecao = ref([])

const adicionaSlelecao = (evento) => {
    if (selectedId(evento)){
        idsSelecao.value = idsSelecao.value.filter(x => x !== evento)
        return
    }
    idsSelecao.value.push(evento)
}

const selectedUsers = computed(() =>{
    if(!users.value) return []
    return users.value.filter((x) => selectedId(x.id))
})

const selectedId = (id) => {
    return idsSelecao.value.includes(id);
}

</script>

<template>
    <div :class="lista.selecionado">
        <span v-for="selectedUser in selectedUsers" :key="selectedUser.id" :class="lista.card"> {{ selectedUser.first_name }}</span>
    </div>
    <div v-if="carregando">
        <h3>Carregando...</h3>
    </div>
    <div :class="lista.pessoas" v-else>
        <div v-for="user in users" :key="user.id" v-if="!error">
            <Usuario 
            :user="user"
            :selecao="selectedId(user.id)"
            @selecao="adicionaSlelecao"
            />
        </div>
        <div v-else>
            {{ error }}
        </div>
    </div>
</template>

<style module="lista">
.selecionado {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
.selecionado > span{
    background-color: #3542b8;
    padding: 5px;
    font-size: 0.785rem;
    border-radius: 5px;
    color: white;
}
.pessoas{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.text-gerente, .text-operacional{
    color: #3542b8;
    font-size: 0.80rem !important;
    font-weight: bold;
}
.perfil{
    width: 150px;
    text-align: center;
}

.perfil img{
    margin: 0 auto;
    width: 80px;
    display: block;
    padding: 5px;
    border-radius: 10px;
}

.perfil span{
    display: block;
    font-size: 0.75rem;
    font-family: Arial, Helvetica, sans-serif;
}

.userName{
    font-size: 1rem !important;
    font-weight: bold;
}
</style>