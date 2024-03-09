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
        <div class="blondy text-center">
          <form @submit.prevent="btnLogin">
            <div class="blondy">
              <q-select
                v-model="form.role"
                type="role"
                :options="['Client', 'Vendeur']"
                label="Qui êtes-vous?"
              />
            </div>
            <div class="blondy">
              <q-input
                v-model="form.email"
                type="email"
                label="email"
                :rules="[(val) => validateEmail(val) || 'Invalid Mail']"
                lazy-rules
                color="text-white"
              />
            </div>

            <div class="blondy">
              <q-input
                name="psw"
                v-model="form.pasw"
                label="Mot de Passe"
                standar
                :type="isPwd ? 'password' : 'text'"
                autocomplete
                :rules="[(val) => val.length >= 4 || 'Minimum 4 caractère']"
                lazy-rules
                bg-color="field text-white"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>

            <div class="blondy">
              <div class="text-center">
                <q-checkbox
                  v-model="form.check"
                  class="a"
                  label="Se souvenir de moi"
                  color="primary"
                  style="font-weight: bold; color: #163758"
                  true-value="Oui"
                  false-value="non"
                />
              </div>
              <div></div>
            </div>

            <div class="blondy q-pa-md">
              <div class="text-center">
                <q-btn
                  type="submit"
                  color="black"
                  id="btn"
                  class="text-center"
                  label="Connexion"
                />
              </div>
            </div>
            <div class="blondy q-pa-md">
              <div class="col text-center">
                <router-link to="/PassWF">
                  <a href="#"
                    ><q-icon name="lock" color="black" /> Mot de Passe
                    oublié?</a
                  >
                </router-link>
              </div>
              <br />
              <div class="col text-center">
                <router-link to="/CreateC">
                  <a href="#">
                    <q-icon name="person" /> Vous n'avez pas de compte? créer un
                    compte</a
                  >
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      form: {
        check: false,
        email: ref(""),
        password: ref(""),
        isPassword: ref(false),
      },
    };
  },
  methods: {
    btnLogin() {
      if (!this.form.role === "" && !this.form.email && !this.form.password) {
        this.$router.push({ path: "Log" });
      } else {
        this.$router.push({ path: "MyDashboard" });
      }
    },
    validateEmail(email) {
      // Source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
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

.blondy {
  margin: auto;
  width: 85%;
}
.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #fff;
}
.wrap-login100 {
  width: 400px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

/*==================================================================
[ Title form ]*/
.login100-form-title {
  width: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  padding: 50px 10px 44px 10px;
}

.login100-form-title-1 {
  font-family: "poppins";
  font-weight: 700;
  font-size: 30px;
  color: #000;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}

/*------------------------------------------------------------------
[ Responsive ]*/

@media (max-width: 576px) {
  .login100-form {
    padding: 43px 15px 57px 117px;
  }
}

@media (max-width: 480px) {
  .login100-form {
    padding: 43px 15px 57px 15px;
  }

  .label-input100 {
    text-align: left;
    position: unset;
    top: unset;
    left: unset;
    width: 100%;
    padding: 0 10px;
  }
}
.my-emoji {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
</style>
