<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("greet", "Okkasha")}>Greet</button>
