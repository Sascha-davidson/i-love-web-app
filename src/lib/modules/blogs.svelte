<script>
  import BlogContent from "$lib/atoms/blog-content.svelte";
  import { onMount } from "svelte";

  export let LinkRoute="/", Content="test";

  onMount(async () => {

  });
</script>

<a class="card" href={LinkRoute}>
  <div class="inner">
    <img src="image-155.png" alt="blablabla" />
    <h3>blog title</h3>
    <BlogContent {Content} />
  </div>
  <div class="blob"></div>
  <div class="fakeblob"></div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in-out;
    position: relative;

    overflow: hidden;
    padding: 3px;
    background: rgb(128 128 128 / 0.2);
    border-radius: 0.6rem;
  }

  .card:hover > .inner {
    background: rgba(26, 26, 26, 0.6);
    backdrop-filter: blur(80px);
  }

  .inner {
    border-radius: inherit;
    padding: 10px;
    /* width: 210px;
    height: 150px; */
    background: rgb(26, 26, 26);
    backdrop-filter: blur(80px);
    transition: all 300ms ease-in-out;
  }

  .blob {
    filter: blur(40px);
    position: absolute;
    z-index: -1;
    top: 0;
    opacity: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: hsl(130, 80%, 60%, 1);
    transition: all 300ms ease-in-out;
  }

  .fakeblob {
    display: hidden;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    
  }

  img {
    border-radius: inherit;

    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    opacity: 0.5;
    transition: 0.2s linear;
    z-index: -1;
  }

  a img{
    opacity: 1;
  }

  /* 


  a:hover img,
  a:focus img {
    opacity: 1;
    scale: 1.1;
  }

  @media screen and (min-width: 500px) {
    a {
      aspect-ratio: 10/7;
    }
  } */
</style>
