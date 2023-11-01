<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<main>
  <h2>Popup content</h2>
  <button on:click={() => dispatch("close", { from: "popup" })}
    >close Popup</button
  >
</main>
