<script>
  const name = "Okkasha Ally";
  const profession = "<u>Software Engineer</u>";
  const paragraphID = "paragraph";
  const disabled = false;
  const status = "success";
  const promoted = true;

  let number = 0;

  const names = [
    { first: "Okkasha", last: "Ally" },
    { first: "Ismail", last: "Mbarouk" },
  ];
  
</script>

<main>
  {#each names as name, index}
    <h2>{index +1 }: {name.first}  {name.last}</h2>
  {/each}
  
  
  <h2 class={status}>status</h2>
  <!-- <p class:promoted={isPromoted}>movie name</p> -->
  <p class:promoted>movie name</p>
  <h1>Hello {name}</h1>
  <div>{@html profession}</div>
  <p id={paragraphID}>Paragraph</p>
  <button {disabled}>Bind</button>

  {#if number === 0}
    <h1>The number is zero</h1>
  {:else if number > 0}
    <h1>The number is positive</h1>
  {:else if number < 0}
    <h1>The number is negative</h1>
  {:else}
    <h1>Is not a number</h1>
  {/if}
</main>

<style>
  .danger {
    color: red;
  }

  .success {
    color: green;
  }

  .promoted {
    font-style: italic;
  }
</style>
