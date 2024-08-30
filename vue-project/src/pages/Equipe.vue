<script setup>
import { useCargos } from '@/stores/cargos';
import { storeToRefs } from 'pinia';

const store = useCargos()

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
    </div>
</template>

<style scoped>
.box{
    margin-left: 20px;
}
</style>