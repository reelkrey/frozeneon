<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useModalStore } from '@/stores/modal'
import { ref } from 'vue'

const modalStore = useModalStore()
const modal = ref(null)

onClickOutside(modal, modalStore.closeModal)
</script>

<template>
  <div class="overlay" v-if="modalStore.isActive">
    <div class="modal" ref="modal">
      <div class="modal__wrapper">
        <ul class="modal__list">
          <li class="modal__item" v-for="(value, key) in modalStore.packageItem" :key="key">
            <span class="modal__item-span key">{{ key }}:</span>
            <span class="modal__item-span">{{ value }}</span>
          </li>
        </ul>
        <button class="modal__button" @click="modalStore.closeModal">✖</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  &__wrapper {
    position: relative;
    padding: 80px 110px;
    border-radius: 20px;
    background-color: #fefefe;
    box-shadow: 3px 4px 20.2px 0px #e8e8e8;

    @media (max-width: 840px) {
      padding: 40px;
    }

    @media (max-width: 500px) {
      padding: 40px 20px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 500px;
    overflow-y: auto;

    @media (max-width: 650px) {
      max-width: 300px;
    }

    @media (max-width: 500px) {
      max-width: 250px;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 10px 20px;
    overflow-x: auto;
  }

  &__item-span {
    display: block;

    @media (max-width: 500px) {
      font-size: 14px;
    }

    &.key {
      font-weight: 700;
    }
  }

  &__button {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>
