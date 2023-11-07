<script>
  const names = [
    { firstName: "okkasha", lastName: "ally" },
    { firstName: "ismail", lastName: "mbarouk" },
    { firstName: "ally", lastName: "mbwana" },
  ];
</script>

<main>
  {#each names as name (name.firstName)}
    <slot name="hero" firstName={name.firstName} lastName={name.lastName} />
  {/each}
</main>
