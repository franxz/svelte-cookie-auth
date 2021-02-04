<script>
  export let type = 'text'
  export let txt
  export let name
  export let required = false
</script>


<label for="{name}">{txt}</label>
<input {type} id="{name}" {name} {required}>


<style>

  label {
    margin: 0 0 0.15em 1em;
  }

  input {
    width: 100%;
    margin: 0; margin-bottom: 1em;
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

</style>