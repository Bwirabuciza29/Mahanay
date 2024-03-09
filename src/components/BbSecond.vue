
<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- DEBUT DU PANIER -->
      <q-space class="total" />
      <div class="cart">
        <h2 class="cart-title text-bold">Mon Panier</h2>
        <!-- <div v-if="cart.length === 0">Le panier est vide</div>
        <div v-else> -->
        <div v-for="(product, index) in cartItems" :key="index">
          <div class="row">
            <div class="col">
              <div class="cart-content">
                <img
                  src="~assets/h-mahanay/image6.png"
                  alt=""
                  class="cart-img"
                />
              </div>
            </div>
            <div class="col">
              <p>
                Nom: <span class="text-weight-bolder"> {{ product.name }}</span>
              </p>

              <p>
                Prix:<span class="text-weight-bolder">
                  $ {{ product.price }}</span
                >
              </p>

              <div class="row">
                Quantité :
                <div class="col">
                  <q-input
                    dense
                    outlined
                    type="text"
                    v-model="product.quantity"
                    @change="updateQuantity(product, index)"
                    style="height: auto; width: auto"
                  />
                </div>
                <div class="col">
                  <q-icon
                    name="delete"
                    @click="removeFromCart(index)"
                    color="red"
                    style="font-size: 28px"
                  />
                </div>
              </div>
              <q-space class="total" />
            </div>
          </div>
        </div>
      </div>

      <!-- Totalité -->
      <div class="total">
        <div class="total-title">Total</div>
        <div class="total-price">${{ total }}</div>
      </div>
      <!-- Button Achat -->
      <button
        class="btn-buy"
        @click="buyItems"
        :disabled="cartItems.length === 0"
      >
        Acheter Maintenant
      </button>
      <!-- FIN DU PANIER -->
    </q-drawer>
    <q-page-container>
      <!-- SECTION DE LA PAGE D'ACCUEIL  Commence ici-->
      <section class="popular container" id="popular">
        <div class="heading">
          <h2 class="text-bold">Les produits le plus comandés</h2>
          <a href="#">Voir tout</a>
          <q-btn
            class="ic"
            dense
            flat
            round
            icon="shopping_cart"
            @click="toggleRightDrawer"
          />
        </div>
        <div class="popular-content">
          <!-- box 1 -->
          <div class="box" v-for="product in products" :key="product.id">
            <img src="~assets/h-mahanay/image6.png" alt="Product Image" />
            <div class="box-text">
              <div class="title-price">
                <h3>{{ product.name }}</h3>
                <span>${{ product.price }}</span>
              </div>

              <q-icon
                class="bx"
                name="shopping_cart"
                @click="addToCart(product)"
              />
            </div>
          </div>
          <!-- box 2 -->
          <div class="box">
            <img src="~assets/h-mahanay/popular2.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Soft furniture</h3>
                <span>$150</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 3 -->
          <div class="box">
            <img src="~assets/h-mahanay/image4.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Jordan 6</h3>
                <span>$88.4</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 4 -->
          <div class="box">
            <img src="~assets/h-mahanay/popular4.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Soft furniture</h3>
                <span>$150</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
        </div>
      </section>
      <!-- SECTION DES PRODUITS  fini ici-->
      <section class="produit container" id="produit">
        <div class="heading">
          <h2 class="text-bold">Nos meilleurs offres spécialement pour vous</h2>
          <a href="#">Voir tout</a>
          <q-btn class="ic" dense flat round icon="shopping_cart" />
        </div>
        <!-- Les Produits -->
        <div class="produits-content">
          <!-- box 1 -->
          <div class="box">
            <img src="~assets/h-mahanay/image7.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Nike Air</h3>
                <span>$10</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 2-->
          <div class="box">
            <img src="~assets/h-mahanay/products2.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Soft furniture</h3>
                <span>$150</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 3 -->
          <div class="box">
            <img src="~assets/h-mahanay/image8.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>iPhone 13</h3>
                <span>$960</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 4 -->
          <div class="box">
            <img src="~assets/h-mahanay/products4.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Soft furniture</h3>
                <span>$150</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 5 -->
          <div class="box">
            <img src="~assets/h-mahanay/image2.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Soft furniture</h3>
                <span>$150</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 6 -->
          <div class="box">
            <img src="~assets/h-mahanay/products6.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Jersey Man U</h3>
                <span>$90</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 7 -->
          <div class="box">
            <img src="~assets/h-mahanay/image5.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Breeche</h3>
                <span>$8.5</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
          <!-- box 8 -->
          <div class="box">
            <img src="~assets/h-mahanay/products8.png" alt="" />
            <div class="box-text">
              <div class="title-price">
                <h3>Soft furniture</h3>
                <span>$150</span>
              </div>
              <q-icon class="bx" name="shopping_cart" />
            </div>
          </div>
        </div>
      </section>
      <!-- FIN de la Section PRODUITS -->

      <!-- DIALOGUE PAIEMENT -->
      <q-dialog v-model="alert">
        <AaAvant />
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import AaAvant from "./AaAvant.vue";
import { computed } from "vue";
import { useCartStore } from "src/stores/store.js";

