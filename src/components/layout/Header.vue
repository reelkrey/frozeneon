<template>
  <header class="header">
    <div class="header__logo">
      <router-link class="header__logo-link" to="/">Frozeneon</router-link>
    </div>
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
    font-size: 30px;
    padding: 10px;
    border-radius: 20px;
    color: #fff;
    background-color: hsl(201, 64%, 42%);
  }

  &__logo-link {
    color: #fff;
  }
}
</style>
