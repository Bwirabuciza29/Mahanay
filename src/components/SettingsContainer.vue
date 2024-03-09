<template>
  <q-page class="q-pad-xs col-xs-12 col-sm-6 col-md-4 q-gutter-lg">
    <div class="items-start q-gutter-md">
              <p class="r">Paramètres et Confidentialités</p>
    </div>
    <div>
      <div class="row">
        <div class="col">
          <q-card class="my-card-profile">
            <q-card-section class="text-center">
              <img alt="Profile-Image" src="~assets/osee (2).jpg" />
              <h2>Linda Waza</h2>
              <!-- <h3>Web Designer</h3> -->
                <!-- <div class="text-black q-gutter-md" style="font-size: 2em">
                  <q-icon name="fa-brands fa-github" class="icong" />
                  <q-icon name="fa-brands fa-instagram" class="iconi"/>
                  <q-icon name="fa-brands fa-facebook" class="iconf"/>
              </div> -->
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-8">
        <div class="q-pa-md">
          <div class="text-justify">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="alarms" label="Editer mon profile" />
              <q-tab name="blondy" label=" Mot de passe" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="alarms">
                <div>Editer mon profil</div>
                <div class="column">
                  <div class="col">
                    <UploadImage />
                  </div>

                  <div class="row justify-start">
                    <div class="col">
                      <q-input v-model="text" label="Entrez le nouveau nom" />
                      <div class="q-gutter-md">
                        <q-select
                          v-model="model"
                          :options="options"
                          label="Genre"
                        />
                      </div>
                      <div class="q-gutter-md">
                        <q-select
                          v-model="model"
                          :options="avenue"
                          label="Avenue"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="q-gutter-md">
                        <q-input v-model="text" label="Votre prenom" />
                      </div>
                      <div class="q-gutter-md">
                        <q-input
                          v-model="tel"
                          type="tel"
                          prefix="+243"
                          label="Votre numero de telephone"
                        />
                      </div>
                      <div class="q-gutter-md">
                        <q-input
                          v-model="email"
                          type="email"
                          suffix="@gmail.com"
                          label="Votre adresse mail"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="text-start">
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn color="primary" class="btn" label="Modifier" />
                      <q-btn
                        color="red"
                        @click="prompt = true"
                        class="btn"
                        label="Supprimer"
                      />
                    </div>
                    <q-dialog v-model="prompt" persistent>
                      <q-card style="min-width: 350px">
                        <q-card-section>
                          <div class="text-h6">
                            Etes vous sur de vouloir supprimer votre compte?
                          </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                          <q-input
                            dense
                            v-model="address"
                            label="Entrez votre mot de passe"
                            autofocus
                            @keyup.enter="prompt = false"
                          />
                        </q-card-section>

                        <q-card-actions align="right" class="text-black">
                          <q-btn flat label="annuler" v-close-popup />
                          <q-btn
                            flat
                            label="Supprimer mon compte"
                            v-close-popup
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </div>
                </div>
              </q-tab-panel>
              <q-tab-panel name="blondy">
                <div class="text-h6">Mot de Passe</div>
                <div class="wrap-input100 validate-input">
                  <q-input v-model="a" label="Ancien Mot de Passe"> </q-input>
                  <q-input
                    v-model="password"
                    label="Nouveau Mot de Passe"
                    standar
                    :type="isPwd ? 'password' : 'text'"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  <q-input
                    v-model="password"
                    label="Confirmer votre nouveau Mot de Passe"
                    standar
                    :type="isPwd ? 'password' : 'text'"
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
                <br />
                <div class="text-start">
                  <q-btn
                    color="primary"
                    @click="done3 = true"
                    class="btn"
                    label="Changer Mot de Passe"
                  />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import UploadImage from "./UploadImage.vue";
export default {
  components: { UploadImage },
  setup() {
    const leftDrawerOpen = ref(false);
    const accept = ref(false);

    return {
      carousel: ref(false),
      card: ref(false),
      sliders: ref(false),
      slide: ref(1),
      stars: ref(3),
      password: ref(""),
      prompt: ref(false),
      isPwd: ref(true),
      customModel: ref("no"),
      tab: ref("alarms"),
      text: ref(""),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      options: ["Masculin", "Feminin"],
      quartier: ["Goma", "Mabanga", "Himbi"],
      avenue: ["chandellier", "lowa", "ruyange"],
      accept,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Redressed&display=swap");

#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

.dash {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  align-items: center;
  color: black;
}

.dash-ap {
  font-family: "Redressed", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1.3rem;
}

.dash-app {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1.3rem;
}

#profile {
  display: flex;
  margin: auto;
}

.my-card-profile img {
  display: inline-block;
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 75px;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 10px 0 0 0;
}

.r {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  margin: 0 10px;
  padding: 10px 0 0;
}

.my-card-profile h3 {
  font-size: 18px;
}

h3 {
  font-size: 10px;
  font-family: "Redressed", sans-serif;
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
.icong:hover{
  color:grey;
}
.iconi:hover{
  color:red;
}
.iconf:hover{
  color:blue;
}
</style>
