<template>
  <q-page class="center">
    <div class="container">
      <CompteVend />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CompteVend from "src/components/CompteVend.vue";

export default defineComponent({
  components: { CompteVend },
  name: "CVendeur",
});
</script>
