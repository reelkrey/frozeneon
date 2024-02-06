import type { IPackage } from '@/common/types/package'
import api from '@/services/api'

async function getPopularPackages() {
  const response = await api.get<IPackage[]>(`/stats/packages`)
  return response.data
}

async function getPopularPackagesByPage(page: number) {
  const response = await api.get<IPackage[]>(`stats/packages?limit=10&page=${page}`)
  return response.data
}

export const packageService = {
  getPopularPackages,
  getPopularPackagesByPage
}
