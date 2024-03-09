<template>
  <form @submit.prevent="simulateSubmit" class="q-pa-md">
    <!-- <q-input
      filled
      color="teal"
      hint="Type then hit Enter key above"
      v-model="test"
    /> -->
    <div class="btn">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Envoyer"
        class="btn"
        color="teal"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const test = ref('')
    const submitting = ref(false)

    function simulateSubmit () {
      submitting.value = true
      setTimeout(() => {
        submitting.value = false
      }, 3000)
    }

    return {
      test,
      submitting,
      simulateSubmit
    }
  }
}
</script>
