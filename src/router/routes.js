const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/LoadingPage", component: () => import("pages/BienveNue.vue") },
      { path: "/CreateC", component: () => import("pages/CreateForm.vue") },
      { path: "/PassWF", component: () => import("pages/PassWord.vue") },
      {
        path: "/MyDashboard",
        component: () => import("pages/DashboardOffreur.vue"),
      },
      {
        path: "/Vendeur",
        component: () => import("pages/DashboardVendeur.vue"),
      },
      {
        path: "/FurmulaireProduit",
        component: () => import("pages/MaBoutique.vue"),
      },
      {
        path: "/Para",
        component: () => import("pages/MySettings.vue"),
      },
      {
        path: "/Log",
        component: () => import("pages/LogInUser.vue"),
      },
      {
        path: "/VendeurLogger",
        component: () => import("pages/VendLog.vue"),
      },

      {
        path: "/Table",
        component: () => import("pages/TableProduct.vue"),
      },

      {
        path: "/CompteVend",
        component: () => import("pages/CreateVen.vue"),
      },

      {
        path: "/Premium",
        component: () => import("pages/ComptePremium.vue"),
      },
      {
        path: "/Revenu",
        component: () => import("src/pages/RevPage.vue"),
      },
      {
        path: "/Livreur",
        component: () => import("src/pages/DashboardLivreur.vue"),
      },
      {
        path: "/DiscussionMessage",
        component: () => import("src/pages/DiscussionLiv.vue"),
      },
      {
        path: "/RapportsLivreur",
        component: () => import("src/pages/RapPort.vue"),
      },
      {
        path: "/Maintenance",
        component: () => import("src/pages/DashboardMaint.vue"),
      },
      {
        path: "/Cli",
        component: () => import("src/pages/ClientDashMain.vue"),
      },
      {
        path: "/Welcome",
        component: () => import("src/pages/TheWelcome.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
