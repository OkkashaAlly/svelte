<script>
  import Popup from "./components/Popup.svelte";

  let showPopup = false;

  const closePopup = event => {
    showPopup = false;
    console.log(event.detail);
  };
</script>

<main>
  <button on:click={() => (showPopup = true)}>show Popup</button>
  {#if showPopup}
    <Popup on:close={closePopup} />
  {/if}
</main>

<style>
</style>
