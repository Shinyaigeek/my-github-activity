<script lang="ts">
  export let activity: {
    repository: string;
    url: string;
    number: number;
    title: string;
  };
</script>

<main>
  <div>
    <a href={activity.url} class="hover:underline text-blue text-lg" target="_blank"
      >{activity.repository}#{activity.number}: {activity.title}</a
    >
  </div>
</main>

<style>
</style>
