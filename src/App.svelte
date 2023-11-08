<script>
  import Counter, { getTotalCount } from "./components/Counter.svelte";

  const alertTotalCount = () => alert(getTotalCount());
</script>

<main>
  <button on:click={alertTotalCount}>alert total count</button>
  <Counter />
  <Counter />
  <Counter />
</main>

<style>
  :global(h3) {
    color: red;
  }
</style>
