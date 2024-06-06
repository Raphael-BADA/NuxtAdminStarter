// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '../assets/css/bootstrap.min.css',
    '../assets/css/app.min.css',
    '../assets/css/icons.min.css',
    '../assets/libs/flatpickr/flatpickr.min.css',
    '../assets/libs/selectize/selectize.bootstrap3.css'
  ],
  app: {
    head: {
      title: 'Dashboard | Ubold - Responsive Bootstrap 5 Admin Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A fully featured admin theme which can be used to build CRM, CMS, etc.' },
        { name: 'author', content: 'Coderthemes' }
      ],

      script: [
        {
          type: 'text/javascript',
          src: 'js/head.js'
        },
        {
          type: 'text/javascript',
          src: 'libs/flatpickr/flatpickr.min.js'
        }, {
          type: 'text/javascript',
          src: 'libs/apexcharts/apexcharts.min.js'
        }, {
          type: 'text/javascript',
          src: 'libs/selectize/js/standalone/selectize.min.js'
        }, {
          type: 'text/javascript',
          src: 'js/pages/dashboard-1.init.js'
        },

      ]
    }
  },

})
