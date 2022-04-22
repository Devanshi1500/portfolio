<template>
  <div>
    <s-page-title style="padding: 7.2rem 0 0 0">Tech I've worked with.</s-page-title>
    <div class="c-skills">
      <a 
        v-for="(skill, index) in skills"
        :key="index"
        :href="skill.link"
        target="_blank"
      >
        <img 
          :src="skill.imgLink" 
          :alt="skill.name"
          width="60" 
          height="60"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import SPageTitle from '~/components/SPageTitle.vue'
export default {
  name: 'SSkills',
  props: {
    skills: Array
  },
  components: {
    SPageTitle
  }
}
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