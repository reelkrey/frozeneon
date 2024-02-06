<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePackageStore } from '@/stores/package'

const route = useRoute()
const packageStore = usePackageStore()
const packages = computed(() => packageStore.packages)
const isLoading = computed(() => packageStore.loading)
const currentPage = computed(() => Number(route.query.limit || '1'))
const baseUrl = computed(() => route.path)

onMounted(async () => {
  await packageStore.getPopularPackages(currentPage.value)
})

watch(currentPage, async () => {
  await packageStore.getPopularPackages(currentPage.value)
})
</script>

<template>
  <div class="home">
    <div v-if="isLoading">Загрузка...</div>
    <div v-if="packages" class="home__inner">
      <Packages class="packages" :packages="packages" />
      <Pagination
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
        :pages="10"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.packages {
  min-height: 70vh;
}
</style>
