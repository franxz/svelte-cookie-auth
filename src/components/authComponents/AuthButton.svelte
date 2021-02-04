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
    
    background-color: var(--primary);
    border-radius: 1.5em;
    border-width: 0px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    
    transition: .25s;
  }

  button:hover {
    background-color: var(--primary2);
  }

  button:active {
    background-color: var(--primary-2);
    transition: none;
  }

  span {
    font-size: 1.2em;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: var(--fg);
  }
  
</style>