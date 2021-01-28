<script>
  export let type = 'text';
  export let txt;
  export let name;
  export let required = false;
</script>


<label for="{name}">{txt}</label>
<input {type} id="{name}" {name} {required}>


<style>
  label {
    margin: 0 0 0.15em 1em;
  }

  input {
    width: 100%;
    margin: 0; margin-bottom: 0.75em;
    padding: 1em;
    border-radius: 1em;
    transition: .25s;
  }

  input:focus {
    border-color: var(--eerie-black);
  }
</style>