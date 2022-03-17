<template>
  <div class="desafio-contador">
    <p><strong>Contador:</strong> {{ contador }}</p>
    <button @click="botaoMais">+</button>
    <button @click="botaoMenos">-</button>
  </div>
</template>

<script>
export default {
    name: 'DesafioContador',
    data() {
        return {
          contador: 0
        }
    },
    methods: {
        botaoMais() {
            this.contador++
        }, 
        botaoMenos() {
            this.contador--
        } 
    }    
}
</script>

<style scoped>
</style>