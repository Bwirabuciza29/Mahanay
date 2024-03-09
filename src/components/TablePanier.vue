<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6">Mes Commandes</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-right">Désignation</th>
            <th class="text-right">Marque</th>
            <th class="text-right">Qte</th>
            <th class="text-right">PU</th>
            <th class="text-right">PT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">1</td>
            <td class="text-right">Maillot H</td>
            <td class="text-right">Borrusia Dortmund</td>
            <td class="text-right">1</td>
            <td class="text-right">83</td>
            <td class="text-right">83</td>
          </tr>
        </tbody>
      </q-markup-table>
      <br />
      <b> Prix-Total : <span>83 USD</span></b>
    </q-card>
  </div>
</template>
<script>
import { useCounterStore } from "../stores/example-store";
export default {
  data() {
    const store = useCounterStore();
  },
};
</script>
