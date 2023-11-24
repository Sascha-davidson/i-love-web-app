<script>
  import Nav from "$lib/organisms/nav.svelte";
  import Footer from "$lib/organisms/footer.svelte";
  import Caracel from "$lib/organisms/caracel.svelte";
  import Title from "$lib/atoms/h2-title.svelte"
</script>

<div class="container box-shadow">
  <Nav />
</div>

  <main>
    <section>
      <div><Title TitleText="I Love Web" /></div>
      <article><Title TitleText="featured blog" /></article>
    </section>

    <Caracel />
    
  </main>

<div class="container footer">
  <Footer />
</div>

<style>
  .container {
    display: flex;
    padding: 0 2rem;
    justify-content: center;
    width: 100%;
  }

  .box-shadow {
    box-shadow: 0px -8px 16px 10px #000;
  }

  .footer{
    background-color: #1E1C25;
  }


</style>
