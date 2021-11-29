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
  name: 'Contact',

  components: {
    SSocial,
    SPageTitle
  },

  head() {
    return {
      title: 'Contact'
    }
  },

  data() {
    return {
      page: {
        title: "Contact",
        introduction: `
        <p class=\"center\">Think we can make great things together?
          <strong>
            <br />
            <a href=\"mailto:devanshi1500@gmail.com\">Let's get in touch!</a>
          </strong>
        </p>
        `,
        content: `
        <p class=\"center\">
          <strong>Devanshi Shah</strong>
          <br />
          <a href=\"mailto:devanshi1500@gmail.com\">devanshi1500@gmail.com&nbsp;</a>
        </p>
        `
      }
    }
  }
})
</script>
