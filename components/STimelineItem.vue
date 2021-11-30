<template>
  <section class="timeline-item">
    <div class="item">
      <span :style="getBackgroundColour(itemTimeline.color)" class="dot" />
      <h3 class="date-item">{{ getFormattedDate(itemTimeline) }}</h3>
      <h4 class="title-item" v-html="itemTimeline.title" />
      <h4 class="company-item" v-if="itemTimeline.company" v-html="itemTimeline.company.toUpperCase()" />
      <p class="description-item" v-html="itemTimeline.description" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'STimelineItem',
  data() {
    return {
      dateLocale: 'en-GB'
    }
  },
  props: {
    itemTimeline: {
      type: Object,
      default: () => ({})
    },
    colorDots: {
      type: String,
      default: '#2da1bf'
    }
  },
  methods: {
    getBackgroundColour(color) {
      return color ? `background:${color}` : `background:${this.colorDots}`
    },
    getFormattedDate(item) {
      let formattedDate = ''
      const fromMonth = item.from.toLocaleDateString(this.dateLocale, { month: 'short' })
      formattedDate = `${fromMonth}`
      if (item.hasOwnProperty('to')) {
        const toMonth = item.to.toLocaleDateString(this.dateLocale, { month: 'short' })
        formattedDate += ` - ${toMonth}`
      }
      return formattedDate
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-item {
  .item {
    border-left: 5px solid #ccd5db;
    padding: 20px 0 20px 15px;
    position: relative;
  }
  .date-item {
    margin: 0;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .title-item {
    margin: 0;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 600;
  }
  .company-item {
    margin: 0;
    padding: 5px 0 0 0;
    font-size: 15px;
    font-weight: 500;
  }
  .description-item {
    font-weight: 300;
    margin: 0;
    ul {
      margin: 0;
    }
  }
  .dot {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    left: -10px;
    top: 26px;
  }
}
</style>
