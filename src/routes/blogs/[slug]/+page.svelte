<script>
  import Footer from "$lib/organisms/footer.svelte";
  import Carousel from "$lib/organisms/carousel.svelte";

  import Title from "$lib/atoms/h3-title.svelte";
  import PresentationBy from "$lib/atoms/presentation-by.svelte";
  import BlogContent from "$lib/atoms/blog-content.svelte";
  import Nav2 from "$lib/organisms/nav2.svelte";

</script>

<Nav2 severity="secondary" />
<div class="page-grid">
  <main class="content-grid">
    <article>
      <img src="" alt="" />
      <section>
        <Title TitleText="My blog" />
        <PresentationBy Naam="Krijn" />
        <BlogContent Content="component zijn over complicated" />
      </section>
    </article>

    <Carousel TitleText="Meer blogs" />
  </main>
</div>

<style>
  article {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--bg-block);
    border-radius: 1rem;
    box-shadow: var(--box-shadow);
  }

  img {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
</style>
