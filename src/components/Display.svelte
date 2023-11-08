<script>
  import { customCount } from "../store/store";
</script>

<h3>Custom Count is - {$customCount}</h3>

<button on:click={() => customCount.increment()}>Increment</button>
<button on:click={() => customCount.increment(5)}>Increment by 5</button>
<button on:click={() => customCount.decrement()}>Decrement</button>
<button on:click={() => customCount.decrement(5)}>Decrement by 5</button>

<button on:click={customCount.reset}>Reset</button>
