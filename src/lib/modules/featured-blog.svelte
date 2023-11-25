<script>
  import Title from "$lib/atoms/h3-title.svelte";
  import PresentationBy from "$lib/atoms/presentation-by.svelte";
  import BlogContent from "$lib/atoms/blog-content.svelte";

  export let LinkRoute, TitleText, Naam, Content;
</script>

<a href={LinkRoute}>
  <img src="image-155.png" alt="" />
  <Title {TitleText} />
  <!-- <PresentationBy {Naam} /> -->
  <BlogContent {Content} />
  <span>Featured</span>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    aspect-ratio: 10/6;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-decoration: none;
    color: var(--light);
    transition: all 0.3s ease-in-out;
    border: 2px solid var(--primary);
    position: relative;
    overflow: hidden;
  }

  a:hover,
  a:focus {
    background-color: var(--bg-block-hover);
    padding: 2rem;

  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem 1.5rem;
    background-color: var(--primary);
    border-radius: 0 0 0 1rem;
    color: var(--secondary);
  }

  img {
    position: absolute;
    border-radius: 2rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    transition: 0.2s linear;
    z-index: -1;
  }

  a:hover img,
  a:focus img {
    opacity: 1;
    scale: 1.1;
  }
</style>
