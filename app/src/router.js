import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({

  routes: [
    {
      path: '/',
      component: load('Main'),
      children: [
        {
          path: 'source/subnet',
          component: load('Source_subnet')
        },
        {
          path: 'source/assets',
          component: load('Source_assets')
        },
        {
          path: 'source/search',
          component: load('Source_search')
        },
        {
          path: 'source/filter',
          component: load('Source_filter')
        },
        {
          path: 'source/alert_filter',
          component: load('Source_alert_filter')
        },
        {
          path: 'source/anomaly',
          component: load('Source_anomaly')
        },
        {
          path: 'source/files',
          component: load('Source_files')
        },
        {
          path: 'source/upload_live',
          component: load('Source_upload_live')
        }
      ]
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
