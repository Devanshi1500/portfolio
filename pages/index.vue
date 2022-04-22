<template>
  <div class="c-content__center">
    <s-hello>{{ page.title }}</s-hello>
    <div class="lead enter-fade-up enter-delay-1" v-html="page.introduction" />
    <s-services :services="page.services" />
    <s-skills :skills="page.skills" />
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SSocial from '~/components/SSocial.vue'
import SServices from '~/components/SServices.vue'
import SHello from '~/components/SHello.vue'
import { constants } from '~/assets/content'
import SSkills from '~/components/SSkills.vue'

export default defineComponent({
  name: 'Index',

  components: {
    SSocial,
    SServices,
    SHello,
    SSkills
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