<template>
  <header class="header">
    <span class="header__logo">Frozeneon</span>
    <Search />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 10px;
  }

  &__logo {
    font-size: 42px;
    padding: 10px;
    border-radius: 20px;
    color: #fff;
    background-color: hsl(201, 64%, 42%);
  }

  &__button {
    white-space: nowrap;
    color: #fff;
    border-radius: 30px;
    background: #303030;
    padding: 12px 25px;

    @media (max-width: 840px) {
      align-self: flex-end;
    }
  }
}
</style>
