<script>
    export let LinkRoute, LinkText, ExternalLink
</script>

<a rel="external" href="{LinkRoute}">{LinkText}</a>

<style>
    a{
        display: flex;
        align-items: center;
        padding: .5rem 1.5rem;
        margin: .7rem 0;
        background-color: var(--primary);
        text-decoration: none;
        border: 3px solid var(--primary);
        color: var(--bg-color);
        border-radius: 50rem;
        transition: all .3s ease-in-out;
    }

    a:hover{
        border: 3px solid var(--primary);
        color: var(--primary);
        background-color: var(--bg-color);
    }
</style>