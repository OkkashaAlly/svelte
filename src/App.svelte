<script>
  let count = 0;

  const handleClick = (event, size) => {
    console.log("🚀 ~ file: App.svelte:5 ~ handleClick ~ event:", event);
    count += size;
  };
</script>

<main>
  <button on:click={() => (count += 1)}>Count {count}</button>
  <button on:click={event => handleClick(event, 5)}>Count {count}</button>
  <button on:click={event => handleClick(event, 10)}>Count {count}</button>
</main>

<style>
</style>
