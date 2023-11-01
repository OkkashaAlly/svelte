<script>
  let firstName = "OKkasha";
  let lastName = "Ally";

  $: fullName = `${firstName} ${lastName}`;

  // $: console.log(`FullName is ${firstName} ${lastName}`)
  // $: {
  //   const greet = `FullName is ${firstName} ${lastName}`;
  //   console.log(greet);
  // }

  let volume = 0;

  $: if (volume < 0) {
    volume = 0;
    alert("Cant go lower 0");
  } else if (volume > 20) {
    volume = 20;
    alert("cant go higher than 20");
  }
</script>

<main>
  <h2>Current volume {volume}</h2>
  <button on:click={() => (volume += 2)}>Increase</button>
  <button on:click={() => (volume -= 2)}>Decrease</button>

  <button
    on:click={() => {
      firstName = "Okshanaby";
    }}>Change name</button
  >
  <h2>
    {firstName}{lastName}
  </h2>
  <h2>
    {fullName}
  </h2>
</main>

<style>
</style>
