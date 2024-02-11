<script>
  import Link from "$lib/atoms/Link.svelte";
  import Search from "$lib/atoms/search.svelte";
  import { onMount } from "svelte";

  export let id;
  export let logoRouting = "/";
  export let severity = "primary";

  onMount(async () => {
    const nav = document.querySelector("nav");
    const navHeight = nav.offsetHeight;
    let lastScrollPosition = window.scrollY;
    let isScrollingDown = false;

    const handleElementTouchTop = () => {
      console.log("Element touched the top of the window!");
    };

    const checkElementTouchTop = () => {
      const elementRect = nav.getBoundingClientRect();

      if (elementRect.top <= 0) {
        handleElementTouchTop();

        function handleScroll() {
          const currentScrollPosition = window.scrollY;

          if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            isScrollingDown = true;
          } else {
            // Scrolling up
            isScrollingDown = false;
          }

          if (currentScrollPosition > navHeight && isScrollingDown) {
            // Scrolling down below the navHeight
            nav.classList.add("invisible");
          } else {
            // Scrolling up or not reaching the navHeight
            nav.classList.remove("invisible");
          }

          lastScrollPosition = currentScrollPosition;
        }

        function checkScroll() {
          handleScroll();
        }

        window.addEventListener("scroll", checkScroll);
      }
    };

    // Scroll event listener to trigger the check for element touch top
    window.addEventListener("scroll", () => {
      checkElementTouchTop();
    });
  });
</script>

<nav {id} class=" content-grid {severity}">
  <h2>
    <Link severity="large-heading-link" routing={logoRouting} text="Blogs" />
  </h2>

  <Search />

  <a href="https://www.linkedin.com/in/sascha-davidson-7293921a3/" class="linkedin" target="_blank" rel="Linkedin" aria-label="Linkedin">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525L12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
      />
    </svg>
  </a>

  <a href="https://github.com/Sascha-davidson" class="github" target="_blank" rel="Github" aria-label="Github">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C10.4241 0 8.86371 0.318095 7.4078 0.936124C5.95189 1.55415 4.62902 2.46001 3.51472 3.60198C1.26428 5.90829 0 9.03631 0 12.2979C0 17.7336 3.444 22.3453 8.208 23.981C8.808 24.0793 9 23.6981 9 23.3661V21.2877C5.676 22.0256 4.968 19.6398 4.968 19.6398C4.416 18.2132 3.636 17.832 3.636 17.832C2.544 17.0695 3.72 17.0941 3.72 17.0941C4.92 17.1802 5.556 18.3608 5.556 18.3608C6.6 20.2301 8.364 19.6767 9.048 19.3815C9.156 18.5822 9.468 18.0411 9.804 17.7336C7.14 17.4262 4.344 16.3685 4.344 11.683C4.344 10.318 4.8 9.22344 5.58 8.35029C5.46 8.04284 5.04 6.76386 5.7 5.10364C5.7 5.10364 6.708 4.77159 9 6.35803C9.948 6.08747 10.98 5.9522 12 5.9522C13.02 5.9522 14.052 6.08747 15 6.35803C17.292 4.77159 18.3 5.10364 18.3 5.10364C18.96 6.76386 18.54 8.04284 18.42 8.35029C19.2 9.22344 19.656 10.318 19.656 11.683C19.656 16.3808 16.848 17.4139 14.172 17.7213C14.604 18.1025 15 18.8527 15 19.9964V23.3661C15 23.6981 15.192 24.0916 15.804 23.981C20.568 22.333 24 17.7336 24 12.2979C24 10.6829 23.6896 9.08376 23.0866 7.59171C22.4835 6.09966 21.5996 4.74395 20.4853 3.60198C19.371 2.46001 18.0481 1.55415 16.5922 0.936124C15.1363 0.318095 13.5759 0 12 0Z"
      />
    </svg>
  </a>

  <div class="portfolioBtn">
    <Link
      routing="saschadavidson.nl"
      severity="primary-button"
      text="portfolio"
    />
  </div>
</nav>

<style>
  nav {
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "title linkedin github portfolioBtn "
      "search search search search ";
    width: 100%;
    gap: 1rem;
    column-gap: 0.5rem;
    align-items: center;
    transition: padding 0.3s ease-in-out;
    padding: 2rem 0%;
    z-index: 2;

    position: sticky;
    top: 0;
  }

  nav h2 {
    grid-area: title;
  }

  nav .portfolioBtn {
    grid-area: portfolioBtn;
    display: flex;
  }

  .invisible {
    grid-template-rows: auto;
    padding-bottom: 0;
  }

  .invisible form{
    height: 0;
    opacity: 0;

  }

  nav > div {
    display: flex;
    justify-content: flex-end;
  }

  nav a {
    display: flex;
    padding: 0.3rem;
    justify-content: center;
    height: 100%;
    max-height: 44.8px;
    border: 2px solid white;
    border-radius: 0.6rem;
    outline: none;
  }

  a:is(:hover, :focus) {
    border: 2px solid hsl(130, 100%, 73%);
  }

  a:is(:hover, :focus) svg {
    fill: hsl(130, 100%, 73%);
  }

  svg {
    fill: white;
    height: 100%;
    width: auto;
  }

  .github {
    grid-area: github;
  }

  .linkedin {
    grid-area: linkedin;
  }

  @media (min-width: 390px) {
    nav {
      grid-template-columns: 1fr auto auto auto;
      grid-template-rows: auto;
      grid-template-areas:
        "title linkedin github portfolioBtn"
        "search search search search";
      column-gap: 1rem;
    }

    nav a {
      padding: 0.6rem;
    }
  }

  @media (min-width: 800px) {
    nav {
      grid-template-columns: auto 1fr auto auto auto;
      grid-template-rows: auto;
      grid-template-areas: "title search linkedin github portfolioBtn";
    }

    .secondary {
      padding: 0.5rem 0;
    }
  }

  @media (min-width: 950px) {
    nav {
      grid-template-columns: 1fr 1fr auto auto auto;
      grid-template-rows: auto;
      grid-template-areas: "title search linkedin github portfolioBtn";
    }
  }
</style>
