<template>
  <div class="autoritheWindow">
    <form class="autoritheWindow__form" onsubmit="return false;">
      <label for="inputLogin" class="autoritheWindow__label">Логин</label>
      <input
        class="autoritheWindow__input autoritheWindow__input_login"
        type="text"
        id="inputLogin"
        v-model="authorithe.username"
      />
      <label for="inputPass" class="autoritheWindow__label">Пароль</label>
      <input
        class="autoritheWindow__input autoritheWindow__input_password"
        type="password"
        id="inputPass"
        v-model="authorithe.password"
      />
      <router-link to="/taskManager" class="autoritheWindow__btn">
        Авторизация
      </router-link>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Autorithe",
  components: {},
  computed: {
    authorithe() {
      return this.$store.getters.getAuthorithe;
    },
  },
  methods: {
    submit() {
      this.$store.dispatch("login");
    },
  },
};
</script>

<style lang="scss">
.autoritheWindow {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8ff;
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgb(202, 202, 202);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
  }
  &__label {
    align-self: flex-start;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: rgb(112, 112, 112);
  }
  &__input {
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(70, 70, 70);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    width: 300px;
    padding: 5px;
    &_login {
      margin-bottom: 10px;
    }
    &_password {
      margin-bottom: 10px;
    }
  }
  &__btn {
    box-sizing: border-box;
    padding: 5px 10px;
    background-color: rgb(215, 217, 241);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    border-radius: 10px;
  }
}
</style>
