<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { reactive } from "vue";
import User from "./types/User";
import Entry from "./types/Entry";

const entries: Entry[] = reactive([]);
const user: User = reactive({
  id: 1,
  username: "danielkelly_io",
  settings: [],
})
console.log(user)
const handleCreateEntry = (entry: Entry) => {
  entries.unshift(entry);
  console.log(entry)
}
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry"/>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry"/>
      </li>
    </ul>
  </main>
</template>
