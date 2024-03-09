import { defineStore } from "pinia";
import axios from 'axios'

export const useCounterStore = defineStore("counter", {
  state: () => ({
    Offreur: [],
    msg: "",
    datas: [],
    categorie: [],
    success: true,
  }),
  getters: {
    // recuperation des clients
    async postCli(data) {
      try {
        let body = JSON.stringify(data);
        const url = "https://mahanay.hibaigle.net/cli/"
        // const datas  = body;
        const headers = {
          "Content-Type": "application/json"
        }
        const res = await axios.post(url, {
          params: {
            design: body,
            logins: "h_mahanay",
            psw: "Hib?13_@2023!"
          }
        }, headers);
        //  Managing the response
        this.success = true;
        this.categorie = res.data;
        this.msg = res.data.msg;
      } catch (err) {
        return this.msg = err;
      }
    },
  },
  actions: {
    // Créatino compte Client
    async authen(datas) {
      try {
        let body = JSON.stringify(datas);
        const url = "https://mahanay.hibaigle.net/cli/"
        const data = body
        const headers = {
          "Content-Type": "application/json"
        }
        const res = await axios.post(url, data, {
          params: {
            logins: "h_mahanay",
            psw: "Hib?13_@2023!"
          }
        }, headers);
        //  Managing the response
        if (res.status === 201) {
          this.success = true;
          this.datas = res.data;
          this.msg = res.data.msg;
        } else {
          this.msg = res.data.msg;
        }
        return res;
      } catch (err) {
        return this.msg = err;
      }
    },

    // fetching data
    async getOffreur() {
      // This api will be changed after hosting  the api in a server or cloud
      return await axios.post('https://mahanay.hibaigle.net/cli/')
        .then((response) => {
          this.Client = response.data
          // console.log(this.Offreur);
        })
        .catch((error) => {
          this.err = error
        });
    }
  },
});

