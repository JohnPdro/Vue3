<script setup>
import { ref, computed } from 'vue'

const header = ref('Shopping List App')
const editing = ref(false)
const newItem = ref('')
const newItemHighPriority = ref(false)

const characterCount = computed(()=> newItem.value.length)

const reversedItems = computed(()=> [...items.value].reverse())


const items = ref([
  {id: 1, label:'10 party hats', purchased: true, highPriority: false},
  {id: 2, label:'2 board games', purchased: true, highPriority: false},
  {id: 3, label:'20 cups', purchased: false, highPriority: true},
])
const saveItem = ()=>{
  items.value.push(
    {
      id:items.value.length + 1, 
      label: newItem.value,
      highPriority: newItemHighPriority.value
    })
  newItem.value = ''
  newItemHighPriority.value = ''
}

const doEdit = (e)=>{
  editing.value = e
  newItem.value = ''
  newItemHighPriority.value = ''
}

const togglePurchased = (item) =>{
  item.purchased = !item.purchased
}
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button class="btn" v-if="editing" @click="doEdit(false)">Cancel</button>
    <button class="btn btn-primary" v-else @click="doEdit(true)">Add Item</button>
  </div>
  <form 
    class="add-item-form" 
    v-if="editing"
    @submit.prevent="saveItem"
    >
    <input v-model="newItem" type="text" placeholder="Add an item">
    <label>
      <input type="checkbox" v-model="newItemHighPriority">
      High Priority
    </label>
    <button 
      :disabled="newItem.length < 5"
      class="btn btn-primary"
      >
      Save Item
    </button>
  </form>

  <p class="counter" v-if="editing">
    {{ characterCount }}/200
  </p>

  <ul>
    <li 
      v-for="(item, index) in reversedItems" 
      @click="togglePurchased(item)"
      :key="item.id"
      class="static-class"
      :class="{
        strikeout: item.purchased, 
        priority: item.highPriority,
        }"
      >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">
    Nothing to see here
  </p>
</template>


