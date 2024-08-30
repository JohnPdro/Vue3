<script setup>
import { computed } from 'vue';
import { useDark, useMediaQuery, useToggle } from '@vueuse/core'
import { useLogin } from '@/stores/login';
import { storeToRefs } from 'pinia';

const store = useLogin();
const { usuarioLogado, logado } = storeToRefs(store)



const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
})

const toggleDark = useToggle(isDark)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const tipoTela = computed(() => (isLargeScreen.value ? 'Desktop' : 'Mobile'))

</script>

<template>
    {{ tipoTela }}
    <div>
        <h1 class="titulo" v-if="logado">Bem vindo(a) {{ usuarioLogado }}</h1>
        <h1 class="titulo" v-else>Funcionarios</h1>
    </div>
    <div class="btn">
        <button @click="toggleDark()">Mudar tema</button>
    </div>
</template>

<style scoped> /* SCOPED - significa que esse estilo será aplicado somente neste componente*/
    .titulo{
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #3d81ff;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 5px;
    }
    .btn > button{
        background-color: #3d81ff;
        color: white;
        padding: 5px;
        margin-bottom: 10px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
</style>