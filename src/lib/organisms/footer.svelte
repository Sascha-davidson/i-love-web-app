<script>
  let date = new Date();
  export let year = date.getFullYear();
</script>

<footer class="content-grid">
  <input type="checkbox" id="copyright">
  <label for="copyright">
    <span>©</span>
    <span>
      Copyright 2023 - <span id="CurrentYear">{year}</span> Sascha Davidson
    </span>
  </label>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    color: white;
    z-index: 3;
    display: flex;
    align-items: center;
    /* background-color: black; Adjust background color as needed */
  }

  input {
    display: none;
  }

  input:checked ~ label {
    width: 100%;
    overflow: auto;

  }

  label {
    width: 48px;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.5s ease-in-out;
    display: flex;
    border: 2px solid hsl(130, 100%, 73%);
    border-radius: 0.6rem;
    align-items: center;
    background-color: black;
  }

  label > span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
  }

  label > span:nth-child(2) {
    padding: 0 1.5rem 0 0;
    font-size: 1rem;
  }

  @media (min-width: 500px) {
    footer {
      background-color: unset;
      padding: 2rem;
    }

    input:checked ~ label {
      width: 360px;
      overflow: hidden;

    }
  }
</style>