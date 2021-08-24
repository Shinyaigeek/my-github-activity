<script>
  import GitHubActivity from "./components/GitHubActivity.svelte";
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
</style>
