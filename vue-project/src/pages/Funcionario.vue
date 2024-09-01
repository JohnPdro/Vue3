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
        <select 
        :class="funcionario.botaoSelect"
        v-model="cargoSelecionado">
            <option disabled value="">Selecione o cargo</option>
            <option v-for="cargo in cargos" :value="cargo" :key="cargo">{{ cargo }}</option>
        </select>
        <div>
            <button 
            :class="funcionario.botaoLogin"
            @click="storeLogin.logarUsuario(user.first_name)">Logar</button>
        </div>
        <div>
            <button
            :class="funcionario.botaoCores"
            @click="buscaCores()">Busca Cores</button>
        </div>
    </div>
</template>

<style module="funcionario"> 
.botaoLogin, .botaoCores{
    background-color: #3d81ff;
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
}

.botaoSelect{
    background-color: #e7e7e7;
    border: none;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
}

</style>