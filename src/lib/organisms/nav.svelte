<script>
  import NavLink from "$lib/atoms/nav-link.svelte";
  import LinkButton from "$lib/atoms/Link-button.svelte";
  import Logo from "$lib/atoms/logo.svelte";
</script>

<div class="container">
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
</div>

<style>
  .container {
    box-shadow: 0px -13px 16px 15px var(--primary);
    width: 100%;
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }

  ul {
    display: flex;
    gap: 1rem;
    height: 100%;
  }

  li {
    list-style-type: none;
    display: flex;
  }
</style>
