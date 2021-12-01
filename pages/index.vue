<template>
  <div class="c-content__center">
    <s-hello>{{ page.title }}</s-hello>
    <div class="lead enter-fade-up enter-delay-1" v-html="page.introduction" />
    <s-services :services="page.services" />
    <s-page-title style="padding: 7.2rem 0 0 0">Tech I've worked with.</s-page-title>
    <div class="c-skills">
      
      <a href="https://www.w3schools.com/cpp/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="60" height="60"/> </a> 
      <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="60" height="60"/> </a> 
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> </a> 
      <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60"/> </a>

      <a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="60" height="60"/> </a> 
      <a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="60" height="60"/> </a>
      <a href="https://www.sqlite.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="60" height="60"/> </a> 

      <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="60" height="60"/> </a> 
      <a href="https://tailwindcss.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="60" height="60"/> </a> 

      <a href="https://vuejs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="60" height="60"/> </a> 
      <a href="https://nuxtjs.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="nuxtjs" width="60" height="60"/> </a>
      <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> </a> 
      <a href="https://angular.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" alt="angular" width="60" height="60"/> </a>

      <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/> </a> 
      <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60"/> </a> 
      <a href="https://flask.palletsprojects.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="60" height="60"/> </a> 
      <a href="https://www.djangoproject.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt="flask" width="60" height="60"/> </a> 
      
      <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="60" height="60"/> </a> 
      <a href="https://jenkins.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="postman" width="60" height="60"/> </a> 
      <a href="https://kubernetes.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="postman" width="60" height="60"/> </a> 
      <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="postman" width="60" height="60"/> </a> 
    </div>
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import SServices from '~/components/SServices.vue'
import SHello from '~/components/SHello.vue'
import { constants } from '~/assets/content'

export default defineComponent({
  name: 'Index',

  components: {
    SSocial,
    SPageTitle,
    SServices,
    SHello
  },

  head() {
    return {
      title: 'Home'
    }
  },

  data() {
    return {
      page: constants.pages.filter(i => i.name=='home')[0]
    }
  }
})
</script>
<style scoped>
.c-skills {
  display: flex;
  flex-wrap: wrap;
}
.c-skills img {
    margin: 10px!important;
  }
</style>