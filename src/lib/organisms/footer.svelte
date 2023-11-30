<script>
  let date = new Date();
  export let year = date.getFullYear();
</script>

<div class="container content-grid">
  <footer class="content">
    <p>
      © Copyright 2023 - <span id="CurrentYear">{year}</span> Sascha Davidson
    </p>
  </footer>
</div>

<style>
  .container {
    background-color: var(--primary);
  }

  footer {
    padding: 1rem 0;
    color: var(--secondary);
  }
</style>
