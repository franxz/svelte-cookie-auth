<script>
    export let txt;
    export let style;
</script>


<button {style}>
    <span>{txt}</span>
</button>


<style>
  button {
    width: 100%;
    margin: 0;
    padding: 1em;
    border-radius: 1em;
    background-color: var(--green-blue-crayola);
    transition: .25s;
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