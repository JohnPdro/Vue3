<script setup>
    import Usuario from '@/components/Usuario.vue';
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCargos } from '@/stores/cargos';
    import { useLogin } from '@/stores/login';
    import { useFetch } from '@/composables/fetch';

    const router = useRoute()
    const id = router.params.id
    
    const store = useCargos()
    const { adicionaCargo, buscaCores } = store
    const cargoSelecionado = ref('')
    const cargos = ["Gerência", "Supervisão", "Operacional"]

    const storeLogin = useLogin()

    const { data: user } = useFetch(`https://reqres.in/api/users/${id}`)

    watch(cargoSelecionado, (novoCargo) => {
        const { id, first_name: nome } = user.value
        const funcioario = { id, nome, cargo: novoCargo }
        adicionaCargo(funcioario)
    })
</script>

<template>
    <div>
        <div v-if="carregando">Carregando...</div>
        <Usuario :user="user" v-else/>
        <select v-model="cargoSelecionado">
            <option disabled value="">Selecione o cargo</option>
            <option v-for="cargo in cargos" :value="cargo" :key="cargo">{{ cargo }}</option>
        </select>
        <div>
            <button @click="storeLogin.logarUsuario(user.first_name)">Logar</button>
        </div>
        <div>
            <button @click="buscaCores()">Busca Cores</button>
        </div>
    </div>
</template>

<style scoped> 

</style>