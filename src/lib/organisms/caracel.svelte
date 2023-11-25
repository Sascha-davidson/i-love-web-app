<script>
  import Blogs from "$lib/modules/blogs.svelte";
  import Title from "$lib/atoms/h2-title.svelte";

  export let TitleText;
</script>

<section>
  <Title {TitleText} />
  <article data-leble="ceracel">
    <ul>
      <li>
        <Blogs
          LinkRoute="#"
          TitleText="Test"
          Naam="Sascha Davidson"
          Content="bla bla bla"
        />
      </li>
      <li>
        <Blogs
          LinkRoute="#"
          TitleText="Test"
          Naam="Sascha Davidson"
          Content="bla bla bla"
        />
      </li>
      <li>
        <Blogs
          LinkRoute="#"
          TitleText="Test"
          Naam="Sascha Davidson"
          Content="bla bla bla"
        />
      </li>
      <li>
        <Blogs
          LinkRoute="#"
          TitleText="Test"
          Naam="Sascha Davidson"
          Content="bla bla bla"
        />
      </li>
      <li>
        <Blogs
          LinkRoute="#"
          TitleText="Test"
          Naam="Sascha Davidson"
          Content="bla bla bla"
        />
      </li>
      <li>
        <Blogs
          LinkRoute="#"
          TitleText="Test"
          Naam="Sascha Davidson"
          Content="bla bla bla"
        />
      </li>
    </ul>
  </article>
</section>

<style>
  section {
    padding: 3rem 0;
  }
  ul {
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
    padding: 0.5rem 0 2rem 0;
  }

  li {
    list-style-type: none;
  }

  ul::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    border-radius: 10px;
    background-color: none;
  }

  ul::-webkit-scrollbar {
    width: 12px;
    background-color: none;
  }

  ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--primary);
  }
</style>
