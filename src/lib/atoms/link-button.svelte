<script>
  export let LinkRoute, LinkText, ExternalLink;
</script>

<a rel="external" href={LinkRoute}>{LinkText}</a>

<style>
  a {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin: 0.7rem 0;
    background-color: var(--secondary);
    text-decoration: none;
    border: 3px solid var(--secondary);
    color: var(--primary);
    border-radius: 50rem;
    transition: all 0.3s ease-in-out;
    width: 100%;
    text-wrap: nowrap;
  }

  a:hover,
  a:focus {
    border: 3px solid var(--primary);
    color: var(--primary);
    background-color: unset;
  }

  @media screen and (min-width: 640px) {
    a {
      background-color: var(--primary);
      border: 3px solid var(--primary);
      color: var(--secondary);
      width: unset;
      padding: 0.5rem 1.5rem;

    }
  }
</style>
