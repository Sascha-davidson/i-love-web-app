<script>
  import NavLink from "$lib/atoms/nav-link.svelte";
  import LinkButton from "$lib/atoms/Link-button.svelte";
  import Logo from "$lib/atoms/logo.svelte";
</script>

<nav>
  <Logo LinkRoute="/" />

  <ul>
    <li><NavLink LinkRoute="/" LinkText="Home" /></li>
    <li><NavLink LinkRoute="/blogs" LinkText="Blogs" /></li>
    <li>
      <LinkButton
        LinkRoute="https://www.saschadavidson.nl"
        LinkText="Portfolio Website"
      />
    </li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
}

ul{
    display: flex;
    gap: 1rem;
    height: 100%;
}

  li {
    list-style-type: none;
    display: flex;
  }
</style>
