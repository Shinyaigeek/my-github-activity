<script>
  import GitHubActivity from "./components/GitHubActivity.svelte";
  import Header from "./components/Header.svelte";
  import Loading from "./components/Loading.svelte";
  import Footer from "./components/Footer.svelte";

  const getGitHubActivities = (async () => {
    const response = await fetch("/api/getGitHubActivities");
    return await response.json();
  })();
</script>

<Header />
<main class="w-4/5 m-auto min-h-screen">
  <h1 class="text-3xl text-center my-3 dark:text-white">Shinyaigeek's GitHub Acitivity</h1>
  <github-calendar user-name="shinyaigeek" tooltips="true" >Loading Fallback...</github-calendar>
  {#await getGitHubActivities}
    <div class="flex justify-center loading mx-auto my-3">
      <Loading />
    </div>
    <div class="flex justify-center mx-auto my-3 text-2xl dark:text-white">
      <p>Loading...</p>
    </div>
  {:then activities}
    <ul>
      {#each activities as activity}
        <li class="my-2">
          <GitHubActivity {activity} />
        </li>
      {/each}
    </ul>
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</main>
<Footer />

<style>
  .loading {
    height: 12vh;
    width: 12vh;
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #3c3c3b;
    }
  }
</style>
