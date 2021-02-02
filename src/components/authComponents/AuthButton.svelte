<script>
    export let txt;
</script>


<button>
    <span>{txt}</span>
</button>


<style>
  button {
    width: 100%;
    margin: 0; margin-top: 1.5em;
    padding: 1em;
    border-radius: 1em;
    background-color: var(--green-blue-crayola);
    transition: .25s;
    
    /* sombra, terminar */
    border-width: 0px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  button:hover {
    background-color: var(--carolina-blue);
  }

  button:active {
    background-color: var(--usafa-blue);
    transition: none;
  }

  span {
    font-size: 1.2em;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: white;
  }
</style>