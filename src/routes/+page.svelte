<script>
  import Nav2 from "$lib/organisms/nav2.svelte";
  import { onMount } from "svelte";
  import Footer from "$lib/organisms/footer.svelte";
  import Blogs from "$lib/modules/blogs.svelte";

  onMount(async () => {
    const nav = document.getElementById("Nav");
    const navHeight = nav.offsetHeight;
    const header = document.querySelector("header");

    const canvas = document.getElementById("canvas1");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - navHeight;
    canvas.style.height = "calc(100svh - " + navHeight + "px)";

    header.style.height = "calc(100svh - " + navHeight + "px)";

    const scrollThreshold = window.innerHeight - navHeight;

    function checkScroll() {
      if (window.scrollY >= scrollThreshold) {
        nav.classList.add("secondary");
      } else {
        nav.classList.remove("secondary");
      }
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);
  });
</script>

<h1 style="position: absolute; top: 2rem; padding: 2rem; background: red; left: 50%; transform:translateX(-50%); font-size: 1.5rem; border-radius: .5rem; line-height:normal;">UNDER CONSTRUCTION</h1>

<canvas id="canvas1"></canvas>
<header class="content-grid">
  <h1>I ❤ web</h1>
</header>
<div id="blogs" class="page-grid nav-container">
  <Nav2 id="Nav" logoRouting="/#blogs" />
</div>
<main class="content-grid">
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />

  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />
  <Blogs />

  
</main>

<Footer />

<style>
  #canvas1 {
    background-color: #1e1e1e;
    background: linear-gradient(
      0deg,
      rgba(64, 64, 64, 1) 0%,
      rgba(33, 33, 33, 1) 100%
    );
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100vh - 2rem);
    /* height: 100vh; */
  }

  h1 {
    font-size: 2rem;
    font-size: clamp(3rem, 17vw, 16rem);
    text-transform: uppercase;
    font-weight: 800;
    color: black;
    /* margin-bottom: -3%; */
    grid-column: content;
    line-height: 60%;

    /* -webkit-text-stroke: 8px rgb(165, 165, 165); width and color */
  }

  .nav-container {
    background-color: #000000;
    position: sticky;
    top: 0;
    z-index: 4;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>
