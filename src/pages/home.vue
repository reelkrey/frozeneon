<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePackageStore } from '@/stores/package'
import PackageFiltered from '@/components/package/PackageFiltered.vue'

const route = useRoute()
const packageStore = usePackageStore()
const packages = computed(() => packageStore.packages)
const packageFiltered = computed(() => packageStore.packageFiltered)
const isLoading = computed(() => packageStore.isLoading)
const isFailed = computed(() => packageStore.isFailed)
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
    <div v-if="isLoading">Loading...</div>
    <div v-if="isFailed">
      <span>Nothing there...</span>
    </div>
    <div class="home__inner">
      <div v-if="packages">
        <Packages class="packages" :packages="packages" />
      </div>
      <div v-if="packageFiltered">
        <PackageFiltered />
      </div>
    </div>
    <Pagination v-if="packages" :current-page="currentPage" :url="baseUrl" :pages="10" />
    <Modal />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.home__inner {
  min-height: 70vh;
}
</style>
