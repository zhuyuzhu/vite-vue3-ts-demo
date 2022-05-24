<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref("234234");
const lineBreaks = (e: any) => {
  document.execCommand("insertText", !1, "\n");
};
</script>

<template>
  <div>{{ msg }}</div>
  <textarea
    class="edit"
    contenteditable="true"
    v-meta-ctrl-enter="lineBreaks"
    v-model="count"
  />
</template>

<style scoped lang="scss">
.edit {
  width: 400px;
  height: 80px;
  border: 1px solid black;
}
</style>
