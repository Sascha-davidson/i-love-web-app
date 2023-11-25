<script>
  import Caracel from "$lib/organisms/caracel.svelte";
  import Title from "$lib/atoms/h1-title.svelte";
  import FeaturedBlog from "$lib/modules/featured-blog.svelte";
</script>

<main>
  <section>
    <div class="introduction">
      <Title TitleText="I Love Web" />
      <p>Introduction text</p>
    </div>
    <article class="introduction">
      <FeaturedBlog
        LinkRoute="/"
        TitleText="Hallo"
        Naam="Sascha Davidson"
        Content="Sascha is cool"
      />
    </article>
  </section>
  <Caracel TitleText="Nieuweste blogs" />
</main>

<style>
  section {
    display: flex;
    gap: 2rem;
  }

  .introduction {
    width: 100%;
  }
</style>
