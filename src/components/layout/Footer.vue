<template>
  <footer class="footer">
    <div class="footer__block">Костя</div>
    <div class="footer__block">
      Git :
      <a class="footer__block-link" href="https://github.com/reelkrey" target="_blank">
        https://github.com/reelkrey
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px 40px;
  border-radius: 20px;
  color: #fff;
  background-color: hsl(201, 64%, 42%);

  &__block {
    font-size: 20px;
  }

  &__block-link {
    color: #fff;
  }
}
</style>
