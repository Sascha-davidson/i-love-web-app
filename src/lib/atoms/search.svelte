<script>
  export let id="";
  export let severity="";
</script>

<form class="{severity}" {id} action="/" method="get">
  <input
    type="search"
    id="search"
    autocomplete="off"
    placeholder="waar ben je naar op zoek"
    required
  />
  <label for="search">Zoeken</label>
  <button type="submit">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.125 12C5.7625 12 4.6095 11.528 3.666 10.584C2.7225 9.64 2.2505 8.487 2.25 7.125C2.25 5.7625 2.722 4.6095 3.666 3.666C4.61 2.7225 5.763 2.2505 7.125 2.25C8.4875 2.25 9.64075 2.722 10.5848 3.666C11.5288 4.61 12.0005 5.763 12 7.125C12 7.675 11.9125 8.19375 11.7375 8.68125C11.5625 9.16875 11.325 9.6 11.025 9.975L15.225 14.175C15.3625 14.3125 15.4313 14.4875 15.4313 14.7C15.4313 14.9125 15.3625 15.0875 15.225 15.225C15.0875 15.3625 14.9125 15.4313 14.7 15.4313C14.4875 15.4313 14.3125 15.3625 14.175 15.225L9.975 11.025C9.6 11.325 9.16875 11.5625 8.68125 11.7375C8.19375 11.9125 7.675 12 7.125 12ZM7.125 10.5C8.0625 10.5 8.8595 10.172 9.516 9.516C10.1725 8.86 10.5005 8.063 10.5 7.125C10.5 6.1875 10.172 5.39075 9.516 4.73475C8.86 4.07875 8.063 3.7505 7.125 3.75C6.1875 3.75 5.39075 4.07825 4.73475 4.73475C4.07875 5.39125 3.7505 6.188 3.75 7.125C3.75 8.0625 4.07825 8.8595 4.73475 9.516C5.39125 10.1725 6.188 10.5005 7.125 10.5Z"      />
    </svg>
  </button>
</form>

<style>
  form {
    display: flex;
    align-items: center;
    border-radius: 0.6rem;
    overflow: hidden;
    border: 2px solid white;
    grid-area: search;
    height: 100%;
    max-height: 44.8px;
  }

  form *{
    height: 100%;
  }

  .invisible {
    opacity: 0;
    height: 0;
  }

  form:is(:hover, :focus-within) {
    border: 2px solid hsl(130, 100%, 73%);
  }

  /* form:hover {
    border: 2px solid hsl(161, 49%, 58%);
  } */

  label {
    position: absolute;
    left: -500000px;
  }

  input {
    padding: 0.6rem 0.6rem 0.6rem 1.2rem;
    border-radius: 0.6rem;
    font-size: 1rem;
    width: 100%;
    color: var(--text-color);
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    padding: 0.6rem;
    border: none;
    background-color: transparent;
    fill: white;
    font-size: 1rem;
    display: flex;
    gap: 5px;
    cursor: pointer;
    padding: 0.6rem;
    outline: none;
  }

  button:is(:hover, :focus){
    border-left: 2px solid hsl(130, 100%, 73%);

  }

  button:is(:hover, :focus) svg {
    fill: hsl(130, 100%, 73%);
    
    /* fill: black; */
  }

  /* button:is(:hover, :focus){
    background-color: hsl(130, 100%, 73%);
} */

  svg {
    height: 100%;
    width: auto;
  }

  .invisible{
    height: 0;
    opacity: 0;
  }
</style>
