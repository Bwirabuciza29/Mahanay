<template>
  <q-page class="center">
    <div class="container">
      <AccueilH />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import AccueilH from "src/components/AccueilH.vue";

export default defineComponent({
  components: { AccueilH },
  name: "IndexPage",
});
</script>
