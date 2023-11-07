<script>
  import ChildStyle from "./components/ChildStyle.svelte";
</script>

<main>
  <h3>global styles</h3>
  <h4>app component text</h4>
  <ChildStyle />
</main>

<style>
  h4 {
    color: green;
  }

  :global(h3) {
    color: red;
  }
</style>
