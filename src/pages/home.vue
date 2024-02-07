<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePackageStore } from '@/stores/package'

const route = useRoute()
const router = useRouter()
const packageStore = usePackageStore()
const packages = computed(() => packageStore.packages)
const packageFiltered = computed(() => packageStore.packageFiltered)
const isLoading = computed(() => packageStore.isLoading)
const isFailed = computed(() => packageStore.isFailed)
const currentPage = computed(() => Number(route.query.limit || '1'))
const baseUrl = computed(() => route.path)

async function goBack() {
  router.push({ path: '/', query: { limit: packageStore.currentRoute } })
  await packageStore.getPopularPackages(packageStore.currentRoute)
}

onMounted(async () => {
  if (currentPage.value) {
    await packageStore.getPopularPackages(currentPage.value)
  }
  if (route.query.package) {
    await packageStore.searchPackage(`${route.query.package}`)
  }
})

watch(currentPage, async () => {
  if (!route.query.package) {
    await packageStore.getPopularPackages(currentPage.value)
  }
})
</script>

<template>
  <div class="home">
    <div v-if="isLoading">Loading...</div>
    <div v-if="isFailed">
      <button class="home__button" @click="goBack">back</button>
      <span class="home__span">Nothing there...</span>
    </div>
    <div class="home__inner" v-esle>
      <div v-if="packages">
        <Packages class="packages" :packages="packages" />
      </div>
      <div v-if="packageFiltered">
        <button class="home__button" @click="goBack">back</button>
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

  &__inner {
    min-height: 70vh;
  }

  &__button {
    margin-bottom: 20px;
  }

  &__span {
    display: block;
  }
}
</style>
