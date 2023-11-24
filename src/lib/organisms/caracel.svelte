<script>
    import Blogs from "$lib/modules/blogs.svelte"
    import Title from "$lib/atoms/h2-title.svelte"
</script>

<section>
    <Title TitleText="Nieuwes Blogs"/>
    <article data-leble="ceracel">
      <ul>
        <li><Blogs /></li>
        <li><Blogs /></li>
        <li><Blogs /></li>
        <li><Blogs /></li>
        <li><Blogs /></li>
        <li><Blogs /></li>
      </ul>
    </article>
  </section>

  <style>
    ul{
        display: flex;
        gap: 3rem;
        overflow-x: scroll;
        padding: 5px 2rem;

    }
  </style>