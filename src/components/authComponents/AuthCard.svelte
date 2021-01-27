<script>
  import { fade, fly } from 'svelte/transition';

  // Esto podría ser un slot, ahora mismo es un prop para que haya un poco de todo
  export let title;
  export let subtitle;

  export let style = '';
</script>


<div class="card" {style}
  in:fly="{{ x: 100, duration: 500 }}"
  out:fade="{{ duration: 200 }}">

  <h1>{title}</h1>
  <p>{subtitle}</p>

  <div class="form-cont">
      <slot name="form" />
  </div>

  <div class="footer-cont">
      <slot name="footer" />
  </div>

</div>
  
  
<style>
  .card {
    margin: 0;
    padding: 1.5em 1em 1em;

    border-radius: 1em;
    background-color: var(--cultured);
  }


  h1, p, .footer-cont {
    text-align: center;
  }


  h1 {
    font-size: 2.25em;
    margin: 0;
    font-weight: 900;
    color: var(--eerie-black);
  }


  p {
    margin-top: 0.5em;
    font-style: italic;
    color: var(--xanadu);
  }


  .form-cont {
    margin: 3em 0;
  }


  @media (min-width: 640px) { /* ok? */
    .card {
      width: 400px;
    }
  }
</style>