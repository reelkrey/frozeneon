<script setup lang="ts">
import type { IPackage } from '@/common/types/package'

type Props = {
  packages: IPackage[]
}
defineProps<Props>()
</script>

<template>
  <ul>
    <Package :packages="packages" />
  </ul>
</template>
