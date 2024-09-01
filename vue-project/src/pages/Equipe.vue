<script setup>
import { useCargos } from '@/stores/cargos';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useCargos()

const corSelecionada = ref('fff')

const mudarCor = (cor) => {
    corSelecionada.value = cor
}

const { cargos, cores } = storeToRefs(store)
</script>

<template>
    <div class="box">
        <h1>Equipe</h1>
        <div v-for="cargo in cargos" :key="cargo.id">
            {{ cargo.cargo }} {{ cargo.nome }}
            <button @click="store.removeCargo(cargo.id)">Remover</button>
        </div>
    </div>
    <div v-for="cor in cores" :key="cor.id">
        {{ cor }}
        <button @click="mudarCor(cor)">Mudar Cor</button>
    </div>
    <div class="painel"></div>
</template>

<style scoped>
.box{
    margin-left: 20px;
}
.painel{
    width: 70px;
    height: 30px;
    border: 1px solid;
    background: v-bind(corSelecionada);
}
</style>