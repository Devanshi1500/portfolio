<template>
  <div class="c-content__center">
    <s-page-title>{{ page.title }}</s-page-title>
    <div class="lead enter-fade-up enter-delay-1" v-html="page.introduction" />
    <s-services :services="services" />
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import SServices from '~/components/SServices.vue'

export default defineComponent({
  name: 'Index',

  components: {
    SSocial,
    SPageTitle,
    SServices
  },

  head() {
    return {
      title: 'Home'
    }
  },

  data() {
    return {
      page: {
        title: "Devanshi Shah",
        introduction: "<p>Hi, I'm <strong>Devanshi Shah</strong>, a Computer Engineering undergraduate, living in and in love with Mumbai.</p>"
      },
      services: [
        {
          title: 'Web app design',
          description: `Whether it's designing a new product or refreshing the design of an existing application, I'm happy to help making your project beautiful and easy to use.`,
          image: {
            data: {
              url:
                'https://s3.eu-west-3.amazonaws.com/simonwuyts-portfolio/bb43f04a-8d25-4767-8d69-ffdf596fe545.svg'
            }
          }
        },
        {
          title: 'Front-end development',
          description: `Modern browsers offer a lot of possibilities but also demand for a specialized approach. I translate designs to production ready HTML, CSS and Javascript. <a class="link-vue" href='https://www.vuejs.org/'/>Vue.js</a> and <a class="link-nuxt" href='https://nuxtjs.org/'/>Nuxt</a> complete my front-end stack.`,
          image: {
            data: {
              url:
                'https://s3.eu-west-3.amazonaws.com/simonwuyts-portfolio/a471ed3d-cd54-47d2-a549-9b12698746a7.svg'
            }
          }
        }
      ]
    }
  }
})
</script>