export default {
  components: { AaAvant },
  setup() {
    const rightDrawerOpen = ref(false);
    const $q = useQuasar();

    // LA LISTE DES PRODUITS

    const products = ref([
      {
        id: 1,
        name: "Maillot MCI",
        price: 10.99,
        image: "URL_DE_L_IMAGE_1",
      },
      // Ajouter d'autres produits avec leurs détails
    ]);

    const cartStore = useCartStore();

    const addToCart = (product) => {
      cartStore.addToCart(product);
      // Afficher la notification Quasar
      this.$q.notify({
        message: `${product.name} a été ajouté au panier.`,
        color: "positive",
      });
    };

    // LE PANIER
    const cartItems = computed(() => cartStore.cartItems);
    const total = computed(() => {
      return cartItems.value.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    });
    const updateQuantity = (product, index) => {
      cartStore.updateQuantity(index, product.quantity);
    };

    const removeFromCart = (index) => {
      cartStore.removeFromCart(index);
    };

    const buyItems = () => {
      // Logique d'achat ici
      console.log("Achat effectué !");
    };

    return {
      products,
      addToCart,
      alert: ref(false),
      cartItems,
      total,
      updateQuantity,
      removeFromCart,
      buyItems,
      // Fin Liste Produit et Panier
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      triggerOngoing() {
        // we need to get the notification reference
        // otherwise it will never get dismissed ('ongoing' type has timeout 0)
        const notif = $q.notify({
          type: "ongoing",
          message: "En cours d'execution...",
        });

        // simulate delay
        setTimeout(() => {
          notif({
            type: "positive",
            message: "Produit ajouté sur le pannier",
            timeout: 1000,
          });
        }, 4000);
      },
    };
  },
};
</script>
<style lang="scss">
:root {
  --main-color: #171427;
  --light-color: #e1b955;
  --text-color: #2e2e2e;
  --hover-color: hsl(256, 93%, 48%);
  --bg-color: #fff;
}
img {
  width: 100%;
}

.container {
  max-width: 968px;
  margin: auto;
  width: 100%;
  background: var(--bg-color);
}

.ic {
  font-size: 1.1rem;
  color: var(--bg-color);
  padding: 10px;
  background: var(--main-color);
  border-radius: 0.5rem;
  cursor: pointer;
}
.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0px auto 0px 24px;
}
.logo span {
  color: var(--main-color);
}
.nav-icons {
  display: flex;
  column-gap: 1rem;
  z-index: 200;
}
/* LES PRODUITS */
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.heading h2 {
  font-size: 1.4rem;
}
.heading a {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-color);
  border-bottom: 2px solid var(--text-color);
}
.heading a:hover {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
}
.popular-content,
.produits-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2rem;
}
.box {
  padding: 10px;
  background: #f1f1f1;
  border-radius: 0.5rem;
  display: grid;
  row-gap: 0.5rem;
}
.box img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  object-position: center;
}
.box img:hover {
  padding: 10px;
  border: 1px solid var(--text-color);
  transition: 0.6s;
}
.box-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--bg-color);
  padding: 10px;
  border-radius: 0.5rem;
}
.title-price h3 {
  font-size: 1rem;
  font-weight: 600;
}
.title-price span {
  font-weight: 500;
}
.box-text .bx {
  padding: 10px;
  font-size: 20px;
  background: var(--text-color);
  color: var(--bg-color);
  border-radius: 5rem;
}
.box-text .bx:hover {
  background: var(--main-color);
}
@media (max-width: 1020px) {
  .container {
    margin: 0 auto;
    width: 90%;
  }
  .home-img::after {
    height: 170px;
    width: 450px;
  }
}

