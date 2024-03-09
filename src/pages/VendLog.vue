<template>
  <q-page class="center">
    <div class="container">
      <LogVend />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LogVend from "src/components/LogVend.vue";

export default defineComponent({
  components: { LogVend },
  name: "LogInVendeur",
});
</script>
