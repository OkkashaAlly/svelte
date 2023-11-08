<script>
  import Decrement from "./components/Decrement.svelte";
  import Display from "./components/Display.svelte";
  import Increment from "./components/Increment.svelte";
  import Reset from "./components/Reset.svelte";
</script>

<main>
  <Display />
  <Increment />
  <Decrement />
  <Reset />
</main>

<style>
  :global(h3) {
    color: red;
  }
</style>
