<script>
  export let text, forId, type, id, autocomplete;
  export let severity = "primary";
  export let value = "";
  export let required = "";
  export let placeholder = "";
</script>

<div class={severity}>
  <input {type} {id} {autocomplete} {placeholder} {value} {required} />
  <label for={forId}>{text}</label>
</div>

<style>
  .Primary {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 2rem;
    font-family: var(--primary-font-family);

  }

  .Primary label {
    font-family: var(--tertiary-font-family);
    position: absolute;
    left: -500000px;
  }

  .Primary input {
    padding: 0.5rem 1.2rem;
    border-radius: 0.6rem;
    border: 2px solid white;
    font-size: 1rem;
    width: 100%;
    color: var(--text-color);
    background-color: transparent;
  }

  .Primary input:is(:hover, :focus) {
    border: 3px solid #a5a5a5;
  }
</style>
