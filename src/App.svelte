<script>
  import ChildStyle from "./components/ChildStyle.svelte";
  import PostList from "./components/PostList.svelte";
</script>

<main>
  <PostList/>
</main>

<style>

  :global(h3) {
    color: red;
  }
</style>
