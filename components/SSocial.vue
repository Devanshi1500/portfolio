<template>
  <div class="c-social">
    <h3 class="c-social__title">
      <template v-if="showSlogan">
        <div class="c-social__primary">
          Want to know more? Looking for something similar?
        </div>
      </template>
      <div class="c-social__secondary">
        Find me online or
        <nuxt-link to="/contact">get in touch</nuxt-link>
      </div>
    </h3>
    <ul class="c-social-links">
      <li 
        class="c-social-links__item"
        v-for="(s, index) in social"
        :key="index"
      >
        <a
          :href="s.link"
          target="_blank"
          rel="noopener"
        >
          <svg
            class="c-social-links__icon"
            width="24"
            height="24"
            :viewBox="s.iconBox"
          >
            <path :d="s.imgPath"/><circle cx="1.75" cy="1.75" r="1.75"/>
          </svg>
          <span class="c-social-links__label">{{ s.label }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { constants } from '~/assets/content'

export default {
  name: 'SSocial',

  props: {
    showSlogan: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      social: constants.socialLinks
    }
  }
}
</script>
