<script>
  import Footer from "$lib/organisms/footer.svelte";
  import Caracel from "$lib/organisms/caracel.svelte";

  import Title from "$lib/atoms/h3-title.svelte";
  import PresentationBy from "$lib/atoms/presentation-by.svelte";
  import BlogContent from "$lib/atoms/blog-content.svelte";
</script>

<main>
  <article>
    <img src="" alt="" />
    <section>
      <Title TitleText="My blog" />
      <PresentationBy Naam="Krijn" />
      <BlogContent Content="component zijn over complicated" />
    </section>
  </article>

  <Caracel TitleText="Meer blogs" />
</main>

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
