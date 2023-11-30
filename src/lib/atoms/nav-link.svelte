<script>
  export let LinkRoute, LinkText;
</script>

<a href={LinkRoute}>{LinkText}</a>

<style>
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 1rem;
    border-bottom: 3px solid var(--secondary);
    color: var(--dark);
    transition: all .3s ease-in-out;
    width: 100%;
  }

  a:hover,
  a:focus{
    border-bottom: 3px solid var(--primary);
    color: var(--primary);

  }
  @media screen and (min-width: 640px) {
    a {
      width: unset;
      color: var(--light);
    }
  }
  
</style>
