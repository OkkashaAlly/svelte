<script>
  import { count } from "../store/store";
  const reset = () => count.set(0);
</script>

<button on:click={reset}>Reset</button>
