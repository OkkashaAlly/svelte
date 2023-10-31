<script>
  const formValues = {
    name: "",
    bio: "",
    country: "",
    locations: [],
  };
</script>

<main>
  <div>
    <pre>
      {JSON.stringify(formValues, null, 2)}
    </pre>
  </div>

  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={formValues.name} />
    </div>
    <div>
      <label for="bio">Bio</label>
      <textarea id="bio" bind:value={formValues.bio} />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" bind:value={formValues.country}>
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="tz">Tanzania</option>
      </select>
    </div>
    <div>
      <label for="locations">Locations</label>
      <select id="locations" bind:value={formValues.locations} multiple>
        <option value="">Select a locations</option>
        <option value="india">India</option>
        <option value="tz">Tanzania</option>
      </select>
    </div>
  </form>
</main>

<style>
</style>
