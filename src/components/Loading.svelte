<script>
  export let isLoading = true
</script>


{#if isLoading}
  <p style="color: lightgray;">Aguanta un minutito...</p>
{:else}
  <slot />
{/if}