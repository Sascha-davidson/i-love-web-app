<script>
  export let text, routing;
  export let severity = "primary";
  export let form = "";
  export let hidden = "";
  export let id = "";
</script>

<a href={routing} {id} class={severity} {form} {hidden}>{text}</a>

<style>
  a {
    cursor: pointer;
    text-decoration: none;

    background-color: var(--background-color);
    border: 3px solid var(--border-color);
    color: var(--tekst-color);
  }

  .primary {
    --background-color: hsl(161, 49%, 58%);
    --border-color: hsl(161, 49%, 58%);
    --tekst-color: hsl(0, 0%, 100%);
    box-shadow: var(--box-shadow);
  }

  .primary:is(:hover, :focus) {
    --background-color: hsl(161, 49%, 30%);
    --border-color: hsl(161, 49%, 30%);
  }

  .large-heading-link {
    --background-color: transparent;
    --border-color: hsl(161, 49%, 58%);
    --tekst-color: hsl(0, 0%, 100%);
    border: none;
    font-size: 3rem;
    font-size: clamp(1.5rem, 8vw, 3rem);
  }

  .large-heading-link:is(:hover, :focus) {
    color: hsl(130, 100%, 73%);
  }

  .primary-button {
    border-radius: 0.6rem;
    padding: 0.5rem .5rem;
    --background-color: hsl(130, 100%, 73%);
    --border-color: hsl(130, 100%, 73%);
    --tekst-color: hsl(0, 0%, 10%);
  }

  .primary-button:is(:hover, :focus) {
    --background-color: hsl(130, 80%, 60%);
    --border-color: hsl(130, 80%, 60%);
    --tekst-color: hsl(0, 0%, 10%);
  }

  @media (min-width: 390px) {
    .primary-button {
      padding: 0.5rem 1.2rem;
    }

    .large-heading-link {
    font-size: clamp(2rem, 5vw, 3rem);
  }
  }
</style>
