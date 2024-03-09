<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
      <div class="q-pa-md  items-center q-gutter-md">
        <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6 text-justify" align="center">
          <b>Atteignez vos objectifs plus rapidement avec Premium.</b> </div>
        <div class="text-justify text-subtitle2">
          <q-avatar>
            <img src="~assets/osee (1).jpg">
          </q-avatar>
         Osée, êtes-vous intéressé(e) par Premium?
        </div> <br>
        <div class="text-justify text-subtitle2">
            Le compte premium vous donne accès à un grand champ de possibilité, jusqu'à plus de 5 produits, Allez-y maintenant:
            <div class="q-pa-md q-gutter-md">
              <q-badge rounded color="yellow" />
              <q-badge rounded color="green" />
              <q-badge rounded color="red" />
            </div>
        </div> <br>
        <div class="q-pa-md q-gutter-md">
          <div class="row">
            <div class="col"> <q-badge rounded color="primary" label="1" /> Mercure.Utaridi: 5 à 25 Produits/mois 0,99$</div>
            <div class="col">
              <q-btn unelevated rounded label="Souscrire" class="text-dark" style="background: radial-gradient(circle, #fafafa 0%, #b6b4b4 100%) " @click="card = true" />
            </div>
          </div>
          <div class="row">
            <div class="col"> <q-badge rounded color="primary" label="2" /> Venus.Zuhura: 26 à 50 Produits/mois 2.99$</div>
            <div class="col">
              <q-btn unelevated rounded  label="Souscrire" class="text-dark" style="background: radial-gradient(circle, #fafaef 0%, #f3ef08 100%)" @click="card = true" />
            </div>
          </div>
          <div class="row">
            <div class="col"> <q-badge rounded color="primary" label="3" /> Terre.Duia: 51 à 100 Produits/mois 4,99$</div>
            <div class="col">
              <q-btn unelevated rounded  label="Souscrire" style="background: radial-gradient(circle, #dde9e0 0%, #05c10e 100%)" @click="card = true" />
            </div>
          </div>

        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
      </q-card-section>
    </q-card>

      </div>
    </q-page-container>


    <q-footer bordered class="bg-grey-4 text-dark">
      <q-toolbar>
        <q-toolbar-title>
          <div class="q-pa-md q-gutter-sm">
          <div class="text center" style="height: 22px">

            <q-avatar
              v-for="n in 5"
              :key="n"
              size="30px"
              class="overlapping"
              :style="`left: ${n * 23}px`"
            >
              <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">

            </q-avatar>

          </div>

          <q-space />
          <p>La Majorité de nos utilisateurs utilisent Premium</p>
        </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
  <!-- CARD PAYMENTS -->
  <q-dialog v-model="card">
    <q-card class="my-card">
      <q-card-section>
        <div>
          <div >
            <b> Soutenez les activités de l'académie en créditant vos comptes sur:</b>
            <div class="q-pa q-gutter-y-md">
              <div class="q-gutter-sm">
                <q-chip>
                  <q-avatar>
                    <img src="~assets/ab.png">
                  </q-avatar>
                  +243 823 138 020
                </q-chip>
                <q-chip>
                  <q-avatar >
                    <img src="~assets/ad.png">
                  </q-avatar>
                  +243 823 138 020
                </q-chip>
                <q-chip>
                  <q-avatar>
                    <img src="~assets/a.jpg">
                  </q-avatar>
                  +243 823 138 020
                </q-chip>
              </div></div> <br>
              <b> Ou par carte de crédit:</b>
              <div class="img">
                <q-avatar>
                  <img src="~assets/eq.jpg">
                </q-avatar>
                <q-avatar>
                  <img src="~assets/wu.jpg">
                </q-avatar>
                <q-avatar>
                  <img src="~assets/tmb.webp">
                </q-avatar>
                <q-avatar >
                  <img src="~assets/vs.png"/>
                </q-avatar>

              </div>

              <div  class="q-pa-md">
                <q-input v-model="text" label="Numero carte" :dense="dense" />
                <q-input v-model="text" label="Nom carte" :dense="dense" />
                <div class="row justify-evenly">
                  <div class="col justify-evenly">
                <q-input v-model="date" type="date"  :dense="dense" hint="Date d'expiration" />
                  </div>
                  <div class="col justify-evenly">
                <q-input v-model="password"  :type="isPwd ? 'password' : 'text'" hint="Code de Sécurité">
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn
        type="submit"
        label="Valider"
        class="btn"
        color="teal"
      />

      </q-card-actions>
    </q-card>
  </q-dialog>
<!-- FIN -->
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)


    return {
      password: ref(''),
      isPwd: ref(true),
      card: ref(false),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="scss">
.overlapping{
  border: 2px solid white;
  position: absolute;
}
.img{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
