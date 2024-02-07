import type { IPackage } from '@/common/types/package'
import api from '@/services/api'

async function getPopularPackages(page: number) {
  const response = await api.get<IPackage[]>(`stats/packages?limit=10&page=${page}`)
  return response.data
}

async function searchPackage(name: string) {
  const response = await api.get<IPackage>(`/packages/npm/${name}`)
  return response.data
}

export const packageService = {
  getPopularPackages,
  searchPackage
}
