<script lang="ts" setup>
import DateDisplay from "./DateDisplay.vue";
import Entry from "@/types/Entry";
import UseEmojis from "@/composables/UseEmojis";
const { findEmoji } = UseEmojis();

defineProps<{
  entry: Entry;
}>();

</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entry.emoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createAt" class="mr-2" />
      |
      <span class="ml-2">danielkelly_io</span>
    </div>
  </div>
</template>
