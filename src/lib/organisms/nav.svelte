<script>
  import NavLink from "$lib/atoms/nav-link.svelte";
  import LinkButton from "$lib/atoms/link-button.svelte";
  import Logo from "$lib/atoms/logo.svelte";

  let navOpen = false;

  function handleNav() {
    navOpen = !navOpen;
  }

</script>

<div class="container content-grid">
  <nav class="content">
    <div class="mobile-container">
      <Logo LinkRoute="/" />
      <button class:change={navOpen} on:click={handleNav}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
    </div>
    <ul id="mySidenav" class="sidenav" class:UlActive={navOpen}>
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
  button {
    display: inline-block;
    cursor: pointer;
    background: none;
    border: none;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #ffffff;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 50px;
  }

  .change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }

  .container {
    box-shadow: 0px -13px 16px 15px var(--primary);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  nav div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 5;
    background-color: var(--secondary);
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    right: 0;
    top: 0;
    transform: translateY(-100%);
    background-color: var(--primary);
    z-index: 2;
    border-radius: 0 0 10px 10px;
    width: 100%;
    padding: 1.5rem;
    transition: all .4s;
  }

  .UlActive {
    bottom: unset;
    top: 100%;
    transform: translateY( 0);

  }

  li {
    list-style-type: none;
    display: flex;
  }

  @media screen and (min-width: 640px) {
    button {
      display: none;
    }

    ul {
      position: unset;
      flex-direction: unset;
      gap: 1rem;
      height: 100%;
      background-color: unset;
      padding: unset;
      width: unset;
      transform: translateY(0);

    }
  }
</style>
