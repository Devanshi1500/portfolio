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
import { constants } from '~/assets/content'

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
      page: constants.pages.filter(i => i.name=='about')[0]
    }
  }
})
</script>
