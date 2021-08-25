<script>
  import GitHubActivity from "./components/GitHubActivity.svelte";
  import Header from "./components/Header.svelte";
  import Loading from "./components/Loading.svelte";

  const getGitHubActivities = (async () => {
    const response = await fetch("/api/getGitHubActivities");
    return await response.json();
  })();
</script>

<Header />
<main class="w-4/5 m-auto">
  {#await getGitHubActivities}
    <div class="flex justify-center loading mx-auto my-3">
      <Loading />
    </div>
    <div class="flex justify-center mx-auto my-3 text-2xl">
      <p>Loading...</p>
    </div>
  {:then activities}
    <ul>
      {#each activities as activity}
        <li>
          <GitHubActivity {activity} />
        </li>
      {/each}
    </ul>
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</main>

<style>
  .loading {
    height: 12vh;
    width: 12vh;
  }
</style>
