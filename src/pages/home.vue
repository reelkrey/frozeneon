<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePackageStore } from '@/stores/package'

const route = useRoute()
const packageStore = usePackageStore()
const packages = computed(() => packageStore.packages)
const isLoading = computed(() => packageStore.loading)
const currentPage = computed(() => Number(route.query.limit || '1'))
const baseUrl = computed(() => route.path)
const total = ref(0)
const limit = ref(10)

onMounted(async () => {
  await packageStore.getPopularPackages()
  total.value = packages.value.length
})

watch(currentPage, async () => {
  await packageStore.getPopularPackagesByPage(currentPage.value)
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    <div v-if="packages">
      <Packages :packages="packages" />
      <Pagination :total="total" :limit="limit" :current-page="currentPage" :url="baseUrl" />
    </div>
  </div>
</template>
