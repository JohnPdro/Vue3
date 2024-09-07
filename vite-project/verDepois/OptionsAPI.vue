<script>
    export default {
        data() {
            return {
                nomeAluno: 'João',
                nota1: 10,
                nota12: 10,
            }
        },
        computed: {
            media() {
                return (this.nota1 + this.nota12) / 2
            }
        }
    }

</script>

<template>
    <div>
        <h2>Options API</h2>
        <h3>{{ nomeAluno }}</h3>
        <input type="number" v-model="nota1">
        <input type="number" v-model="nota2">
        <p>Média: {{ media }}</p>
    </div>
</template>

<style>

</style>