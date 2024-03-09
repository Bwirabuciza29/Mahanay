<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 shadow-4">
        <div class="login100-form-title">
          <span class="login100-form-title-1"
            >Authentification en deux etapes
          </span>
        </div>
        <div>
          <q-banner dense class="bg-black text-white">
            <p class="text-white text-center">
              Entrez votre email afin de recevoir certaines instructions!
            </p>
          </q-banner>
        </div>
        <div class="blond">
          <form>
            <div class="blondy">
              <q-input
                v-model="number"
                suffix="@gmail.com"
                label="Entrez votre adresse mail"
                :dense="dense"
              />
            </div>

            <div class="blondy">
              <div class="contact100-form-checkbox">
                <p class="text-justify">
                  Veuillez saisir ces coordonnées pour retrouver votre compte
                </p>
              </div>
            </div>
            <div class="blondy">
              <q-btn label="Réinitialiser" color="black" class="btn"> </q-btn>
            </div>

            <div class="q-pa-md">
              <div class="col">
                <div class="blondy">
                  <router-link to="/CreateC">
                    <a href="#">
                      <q-icon name="person" /> créer un nouveau compte</a
                    >
                  </router-link>
                </div>
              </div>
              <div class="col">
                <div class="blondy">
                  <router-link to="/">
                    <a href="#"><q-icon name="lock" /> Se Connecter</a>
                  </router-link>
                </div>
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
  setup() {
    const leftDrawerOpen = ref(false);
    const accept = ref(false);
    return {
      password: ref(""),
      isPwd: ref(true),
      customModel: ref("no"),
      options: ["Masculin", "Feminin"],
      accept,
      step: ref(1),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Rubik:wght@300;400;500;600&display=swap");

a {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  align-items: center;
  color: rgb(0, 0, 0);
}

p {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  align-items: center;
  color: black;
}

.a {
  font-family: "Poppins", sans-serif;
  color: black;
}

.col {
  font-family: "Poppins", sans-serif;
}

.btn {
  font-family: "Open Sans", sans-serif;
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
  margin: 20px auto;
  width: 80%;
}
</style>
