<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { usePackageStore } from '@/stores/package'

const packageStore = usePackageStore()
const packageVersions = computed(() => packageStore.packageVersions.versions)
const isLoading = computed(() => packageStore.packageVersions.loading)

onMounted(async () => {
  await packageStore.getPackage(packageStore.searchParams)
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    <div v-if="packageVersions">
      <div class="search__params">
        {{ packageStore.searchParams }}
      </div>
      <PackageVersions :packageVersions="packageVersions" />
    </div>
  </div>
</template>

<style lang="scss" scoped§>
.search__params {
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 30px;
  max-width: max-content;
  font-size: 30px;
  color: #fff;
  background-color: hsl(201, 64%, 42%);
}
</style>
