<script setup>
import { onMounted, ref } from 'vue';
import Usuario from './Usuario.vue';

const users = ref([])

const findInformations = async () => {
    const req = await fetch(`https://reqres.in/api/users?page=2`);
    const json = await req.json();
    return json.data;
};

onMounted(async() => {
    users.value = await findInformations()
})

const vEmail = {
    created(el, biding) {
        el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`
    }
}
</script>

<template>
<div class="pessoas">
    <Usuario 
    v-for="user in users" 
    :key="user.div"
    :user="user"
    />
</div>
</template>

<style scoped>
.pessoas{
    display: flex;
    flex-wrap: wrap;
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