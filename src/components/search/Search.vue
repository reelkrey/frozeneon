<script setup lang="ts">
import { usePackageStore } from '@/stores/package'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const packageStore = usePackageStore()
const searchParams = ref('')
const router = useRouter()

async function searchPackage() {
  router.push({ path: '/', query: { package: searchParams.value } })
  await packageStore.searchPackage(searchParams.value)
  searchParams.value = ''
}
</script>

<template>
  <form class="form" @submit.prevent="searchPackage">
    <input class="input" type="text" placeholder="Search ..." v-model="searchParams" />
    <button class="button" type="submit">Find</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 20px;
}

.input {
  padding: 15px 25px;
  border-radius: 30px;
  border: 1px solid #b6b6b6;
  min-width: 300px;

  &::placeholder {
    color: #a8a8a8;
  }

  @media (max-width: 650px) {
    min-width: 0;
  }
}

.button {
  color: #fff;
  background-color: hsl(201, 64%, 42%);
  padding: 10px 20px;
  border-radius: 30px;
}
</style>
