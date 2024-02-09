<script>
  let date = new Date();
  export let year = date.getFullYear();
</script>

<footer class="content-grid">
  <p>
    © Copyright 2023 - <span id="CurrentYear">{year}</span> Sascha Davidson
  </p>
</footer>

<style>
  footer {
    padding: 1rem 0;
    color: var(--secondary);
  }
</style>
