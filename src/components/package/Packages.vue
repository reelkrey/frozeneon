<script setup lang="ts">
type Props = {
  packages: []
}
defineProps<Props>()
</script>

<template>
  <ul>
    <Package :packages="packages" />
  </ul>
</template>
