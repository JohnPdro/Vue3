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
    },
    selecao: Boolean, 
});

const emit = defineEmits(['selecao']);

const enviaEmit = (id) => {
    emit('selecao', id)
}

</script>

<template>
    <div :class="usuario.perfil">
        <button :class="usuario.botao" @click="enviaEmit(user.id)">{{ !selecao ? "Selecionar" : "Desmarcar" }}</button>
        <RouterLink :to="`/equipe/${user.id}`"><img :src="user.avatar" alt="Perfil"></RouterLink>
        <span :class="usuario.textGerente" v-if="user.first_name == 'Michael'">Gerente</span>
        <span :class="usuario.textOperacional" v-else>Operacional</span>
        <span :class="usuario.userName">{{ user.first_name }}</span>
        <span>{{ user.email }}</span>
    </div>
</template>

<style module="usuario">
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

.textGerente, .textOperacional{
    color: #3d81ff;
    font-size: 0.80rem !important;
    font-weight: bold;
}
</style>