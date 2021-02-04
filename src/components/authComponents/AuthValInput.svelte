<script>
  import { slide } from 'svelte/transition'


  export let type = 'text'
  export let txt
  export let name
  
  export let validation // ApproveJs result object
  let dirty = false
</script>


<div>
  <label for="{name}">{txt}</label>

  <input {type} id="{name}" {name}
    class:valid="{validation.approved}"
    class:invalid="{dirty && !validation.approved}"
    on:input|once="{() => dirty = true}">

  {#if dirty && !validation.approved}
    <small transition:slide|local>{validation.errors[0]}</small>
  {/if}
</div>


<style>

  div {
    margin-bottom: 1em;
  }

  label {
    margin: 0 0 0.15em 1em;
  }

  input {
    width: 100%;
    margin: 0;
    padding: 1em;
    
    border-radius: 1.5em;
    border-color: var(--text3);
    color: var(--text);
    background-color: var(--fg);

    transition: .25s;
  }

  input:focus {
    border-color: var(--text);
    box-shadow: 0px 0px 1px var(--text);
  }

  /* saco el estilo por defecto */
  input:invalid {
    box-shadow: none;
  }

  .valid, .valid:focus {
    border-color: var(--success);
    box-shadow: 0px 0px 1px var(--success);
  }

  .invalid, .invalid:focus {
    border-color: var(--error);
    box-shadow: 0px 0px 1px var(--error);
  }

  small {
    display:block;
    font-size: 0.8em;
    margin: 0.25em 0;
    padding-left: 1.25em;
    color: var(--error);
  }

</style>