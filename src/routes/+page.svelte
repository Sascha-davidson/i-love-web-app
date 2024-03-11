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

<h1
  style="position: absolute; top: 2rem; padding: 2rem; background: red; left: 50%; transform:translateX(-50%); font-size: 1.5rem; border-radius: .5rem; line-height:normal;"
>
  UNDER CONSTRUCTION
</h1>

<canvas id="canvas1"></canvas>
<header class="content-grid">
  <h1>
    I 
    <svg width="244" height="224" viewBox="0 0 244 224" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M122 224L104.31 207.887C41.48 150.88 0 113.16 0 67.139C0 29.4191 29.524 0 67.1 0C88.328 0 108.702 9.88774 122 25.3907C135.298 9.88774 155.672 0 176.9 0C214.476 0 244 29.4191 244 67.139C244 113.16 202.52 150.88 139.69 207.887L122 224Z" fill="black"/>
    </svg>  
    web
  </h1>
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
    grid-column: content;
    transform: translateY(10%);
    line-height: 0;
  }

  .nav-container {
    background-color: #000000;
    position: sticky;
    top: 0;
    z-index: 4;
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  svg{
    width: 20%;
    height: auto;
  }
</style>
