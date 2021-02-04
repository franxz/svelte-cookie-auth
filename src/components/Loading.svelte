<script>
  export let isLoading = true
</script>


{#if isLoading}
  <p style="color: var(--fg);">Aguanta un minutito...</p>
{:else}
  <slot />
{/if}