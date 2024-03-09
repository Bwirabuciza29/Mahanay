<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 shadow-4">
        <div class="login100-form-title">
          <span class="login100-form-title-1">CREER UN COMPTE </span>
        </div>
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="black"
          animated
        >
          <q-step
            :name="1"
            title="Conditions & Politiques de Confidentialité"
            icon="settings"
            color="black"
            :done="done1"
          >
            <q-list bordered class="rounded-borders">
              <q-expansion-item
                switch-toggle-side
                expand-separator
                icon="person"
                label="Connaissiez-vous Hibaigle?"
              >
                <q-card>
                  <q-card-section>
                    <p text-justify>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis ex consequuntur, labore quaerat quisquam atque
                      voluptatem minima. Eius labore eaque animi reiciendis
                      placeat, hic vero excepturi dolore cupiditate debitis
                      quibusdam.
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                switch-toggle-side
                expand-separator
                icon="menu_open"
                label="Conditions à  remplir avant la création du compte"
              >
                <q-card>
                  <q-card-section>
                    <p text-justify>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis ex consequuntur, labore quaerat quisquam atque
                      voluptatem minima. Eius labore eaque animi reiciendis
                      placeat, hic vero excepturi dolore cupiditate debitis
                      quibusdam.
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>

            <q-list bordered class="rounded-borders q-mt-md">
              <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="bookmark_added"
                label="Processus de validation du compte"
              >
                <q-card>
                  <q-card-section>
                    <p text-justify>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis ex consequuntur, labore quaerat quisquam atque
                      voluptatem minima. Eius labore eaque animi reiciendis
                      placeat, hic vero excepturi dolore cupiditate debitis
                      quibusdam.
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="workspace_premium"
                label="Savez-vous le compte premium?"
              >
                <q-card>
                  <q-card-section>
                    <p text-justify>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis ex consequuntur, labore quaerat quisquam atque
                      voluptatem minima. Eius labore eaque animi reiciendis
                      placeat, hic vero excepturi dolore cupiditate debitis
                      quibusdam.
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list bordered class="rounded-borders q-mt-md">
              <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="perm_identity"
                label="Type et catégorie de nos comptes"
              >
                <q-card>
                  <q-card-section>
                    <p text-justify>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis ex consequuntur, labore quaerat quisquam atque
                      voluptatem minima. Eius labore eaque animi reiciendis
                      placeat, hic vero excepturi dolore cupiditate debitis
                      quibusdam.
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="spellcheck"
                label="Processus"
              >
                <q-card>
                  <q-card-section>
                    <p text-justify>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis ex consequuntur, labore quaerat quisquam atque
                      voluptatem minima. Eius labore eaque animi reiciendis
                      placeat, hic vero excepturi dolore cupiditate debitis
                      quibusdam.
                    </p>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>

            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done1 = true;
                    step = 2;
                  }
                "
                color="black"
                class="btn"
                label="Continuer"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="S'Enregistrer"
            icon="create_new_folder"
            :done="done2"
            color="black"
          >
            <div class="q-pa-md" style="max-width: 500px">
              <div class="q-gutter-xs">
                <q-input
                  name="nom"
                  v-model="nom"
                  label="Votre nom"
                  :dense="dense"
                  :rules="[
                    (val) =>
                      (val && val.length > 3) ||
                      'Le nom d\'utilisateur doit contenir au moins 4 caractères',
                  ]"
                />
                <q-input
                  name="prenom"
                  v-model="prenom"
                  label="Votre prenom"
                  :dense="dense"
                  :rules="[
                    (val) =>
                      (val && val.length > 3) ||
                      'Le prenom doit contenir au moins 4 caractères',
                  ]"
                />

                <q-select
                  name="genre"
                  v-model="genre"
                  :options="options"
                  label="Genre"
                />
                <q-input
                  label="Telephone"
                  name="telephone"
                  type="number"
                  prefix="+243 (0)"
                  v-model="telephone"
                  :rules="[
                    (val) =>
                      (val && val.length <= 9) ||
                      'Le numero doit contenir au maximum 9 chiffres',
                  ]"
                ></q-input>
                <q-input
                  name="email"
                  v-model="email"
                  type="email"
                  label="Votre adresse mail"
                  :rules="[
                    (val) =>
                      (val && emailRegex.test(val)) ||
                      'Veuillez entrer une adresse email valide',
                  ]"
                />
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done2 = true;
                    step = 3;
                  }
                "
                color="black"
                class="btn"
                label="Continuer"
              />
              <q-btn
                flat
                @click="step = 1"
                color="black"
                label="Retour"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Validation"
            icon="add_comment"
            color="black"
            :done="done3"
          >
            <div class="q-pa-md" style="max-width: 500px">
              <div class="q-gutter-xs">
                <q-input
                  name="commune"
                  v-model="commune"
                  label="Commune"
                  :rules="[
                    (val) =>
                      (val && val.length > 3) ||
                      'La commune doit contenir au moins 4 caractères',
                  ]"
                />
                <div class="q-gutter-md">
                  <q-input
                    name="quartier"
                    v-model="quartier"
                    label="Quartier"
                    :rules="[
                      (val) =>
                        (val && val.length > 3) ||
                        'Le quartier doit contenir au moins 4 caractères',
                    ]"
                  />
                </div>
                <div class="q-gutter-md">
                  <q-input
                    name="avenue"
                    v-model="avenue"
                    label="avenue"
                    :rules="[
                      (val) =>
                        (val && val.length > 3) ||
                        'L\'avenue doit contenir au moins 4 caractères',
                    ]"
                  />
                </div>
                <div class="q-gutter-md">
                  <q-input
                    name="dom"
                    v-model="dom"
                    label="Numéro Domicile"
                    :rules="[
                      (val) =>
                        (val && val.length > 1) ||
                        'L\'avenue doit contenir au moins 2 chiffres',
                    ]"
                  />
                </div>
                <div class="q-gutter-md">
                  <q-input
                    label="Mot de passe"
                    v-model="password"
                    type="password"
                    :rules="[
                      (val) =>
                        (val && passwordRegex.test(val)) ||
                        'Le mot de passe doit contenir au moins 12 caractères, une lettre majuscule, un nombre et un caractère spécial',
                    ]"
                  />
                  <q-input
                    label="Confirmer le mot de passe"
                    v-model="confirmPassword"
                    type="password"
                    :rules="[
                      (val) =>
                        (val && val === password) ||
                        'Les mots de passe ne correspondent pas',
                    ]"
                  />
                </div>

                <div class="q-gutter-md">
                  <p class="text-caption justify">
                    En cliquant sur le bouton Enregistrer vous attestez avoir
                    pris en compte toutes les
                    <router-link to="/CreateC"
                      ><a href="#">conditions</a></router-link
                    >
                    et
                    <router-link to="/CreateC"
                      ><a href="#"
                        >politiques de confidentialité.</a
                      ></router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <!-- @click="showLoading" -->
            <q-stepper-navigation>
              <q-btn
                color="black"
                @click="CreationCompte"
                class="btn"
                label="Enregistrer"
              />
              <q-btn
                flat
                @click="step = 2"
                color="black"
                label="Retour"
                class="q-ml-sm"
              />
              <!-- <q-btn label="Annuler tout" color="white" text-color="primary" @click="reset" class="q-ml-sm" /> -->
              <q-btn
                flat
                color="black"
                @click="step = 1"
                label="Annuler tout"
              />
              <router-link to="/Log">
                <q-btn flat color="black" label="Se Connnecter" />
              </router-link>
            </q-stepper-navigation>
            <!-- <router-link to="/">
              <p>Se Connecter </p>
            </router-link> -->
          </q-step>
        </q-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar, QSpinnerFacebook } from "quasar";
