<script context="module">
  let totalCount = 0;
  export const getTotalCount = () => totalCount;
</script>

<script>
  let count = 0;

  const increment = () => {
    count += 1;
    totalCount += 1;
  };
</script>

<h3>Count - {count}</h3>
<button on:click={increment}>increment</button>
