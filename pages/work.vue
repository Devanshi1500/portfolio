<template>
  <div class="c-content__center">
    <s-page-title>{{ page.title }}</s-page-title>
    <Timeline
      :timeline-items="timelineItems"
      :message-when-no-items="messageWhenNoItems"
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
      page: {
        title: "Work"
      },
      messageWhenNoItems: 'There arent items',
    timelineItems: [
      {
        from: new Date(2021, 7),
        to: new Date(2021, 9),
        title: "Software Developer Intern",
        company: "WorkIndia",
        description:
          `
          <ul>
            <li>Responsible for end-to-end completion of tasks including requirement gathering, documentation, code changes, testing and deployment</li>
            <li>70+ successfully merged PRs</li>
            <li>In charge of Sales Panel microservice responsible for about 5% of the revenue</li>
            <li>Worked with Django, React, Kafka, Kubernetes, Jenkins</li>
          </ul>
          `
      },
      {
        from: new Date(2021, 5),
        to: new Date(2021, 6),
        title: "Graduate Technical Intern",
        company: "Barclays PLC",
        description:
          `
          <ul>
            <li>Managed the team and designed a utility to automate creation and management of 750+ runbooks per project</li>
            <li>Worked with Angular, Typescript</li>
          </ul>
          `
      },
      {
        from: new Date(2021, 2),
        to: new Date(2021, 4),
        title: "Frontend Development Lead",
        company: "Freelance Project",
        description:
          `
          <ul>
            <li>Worked as frontend lead and helped a local business establish an online presence</li>
            <li>Planned and built the frontend, reviewed code of other team members</li>
            <li>Point-of-contact between the client and the team</li>
            <li>Worked with Vue.js, Tailwind CSS</li>
            <li><a href='https://fashion-o-phile.netlify.app'>https://fashion-o-phile.netlify.app</a></li>
          </ul>
          `
      },
      {
        from: new Date(2021, 0),
        to: new Date(2021, 2),
        title: "Web Development Lead",
        company: "Civil Engineering Association, VJTI",
        description:
          `
          <ul>
            <li>Responsible for building, deploying and maintaining the committee website</li>
            <li>Gathering and accommodating everchanging requirements of the committee and sponsors</li>
            <li><a href='https://cesavjti.tech'>https://cesavjti.tech</a>
          </ul>
          `
      }
    ]
    }
  }
})
</script>
