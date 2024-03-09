<template>
  <div @submit="onSubmit">
    <q-input
      v-model="searchQuery"
      label="Recherche"
      type="text"
      :rules="[
        (val) =>
          (val && val.length > 2) || 'Veuillez saisir au moins 3 caractères',
      ]"
    >
      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        />
        <q-icon class="cursor-pointer" name="filter_list" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSubmit() {
      // Effectuer une action avec la valeur de recherche
      console.log("Recherche : ", this.searchQuery);
      // Réinitialiser le champ de recherche
      this.searchQuery = "";
    },
  },
};
</script>
