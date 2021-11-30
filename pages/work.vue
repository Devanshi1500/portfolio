<template>
  <div class="c-content__center">
    <s-page-title>{{ page.title }}</s-page-title>
    <Timeline
      :timeline-items="page.timelineItems"
      :message-when-no-items="page.messageWhenNoItems"
      :unique-year="true"
      :show-day-and-month="true"
      order="desc"
    />
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import Timeline from '~/components/STimeline.vue'
import { constants } from '~/assets/content'

export default defineComponent({
  name: 'About',

  components: {
    SSocial,
    SPageTitle,
    Timeline
  },

  head() {
    return {
      title: 'Work'
    }
  },

  data() {
    return {
      page: constants.pages.filter(i => i.name=='work')[0]
    }
  }
})
</script>
