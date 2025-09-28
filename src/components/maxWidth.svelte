<script lang="ts">

</script>

<div class="container">
  <div class="slot">
    <slot />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .slot {
    max-width: 1200px;
  }
</style>