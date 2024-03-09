import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    prixU : 84,
    quantite: 0,
    cart: "blondy",
  }),
  getters: {
    sommes : (state) => state.prixU * state.quantite,
  },
  actions: {
    prixTotal(){
      this.sommes;
    }
  },
});
