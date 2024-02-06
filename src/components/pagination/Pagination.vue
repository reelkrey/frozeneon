<script setup lang="ts">
type Props = {
  currentPage: number
  url: string
  pages: number
}
defineProps<Props>()
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
