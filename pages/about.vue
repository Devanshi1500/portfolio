<template>
  <div class="c-content__center">
    <s-page-title>{{ page.title }}</s-page-title>
    <div class="lead enter-fade-up enter-delay-1" v-html="page.introduction" />
    <div class="enter-fade-up enter-delay-2" v-html="page.content" />
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'

export default defineComponent({
  name: 'About',

  components: {
    SSocial,
    SPageTitle
  },

  head() {
    return {
      title: 'About'
    }
  },

  data() {
    return {
      page: {
        title: "About",
        introduction: "<p>Hi, I'm <strong>Devanshi Shah</strong>, a Computer Engineering undergraduate, living in and in love with Mumbai.</p>",
        content: `
          <p>I am passionate about software development, good design and growth. Pursuing my bachelor's degree, I’ve been exploring many things. Earlier this year, I worked as the frontend lead in a team for a freelance project to build 
            <a href=\"https://fashion-o-phile.netlify.app/\" target=\"_blank\" rel=\"noreferrer noopener\">website</a> of a local business.
          </p>\n
          <p>Later in June, I interned at
            <a href=\"https://home.barclays/\" target=\"_blank\" rel=\"noreferrer noopener\">Barclays PLC</a>, a British multinational universal bank, where I realized how impactful every change that I made was. Later this year, I interned at 
            <a href=\"https://www.workindia.in/\" target=\"_blank\" rel=\"noreferrer noopener\">WorkIndia</a>, a 5 year old start-up and a job portal, where I got the taste of ownership and action-based culture. Since then I'm focusing on exploring new technology one step at a time.
          </p>\n
          <figure>
            <img src=\"https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80\" width=\"2000\" height=\"800\" data-image=\"390\" />
          </figure>\n
          <p>Apart from design and code, I love exploring beautiful places on my bike and catching up with friends. </p>
        `
      }
    }
  }
})
</script>
