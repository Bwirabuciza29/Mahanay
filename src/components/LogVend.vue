<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 shadow-4">
        <div class="login100-form-title">
          <span class="login100-form-title-1">Se Connecter </span>
          <q-avatar size="100px" font-size="52px">
            <img src="~assets/Qrcode.png" />
          </q-avatar>
        </div>
        <div class="q-pa-md" style="max-width: 500px">
          <div class="q-gutter-y-xs">
            <q-form autofocus @submit="submitForm">
              <q-input
                dense
                label="Email *"
                v-model="formState.email"
                :rules="[
                  (val) => validateEmail(val) || 'Doit être un e-mail valide.',
                ]"
              ></q-input>
              <q-input
                dense
                label="Password *"
                v-model="formState.password.value"
                type="password"
                :rules="[
                  (val) =>
                    validatePassword(val) ||
                    'Le mot de passe doit répondre à tous les critères.',
                ]"
              >
              </q-input>
              <div class="password-criteria q-pa-sm">
                <div class="text-subtitle2 q-mb-sm">
                  Critères du Mot de passe:
                </div>
                <div>
                  <q-icon
                    :name="validPassword.length ? 'check_circle' : 'cancel'"
                    :color="validPassword.length ? 'positive' : 'negative'"
                  ></q-icon>
                  Doit comporter au moins 12 caractères.
                </div>
                <div>
                  <q-icon
                    :name="validPassword.capital ? 'check_circle' : 'cancel'"
                    :color="validPassword.capital ? 'positive' : 'negative'"
                  ></q-icon>
                  Doit contenir au moins une lettre majuscule.
                </div>
                <div>
                  <q-icon
                    :name="validPassword.number ? 'check_circle' : 'cancel'"
                    :color="validPassword.number ? 'positive' : 'negative'"
                  ></q-icon>
                  Doit Contenir au moins un chiffre.
                </div>
                <div>
                  <q-icon
                    :name="validPassword.symbol ? 'check_circle' : 'cancel'"
                    :color="validPassword.symbol ? 'positive' : 'negative'"
                  ></q-icon>
                  Doit contenir au moins un cactère spécial
                </div>
              </div>

              <div class="blondy q-pa-md">
                <div class="text-center">
                  <router-link to="/Vendeur">
                    <q-btn
                      type="submit"
                      color="black"
                      id="btn"
                      class="text-center"
                      label="Connexion"
                      style="width: 200px"
                  /></router-link>
                </div>
              </div>
              <div class="q-pa-md" style="max-width: 500px">
                <div class="q-gutter-y-xs text-center">
                  <router-link to="/PassWF">
                    <a href="#"
                      ><q-icon name="lock" color="black" /> Mot de Passe
                      oublié?</a
                    >
                  </router-link>
                </div>
                <br />
                <div class="col text-center">
                  <router-link to="/CompteVend">
                    <a href="#">
                      <q-icon name="person" /> Vous n'avez pas de compte? créer
                      un compte</a
                    >
                  </router-link>
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { reactive } from "vue";
type AccountFormState = {
  name: string;
  email: string;
  phone: string;
  password: {
    value: string;
    confirm: string;
  };
};
type PasswordValidator = {
  length: boolean;
  capital: boolean;
  number: boolean;
  symbol: boolean;
};
const formState = reactive(<AccountFormState>{
  name: "",
  email: "",
  phone: "",
  password: {
    value: "",
    confirm: "",
  },
});
const validPassword = reactive(<PasswordValidator>{
  length: false,
  capital: false,
  number: false,
  symbol: false,
});
function validateEmail(email: string): boolean {
  return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
}
function validatePassword(password: string): boolean {
  // Test length
  validPassword.length = password.length >= 12;
  // Test capital
  validPassword.capital = /^(?=.*[A-Z])/.test(password);
  // Test number
  validPassword.number = /^(?=.*[0-9])/.test(password);
  // Test symbol
  validPassword.symbol = /^(?=.*[!@#\$%\^&\*_\-=+])/.test(password);
  return (
    validPassword.length &&
    validPassword.capital &&
    validPassword.number &&
    validPassword.symbol
  );
}
function submitForm(): void {
  console.log("formState", formState);
}
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Rubik:wght@300;400;500;600&display=swap");

a {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  align-items: center;
  color: #000;
}

.a {
  font-family: "Poppins", sans-serif;
  color: black;
}

.col {
  font-family: "Poppins", sans-serif;
}

#btn {
  font-family: "poppins", sans-serif;
  text-transform: capitalize;
  border-radius: 0;
  font-weight: 600;
  border: 1px solid;
  position: relative;
  text-align: center;
  align-items: center;
}

.login100-form-title::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url("../assets/superlady.jpg");
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.create-account-card {
  width: 512px;
}
.password-criteria {
  background-color: #efefef;
  border-radius: 0.5rem;
}
</style>
