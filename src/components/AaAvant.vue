<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col">
          <h3 class="title">ADRESSE</h3>

          <div class="inputBox">
            <span>Nom Complet :</span>
            <input type="text" placeholder="Votre nom" />
          </div>
          <div class="inputBox">
            <span>email :</span>
            <input type="email" placeholder="example@example.com" />
          </div>
        </div>

        <div class="col">
          <h3 class="title">PAIEMENT</h3>

          <div class="inputBox">
            <span>cartes Recommandées :</span>
            <img src="~assets/h-mahanay/card_img.png" alt="" />
          </div>
          <div class="inputBox">
            <span>Nom de la Carte :</span>
            <input type="text" placeholder="votre nom SVP!" />
          </div>
          <div class="inputBox">
            <span>Numero de la Carte :</span>
            <input type="number" placeholder="1111-2222-3333-4444" />
          </div>
          <div class="inputBox">
            <span>Date d'expiration :</span>
            <input type="date" />
          </div>

          <div class="flex">
            <div class="inputBox">
              <span>exp year :</span>
              <input type="number" placeholder="2022" />
            </div>
            <div class="inputBox">
              <span>CVV :</span>
              <input type="text" placeholder="1234" />
            </div>
          </div>
        </div>
      </div>
      <q-btn type="submit" label="Proceder aux Paiements" class="submit-btn" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");

.container form {
  padding: 20px;
  height: auto;
  width: auto;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.container form .row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.container form .row .col {
  flex: 1 1 250px;
}

.container form .row .col .title {
  font-size: 20px;
  color: #333;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.container form .row .col .inputBox {
  margin: 15px 0;
}

.container form .row .col .inputBox span {
  margin-bottom: 10px;
  display: block;
}

.container form .row .col .inputBox input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px 15px;
  font-size: 15px;
  text-transform: none;
}

.container form .row .col .inputBox input:focus {
  border: 1px solid #000;
}

.container form .row .col .flex {
  display: flex;
  gap: 15px;
}

.container form .row .col .flex .inputBox {
  margin-top: 5px;
}

.container form .row .col .inputBox img {
  height: 34px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
}

.container form .submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 17px;
  background: #27ae60;
  color: #fff;
  margin-top: 5px;
  cursor: pointer;
}

.container form .submit-btn:hover {
  background: #2ecc71;
}
</style>
