import { defineStore } from 'pinia'
import { packageService } from '@/services/package'
import type { IPackage } from '@/common/types/package'
import { ref } from 'vue'

export const usePackageStore = defineStore('package', () => {
  const packages = ref<IPackage[] | []>([])
  const loading = ref(true)
  const searchParams = ref('axios')

  async function getPopularPackages(page: number) {
    try {
      loading.value = true
      packages.value = []
      packages.value = await packageService.getPopularPackages(page)
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    packages,
    loading,
    searchParams,
    getPopularPackages
  }
})
