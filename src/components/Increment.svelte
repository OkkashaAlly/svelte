<script>
  import { count } from "../store/store";
  const increment = () => count.update(value => (value += 1));
</script>

<button on:click={increment}>Increment</button>
