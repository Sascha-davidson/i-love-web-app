<script>
       let date = new Date();
       export let year = date.getFullYear();
</script>

<div class="container">
  <footer>
    <p>
      © Copyright 2023 - <span id="CurrentYear">{year}</span> Sascha Davidson
    </p>
  </footer>
</div>

<style>
  .container {
    background-color: var(--primary);
    width: 100%;
    display: flex;
    justify-content: center;
  }

  footer {
    width: 100%;
    max-width: 1200px;
    padding: 1rem 0;
    color: var(--secondary);
  }
</style>
