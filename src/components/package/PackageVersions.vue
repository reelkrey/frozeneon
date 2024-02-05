<script setup lang="ts">
type Props = {
  packageVersions: []
}
defineProps<Props>()
</script>

<template>
  <li class="user__item" v-for="packageVersion in packageVersions" :key="packageVersion">
    <div class="user__item-inner">
      {{ packageVersion }}
    </div>
  </li>
</template>

<style lang="scss" scoped>
.user {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px 10px;
    border-radius: 1000px;
    border: 1px solid #b6b6b6;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.01);
    }
  }

  &__avatar {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 40px;

    &-image {
      border-radius: 50%;
    }

    @media (max-width: 500px) {
      margin-right: 10px;
    }
  }

  &__email {
    color: #a8a8a8;
  }

  &__item-inner {
    &.button {
      margin-left: auto;
      margin-right: 20px;
    }

    &.details {
      display: flex;
      flex-direction: column;
    }
  }

  &__name {
    max-width: max-content;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__button {
    &:hover {
      transform: scale(1.5);
    }
  }
}
</style>
