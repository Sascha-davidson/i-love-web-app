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
    padding: 1rem 0;
    color: var(--secondary);
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding:  0 ; /* Adjust the padding as needed */
    color: white; /* Adjust text color as needed */
    z-index: 3;
    display: flex;
    align-items: center;
    padding: .5rem;

  }

input{
  display: none;
}

input:checked ~ label{
  width: 100%;
}

  label {
    width: 48px;
    overflow: hidden;
    white-space: nowrap;
    transition: all .5s ease-in-out;
    top: 50%;
    display: flex;
    background-color: black;
    border: 2px solid hsl(130, 100%, 73%);;
    border-radius: .6rem;
    align-items: center;
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

  /* p > span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    transition: width 0.5s;
  } */

  label:hover {
    width: 100%;
  }

  @media (min-width: 500px){
    footer {
    background-color: unset;
    padding: 2rem;

  }

  label:is(:hover, :focus) {
    width: 360px;
  }

  input:checked ~ label{
    width: 360px;
}
  }
</style>
