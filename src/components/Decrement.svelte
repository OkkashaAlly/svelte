<script>
  import { count } from "../store/store";
  const Decrement = () => count.update(value => (value -= 1));
</script>

<button on:click={Decrement}>Decrement</button>