@media (max-width: 880px) {
  section {
    padding: 3rem 0 2rem;
  }
  .nav {
    padding: 12px 0;
  }
  .home-text {
    font-size: 2rem;
  }
  .home-img img {
    width: 100%;
  }
  .home-img::after {
    width: 415px;
    right: 10px;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box img {
    width: 180px;
    height: 200px;
  }
  .about-img img {
    width: 100%;
  }
}
/* For Medium devices */
@media (max-width: 768px) {
  .menu-icon {
    padding: 12px 10px;
  }
  .home-text p br {
    display: contents;
  }
  .home-img::after {
    width: 345px;
    right: 10px;
  }
  .about-img::after {
    bottom: 15px;
  }
}
@media (max-width: 624px) {
  .navbar {
    flex-direction: column;
  }
  .navbar a {
    padding: 15px;
    display: block;
  }
  .home,
  .about {
    grid-template-columns: 1fr;
  }
  .home-text,
  .about-img {
    order: 2;
  }
  .home-img::after {
    width: 100%;
    right: 12px;
  }
  .about-img::after {
    height: 90%;
  }
  .newsletter-content {
    grid-template-columns: 1fr;
  }
  .newsletter-content form {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
}
/* For Small Devices */
@media (max-width: 360) {
  .nav {
    padding: 8px 0;
  }
  .menu-icon {
    padding: 10px 8px;
  }
  .logo {
    font-size: 1.2rem;
    margin: 0px auto 0px 11px;
  }
  .nav-icons .bx {
    padding: 8px;
  }
  .home-text h1 {
    font-size: 1.7rem;
  }
  p {
    font-size: 0.875rem;
  }
  .home-text p {
    margin: 0.2rem 0.14rem;
  }
  .heading h2,
  .heading a {
    font-size: 1rem;
  }
  .about-text h2 {
    font-size: 1.2rem;
  }
  .about-text p {
    margin: 0.8rem 0;
  }
}
.cart-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.cart-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
}
.cart-box {
  display: grid;
  grid-template-columns: 32% 50% 18%;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
.cart-img {
  width: 100%;
  height: 100px;
  object-fit: contain;
  padding: 8px;
}

.detail-box {
  display: grid;
  align-items: center;
  justify-content: space-between;
}
.cart-product-title {
  font-size: 1rem;
  text-transform: uppercase;
}
.cart-price {
  font-weight: 500;
}
.cart-quantity {
  border: 1px solid var(--text-color);
  outline-color: var(--main-color);
  width: 2.4rem;
  text-align: center;
  font-size: 1rem;
}
.cart-remove {
  font-size: 24px;
  color: var(--main-color);
  cursor: pointer;
}
.total {
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  border-top: 1px solid var(--text-color);
}
.total-title {
  font-size: 1rem;
  font-weight: 600;
}
.total-price {
  margin-left: 0.5rem;
}
.btn-buy {
  display: flex;
  margin: 1.5rem auto 0 auto;
  padding: 12px 20px;
  border: none;
  background: var(--main-color);
  color: var(--bg-color);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}
.btn-buy:hover {
  background: var(--text-color);
}
.popular-content,
.produits-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2rem;
}
/* LES PRODUITS */
.produits-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2rem;
}
.produits-content .box-text {
  background: var(--text-color);
}
.produits-content .box-text h3 {
  color: var(--bg-color);
}
.produits-content .box-text span {
  color: var(--bg-color);
}
.produits-content .box-text .bx {
  background-color: var(--main-color);
}
.produits-content .box-text .bx:hover {
  background-color: var(--hover-color);
}
</style>
