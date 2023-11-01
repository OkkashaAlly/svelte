<script>
  let firstName = "OKkasha";
  let lastName = "Ally";

  $: fullName = `${firstName} ${lastName}`;
</script>

<main>
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
