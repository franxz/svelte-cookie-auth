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
    class:valid="{validation.approved}" class:invalid="{dirty && !validation.approved}"
    on:input|once="{() => dirty = true}">

  {#if dirty && !validation.approved}
    <small transition:slide|local>{validation.errors[0]}</small>
  {/if}
</div>


<style>

  div {
    margin-bottom: 0.75em;
  }

  label {
    margin: 0 0 0.15em 1em;
  }

  input {
    width: 100%;
    margin: 0;
    padding: 1em;
    border-radius: 1em;
    transition: .25s;
  }

  input:focus {
    border-color: var(--eerie-black);
  }

  input:invalid {
    box-shadow: none; /* me deshago del estilo por defecto */
  }

  .valid, .valid:focus {
    border-color: #43aa8b;
    box-shadow: 0px 0px 1px #43aa8b;
  }

  .invalid, .invalid:focus {
    border-color: #f94144;
    box-shadow: 0px 0px 1px #f94144;
  }

  small {
    display:block;
    padding-left: 16px;
    color: #f94144;
    margin: 0.25em 0;
  }

</style>