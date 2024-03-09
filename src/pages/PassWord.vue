<template>
  <q-page class="center">
    <div class="container">
      <ForgetPassword />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ForgetPassword from "src/components/ForgetPassword.vue";

export default defineComponent({
  components: { ForgetPassword },
  name: "PassWord",
});
</script>
