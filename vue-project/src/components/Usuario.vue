<script setup>

defineProps({
    user: {
        type: Object,
        required: true,
        default: () => ({
            id: 0,
            first_name: '',
            last_name: '',
            avatar: '',
            email: ''
        })
    }
});

</script>

<template>
    <div class="perfil">
        <img :src="user.avatar" alt="Perfil">
        <span class="text-gerente" v-if="user.first_name == 'Michael'">Gerente</span>
        <span class="text-operacional" v-else>Operacional</span>
        <span class="userName">{{ user.first_name }}</span>
        <span>{{ user.email }}</span>
    </div>
</template>

<style scoped>
.formulario{
    margin: 0 auto;
    padding: 5px;
    width: 200px;
    background-color: #e7e7e7;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.411);
    border-radius: 3px;
}
.botao{
    margin: 5px auto;
    padding: 5px;
    display: block;
    background-color: #e7e7e7;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
}

.botao:hover{
    background: #7c7c7c;
    color: white;
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

.text-gerente, .text-operacional{
    color: #3542b8;
    font-size: 0.80rem !important;
    font-weight: bold;
}
</style>