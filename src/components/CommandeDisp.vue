<template>
  <div class="q-pa-md">

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="LES COMMANDES DISPONIBLES"
        icon="fa-solid fa-truck fa-fade"
        :done="done1"
      >
     <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 q-gutter-lg">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-right">Désignation</th>
            <th class="text-right">Image</th>
            <th class="text-center">Info Client</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">1</td>
            <td class="text-right">Maillot H</td>
            <td class="text-right">
              <q-btn flat icon="fa-solid fa-eye fa-beat" color="grey" @click="card = true" />
            </td>
            <td class="text-right">
              <q-chip  >
                <q-avatar>
                  <img src="~assets/osee (1).jpg">
                </q-avatar>
                Ayane Osee
                <q-btn flat icon="fa-regular fa-address-card" color="grey" @click="open('top')"/>
              </q-chip>
            </td>
            <td class="text-right">
              <q-btn flat icon="fa-solid fa-check" color="green">
                <q-tooltip :offset="[0, 8]">Livré</q-tooltip>
              </q-btn>
              <q-btn flat>
                <q-tooltip :offset="[0, 8]">En cours de livraison</q-tooltip>
                <q-spinner-clock color="brown"/>
              </q-btn>
              <q-btn flat icon="fa-solid fa-close" color="red">
                <q-tooltip :offset="[0, 8]">Rejet</q-tooltip>
              </q-btn>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
     </div>

      </q-step>

    </q-stepper>
  </div>
  <!-- DIALOGUE INFORMATIONS SUR LE CLIENT -->

  <q-dialog v-model="dialog" :position="position">
    <q-card style="width: 350px">
      <q-linear-progress :value="0.6" color="primary" />

      <q-card-section class="items-centerss">
        <div>
          <div class="text-weight-bold" align="center">Les informations sur Client <br><br>

          </div>
          <p class="text-black">Designation :
             <span>Jersey Manchester City</span>
             </p>
            <p class="text-black">Marque Produit:
              <span>Jersey Puma</span>
            </p>
            <p class="text-black">Nom Client: <span><q-chip  >
              <q-avatar>
                <img src="~assets/osee (1).jpg">
              </q-avatar>
              Ayane Osee
            </q-chip></span> </p>
            <q-separator />
              <div class="q-pa-md">
                <q-btn-group spread>
                  <q-btn color="primary" label="Position  " icon="place" @click="toolbar = true" />
                  <q-btn color="green" label="Appeler" icon="phone" />
                </q-btn-group>
              </div>


        </div>

      </q-card-section>
      <q-card-section >
    </q-card-section>
    </q-card>
  </q-dialog>
  <!-- =============================== -->

  <!-- DIALOGUE IMAGE-->

  <q-dialog v-model="card">
    <q-card class="my-card">
      <q-img src=~assets/2.jpg />

      <q-card-section>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         Manchester City
        </div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
<!-- FIN DIALOGUE IMAGE-->

<!-- DIALOGUE MAP -->
<q-dialog v-model="toolbar">
  <q-card>
    <q-toolbar>
      <q-avatar>
        <img src="~assets/aigle.jpg">
      </q-avatar>

      <q-toolbar-title><span class="text-weight-bold">hibaigle localisation</span></q-toolbar-title>

      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>

    <q-card-section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63810.3449296617!2d29.166908353459803!3d-1.6586833737203857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f5ff03ccf71%3A0x8702d152f9f905e7!2sGoma!5e0!3m2!1sfr!2scd!4v1681890841928!5m2!1sfr!2scd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </q-card-section>
  </q-card>
</q-dialog>
<!-- FIN DIALOGUE TOOLBAR -->
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const step = ref(1)
    const done1 = ref(false)
    const done2 = ref(false)
    const done3 = ref(false)
    const dialog = ref(false)
    const position = ref('top')

    return {
      dialog,
      position,
      open (pos) {
        position.value = pos
        dialog.value = true
      },
      toolbar: ref(false),
      card: ref(false),
      step,
      done1,
      done2,
      done3,

      reset () {
        done1.value = false
        done2.value = false
        done3.value = false
        step.value = 1
      }
    }
  }
}
</script>
