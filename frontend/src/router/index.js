/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/eventServices',
    name: 'eventServices',
    component: () => import('../components/eventServices.vue')
  },
  {
    path: '/editServices',
    name: 'editServices',
    component: () => import('../components/editServices.vue')
  },
  {
    path: '/serviceForm',
    name: 'serviceForm',
    props: true,
    component: () => import('../components/serviceForm.vue')
  },
  {
    path: '/updateService/:id',
    name: 'updateService',
    props: true,
    component: () => import('../components/updateService.vue')
  },
  {
    path: "/logIn",
    name: "logIn",
    component: () => import('../components/logIn.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
