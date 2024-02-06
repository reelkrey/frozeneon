import { defineStore } from 'pinia'
import { packageService } from '@/services/package'
import type { IPackage } from '@/common/types/package'
import { ref } from 'vue'

export const usePackageStore = defineStore('package', () => {
  const packages = ref<IPackage[] | IPackage | []>([])
  const isLoading = ref(true)
  const isFailed = ref(false)

  async function getPopularPackages(page: number) {
    try {
      isLoading.value = true
      isFailed.value = false
      packages.value = []
      packages.value = await packageService.getPopularPackages(page)
      isLoading.value = false
    } catch (error) {
      isLoading.value = false
      isFailed.value = true
      console.log(error)
    }
  }

  async function searchPackage(name: string) {
    try {
      isLoading.value = true
      isFailed.value = false
      packages.value = []
      packages.value = await packageService.searchPackage(name)
      isLoading.value = false
    } catch (error) {
      isLoading.value = false
      isFailed.value = true
      console.log(error)
    }
  }

  return {
    packages,
    isLoading,

    getPopularPackages,
    searchPackage,
    isFailed
  }
})
