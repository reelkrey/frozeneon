<script setup lang="ts">
import { range } from '@/composables/range'
import { computed } from 'vue'

type Props = {
  total: number
  limit: number
  currentPage: number
  url: string
}
const props = defineProps<Props>()

const pages = computed(() => {
  const pagesCount = Math.ceil(props.total / props.limit)
  return range(1, pagesCount)
})
</script>

<template>
  <ul class="pagination__list">
    <li class="pagination__item" v-for="page in pages" :key="page">
      <router-link
        class="pagination__item-link"
        :class="{ active: currentPage === page }"
        :to="{ path: url, query: { limit: page } }"
      >
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pagination {
  &__list {
    display: flex;
    justify-content: center;
    gap: 15px;
    list-style: none;
  }

  &__item-link {
    color: #000;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;

    &.active {
      color: #fff;
      background-color: hsl(201, 64%, 42%);
    }
  }
}
</style>
