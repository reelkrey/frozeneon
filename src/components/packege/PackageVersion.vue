<script setup lang="ts">
type Props = {
  packageVersions: []
}
defineProps<Props>()
</script>

<template>
  <ul>
    <PackageVersion :packageVersions="packageVersions" />
  </ul>
</template>
