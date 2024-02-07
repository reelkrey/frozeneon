import { defineStore } from 'pinia'
import type { IPackage } from '@/common/types/package'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const packageItem = ref<IPackage | null>(null)
  const isActive = ref(false)

  function openModal(packageInfo: IPackage) {
    isActive.value = true
    packageItem.value = packageInfo
  }

  function closeModal() {
    isActive.value = false
  }

  return {
    packageItem,
    openModal,
    closeModal,
    isActive
  }
})
