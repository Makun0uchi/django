<template>
    <x-dialog v-model="showModalAuth" class="x-auth">
        <header class="x-auth-header">
            <h1>Авторизация</h1>
        </header>
        <form @submit.prevent="loginUser" class="x-login-form">
            <x-input required type="text" class="x-username" placeholder="Логин..." v-model="username" />
            <x-input required type="password" class="x-password" placeholder="Пароль..." v-model="password" />
            <x-button class="x-in">Войти</x-button>
        </form>
    </x-dialog>
</template>
<script>
import {mapActions} from "vuex"

export default {
    name: "LoginPage",
    data() {
        return {
            username: "",
            password: "",
            showModalAuth: true
        }
    },
    methods: {
        ...mapActions(['car/login']),
        loginUser() {
            this['car/login']({username: this.username, password: this.password, router: this.$router})
        }
    }
}
</script>

<style scoped>
.x-auth-header {
    font-family: "Oldtimer";
    text-align: center;
    color: white;
}

.x-login-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 10px auto;
}

.x-password {
    margin: 20px 0;
}
</style>