<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import Emoji from "@/types/Emoji";
import Entry from "@/types/Entry";
import { computed, onMounted, ref } from "vue";

// data
const body = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => body.value.length);
const maxChars = 280;

// template refs
const textarea = ref<HTMLTextAreaElement | null>(null)
onMounted(() => textarea.value?.focus());

// events
const emit = defineEmits<{
  (e: "@create", entry: Entry): void;
}>();

// methods
const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxChars) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.substring(0, maxChars); // ambas variaveis 'body' e 'textarea' são atualizadas com o novo valor por isso é feito assim
  }
};

const handleSubmit = () => {
  emit("@create", {
    body: body.value,
    emoji: emoji.value,
    createAt: new Date(),
    userId: 1,
    id: Math.random(),
  });
  body.value = "";
  emoji.value = null;
};
</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmit()">
    <textarea
      :value="body"
      ref="textarea"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
