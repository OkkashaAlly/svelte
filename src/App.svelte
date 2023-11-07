<script>
  import TabA from "./components/TabA.svelte";
  import TabB from "./components/TabB.svelte";
  import TabC from "./components/TabC.svelte";

  let activeTab = TabA;
</script>

<main>
  <div class="">
    <button on:click={() => (activeTab = TabA)}>TabA</button>
    <button on:click={() => (activeTab = TabB)}>TabB</button>
    <button on:click={() => (activeTab = TabC)}>TabC</button>
  </div>

  <svelte:component this={activeTab} />

  <!-- {#if activeTab === "TabA"}
    <TabA />
  {/if}
  {#if activeTab === "TabB"}
    <TabB />
  {/if}
  {#if activeTab === "TabC"}
    <TabC />
  {/if} -->
</main>

<style>
  :global(h3) {
    color: red;
  }
</style>
