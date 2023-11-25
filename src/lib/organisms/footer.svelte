<script>
  //   window.addEventListener(`load`, () => {
  //     const year = document.getElementById(`CurrentYear`);
  //     let date = new Date();
  //     year.innerHTML = date.getFullYear();
  //   });
</script>

<div class="container">
  <footer>
    <p>
      © Copyright 2023 - <span id="CurrentYear">2023</span> Sascha Davidson
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
