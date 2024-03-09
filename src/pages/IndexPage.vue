<template>
  <div class="center-container no-scroll">
    <img class="responsive-image" src="~assets/NewLogo.png" alt="Image" />

    <img
      class="responsive-text"
      src="~assets/Double Ring-2.3s-211px.gif"
      alt="Loading..."
    />
  </div>
</template>

<script>
export default {
  name: "LoaderPage",
  mounted() {
    // Rediriger vers la page d'accueil après un délai de 3 secondes (3000 ms)
    setTimeout(() => {
      this.$router.push("/LoadingPage");
    }, 5000);
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 100% de la hauteur de la vue */
}

.responsive-image {
  max-width: 50%; /* L'image ne dépasse pas la largeur de son conteneur */
  height: auto; /* La hauteur s'ajuste proportionnellement à la largeur */
}

.responsive-text {
  max-width: 100%; /* Le texte ne dépasse pas la largeur de son conteneur */
  text-align: center;
  padding: 10px; /* Ajustez selon vos besoins */
  margin-top: 10px; /* Ajout d'une marge entre l'image et le texte */
}

/* Ajoutez des styles supplémentaires pour la responsivité selon vos besoins */
@media screen and (max-width: 600px) {
  /* Styles pour les écrans de largeur maximale de 600 pixels (ajustez selon vos besoins) */
  .responsive-image {
    /* Ajoutez des styles spécifiques pour l'image en mode téléphone */
    max-width: 100%; /* Par exemple, réduisez la largeur à 80% */
  }

  .responsive-text {
    /* Ajoutez des styles spécifiques pour le texte en mode téléphone */
    font-size: 14px; /* Par exemple, réduisez la taille de police */
  }
}
.no-scroll {
  overflow: hidden;
}
</style>


