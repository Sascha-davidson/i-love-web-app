<script>
  import Footer from "$lib/organisms/footer.svelte";
  import Blogs from "$lib/modules/blogs.svelte";
</script>

<div class="content-grid">
  <main class="content">
    pagetitle
    <section class="blogs">
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
      <Blogs
        LinkRoute="/"
        TitleText="Test"
        Naam="Sascha Davidson"
        Content="bla bla bla"
      />
    </section>
  </main>
</div>

<style>
  .blogs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media screen and (min-width: 600px) {
    .blogs {
    grid-template-columns: 1fr 1fr;
  }
  }

  @media screen and (min-width: 1000px) {
    .blogs {
    grid-template-columns: 1fr 1fr 1fr;
  }
  }
</style>
