<template>
  <h1 class="c-hello enter-fade-up">
    <div class="c-title__text">
      <span>
        <slot />
      </span>
    </div>
    <span class="c-hello__inner">
        <slot />
      </span>
  </h1>
</template>

<script lang="ts">
export default {
  name: 'SPageTitle'
}
</script>
