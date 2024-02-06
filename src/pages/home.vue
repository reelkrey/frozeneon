<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()
const packages = computed(() => packageStore.packages)
const isLoading = computed(() => packageStore.loading)
const total = ref(0)
const limit = ref(10)
const currentPage = ref(5)
const url = ref('/')

onMounted(async () => {
  await packageStore.getPopularPackages()
  total.value = packages.value.length
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    {{}}
    <div v-if="packages">
      <Packages :packages="packages" />
      <Pagination :total="total" :limit="limit" :current-page="currentPage" :url="url" />
    </div>
  </div>
</template>
