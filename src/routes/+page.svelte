<script>
  import Carousel from "$lib/organisms/carousel.svelte";
  import Title from "$lib/atoms/h1-title.svelte";
  import FeaturedBlog from "$lib/modules/featured-blog.svelte";
</script>

<div class="content-grid">
  <main class="content">
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
    <Carousel TitleText="Nieuweste blogs" />
  </main>
</div>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .introduction {
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    section {
      flex-direction: unset;
    }
  }
</style>
