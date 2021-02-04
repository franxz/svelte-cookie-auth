<script>
  import { fly } from 'svelte/transition';

  export let title;
  export let subtitle;
</script>


<div class="card" in:fly="{{ x: 100, duration: 250 }}">

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
    width: 400px;
    padding: 1.5em 1em 1em;
    border-radius: 1.5em;
    background-color: var(--fg);
  }


  h1, p, .footer-cont {
    text-align: center;
  }


  h1 {
    font-size: 2.25em;
    margin: 0;
    font-weight: 900;
  }


  p {
    margin-top: 0.5em;
    font-style: italic;
    color: var(--text2);
  }


  .form-cont {
    margin: 2em 0 3em;
  }
</style>