import { onBeforeUnmount } from "vue";
import { useCounterStore } from "../stores/hstore.js";
export default {
  setup() {
    // les Variables

    const nom = ref();
    const prenom = ref();
    const genre = ref();
    const telephone = ref();
    const email = ref();
    const commune = ref();
    const quartier = ref();
    const avenue = ref();
    const dom = ref();
    const psw = ref();
    const password = ref();
    const confirmPassword = ref();
    // Fin Variables
    // Importation Base de Données
    const storeDb = useCounterStore();
    // Gestion des notifications et loading process
    // Gestion des notifications et loading process
    const q = useQuasar();
    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        q.loading.hide();
      }
    });

    // methode de recuperation paramettree

    const postCliId = () => {
      const newCli = Object.assign({ design: cli.value });
      storeDb
        .postCli(newCli)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    const CreationCompte = () => {
      // adding a new element in the object
      const newClient = Object.assign({
        nom: nom.value,
        prenom: prenom.value,
        genre: genre.value,
        tel: telephone.value,
        email: email.value,
        commune: commune.value,
        quartier: quartier.value,
        avenue: avenue.value,
        dom: dom.value,
        psw: psw.value,
      });
      // Declenchement du loading process
      q.loading.show({
        message: "Connection. Veuillez Patienter SVP!...",
        boxClass: "bg-grey-2 text-grey-9",
        spinnerColor: "primary",
      });
      // hiding in 3s
      timer = setTimeout(() => {
        q.loading.hide();
        timer = void 0;
        // Calling the store method
        storeDb
          .authen(newClient)
          .then((res) => (resultat.value = JSON.stringify(res.data.n_user)))
          .catch((res) => (resultat.value = JSON.stringify(res.data.msg)));
        // adding a new route for redirection
        console.log(storeDb.datas);
        // Message de notification
        // q.dialog({
        //   dark: true,
        //   title: `${storeDb.msg}`,
        //   message: 'Cliquez sur Ok pour continuer...'
        // }).onOk(() => {
        //   console.log(resultat);
        // })
      }, 1000);
    };

    const leftDrawerOpen = ref(false);
    const accept = ref(false);
    const $q = useQuasar();
    let timer;
    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });
    return {
      postCliId,
      storeDb,
      nom,
      prenom,
      genre,
      telephone,
      email,
      commune,
      quartier,
      avenue,
      dom,
      psw,
      q,
      isPwd: ref(true),
      customModel: ref("no"),
      CreationCompte,
      options: ["Masculin", "Feminin"],
      accept,
      password,
      confirmPassword,
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      passwordRegex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
      step: ref(1),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      showLoading() {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: "yellow",
          spinnerSize: 140,
          backgroundColor: "purple",
          message: "Some important process is in progress. Hang on...",
          messageColor: "black",
        });

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;
        }, 3000);
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
  color: blue;
}

.a {
  font-family: "Poppins", sans-serif;
  color: black;
}

.col {
  font-family: "Poppins", sans-serif;
}

.btn {
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  text-transform: capitalize;
  padding: 8px 20px;
  border-radius: 0;
  font-weight: 600;
  border: 1px solid;
  position: relative;
  z-index: 1;
  transition: 0.2s ease;
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
</style>
