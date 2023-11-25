<script>
  import Footer from "$lib/organisms/footer.svelte";
  import Blogs from "$lib/modules/blogs.svelte";
</script>

<main>
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

<style>
  .blogs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
</style>
