<script>
  import Header from "./components/Header.svelte";

  const getGitHubActivities = (async () => {
    const response = await fetch("/api/getGitHubActivities");
    return await response.json();
  })();
</script>

<main>
  <Header />
  {#await getGitHubActivities}
    <p>...waiting</p>
  {:then items}
  {#each items as item}
	<div>{item.repository}</div>
  {/each}
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
