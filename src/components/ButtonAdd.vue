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
        title="Produits Proposés"
        icon="fa-solid fa-truck fa-fade"
        :done="done1"
      >
     <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 q-gutter-lg">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-right">Désignation</th>
            <th class="text-right">Montant</th>
            <th class="text-right">Image</th>
            <th class="text-right">Date</th>
            <th class="text-right">.OBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">1</td>
            <td class="text-right">Maillot H</td>
            <td class="text-right">83 usd</td>
            <td class="text-right">
              <q-btn flat icon="fa-solid fa-eye fa-beat" color="grey" @click="card = true" />
            </td>
            <td class="text-right">June 1 2023</td>
            <td class="text-right">
              <q-btn flat icon="fa-regular fa-file-pdf" color="grey" @click="toolbar = true"/>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
     </div>

      </q-step>

      <q-step
        :name="2"
        title="Produits Validés"
        icon="fa-solid fa-check fa-beat"
        :done="done2"
      >
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-right">Désignation</th>
            <th class="text-right">Montant</th>
            <th class="text-right">Image</th>
            <th class="text-right">Date</th>
            <th class="text-right">.OBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">1</td>
            <td class="text-right">Maillot H</td>
            <td class="text-right">83 usd</td>
            <td class="text-right">
              <q-btn flat icon="fa-solid fa-eye fa-beat" color="grey" @click="card = true" />
            </td>
            <td class="text-right">June 1 2023</td>
            <td class="text-right">
              <q-btn flat icon="fa-regular fa-file-pdf" color="grey" @click="toolbar = true"/>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      </q-step>

      <q-step
        :name="3"
        title="Produits Commandés"
        icon="fa-brands fa-buy-n-large fa-beat"
        :done="done3"
      >
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-right">Désignation</th>
            <th class="text-right">Montant</th>
            <th class="text-right">Image</th>
            <th class="text-right">Date</th>
            <th class="text-right">.OBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">1</td>
            <td class="text-right">Maillot H</td>
            <td class="text-right">83 usd</td>
            <td class="text-right">
              <q-btn flat icon="fa-solid fa-eye fa-beat" color="grey" @click="card = true" />
            </td>
            <td class="text-right">June 1 2023</td>
            <td class="text-right">
              <q-btn flat icon="fa-regular fa-file-pdf" color="grey" @click="toolbar = true"/>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      </q-step>
      <q-step
      :name="4"
      title="Produits Livrés"
      icon="fa-solid fa-cart-shopping fa-beat"
      :done="done3"
    >
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-right">Désignation</th>
          <th class="text-right">Montant</th>
          <th class="text-right">Image</th>
          <th class="text-right">Date</th>
          <th class="text-right">.OBS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">1</td>
          <td class="text-right">Maillot H</td>
          <td class="text-right">83 usd</td>
          <td class="text-right">
            <q-btn flat icon="fa-solid fa-eye fa-beat" color="grey" @click="card = true" />
          </td>
          <td class="text-right">June 1 2023</td>
          <td class="text-right">
            <q-btn flat icon="fa-regular fa-file-pdf" color="grey" @click="toolbar = true"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    </q-step>
    </q-stepper>
  </div>
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

<!-- DIALOGUE TOOLBAR -->
<q-dialog v-model="toolbar">
  <q-card>
    <q-toolbar>
      <q-avatar>
        <img src="~assets/aigle.jpg">
      </q-avatar>

      <q-toolbar-title><span class="text-weight-bold">hibaigle</span> Assistance</q-toolbar-title>

      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>

    <q-card-section>
      <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
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

    return {
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
