<script>
  const formValues = {
    name: "",
    bio: "",
    country: "",
    locations: [],
    remoteWork: false,
    skillSet: [],
    yearsOfExperience: "",
  };

  const handleSubmit = () => {
    console.log(formValues);
  };
</script>

<main>
  <div>
    <pre>
      {JSON.stringify(formValues, null, 2)}
    </pre>
  </div>

  <form on:submit|preventDefault={handleSubmit}>
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

    <div>
      <label for="remoteWork">RemoteWork</label>
      <input
        type="checkbox"
        id="remoteWork"
        bind:checked={formValues.remoteWork}
      />
    </div>

    <div>
      <h2>SkillSet</h2>
      <label for="html">Html</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        bind:group={formValues.skillSet}
      />
      <label for="css">Css</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        bind:group={formValues.skillSet}
      />
      <label for="javascript">Javascript</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        bind:group={formValues.skillSet}
      />
    </div>
    <div>
      <h2>yearsOfExperience</h2>
      <label for="0-3">0-3</label>
      <input
        type="radio"
        id="0-3"
        value="0-3"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="5-9">5-9</label>
      <input
        type="radio"
        id="5-9"
        value="5-9"
        bind:group={formValues.yearsOfExperience}
      />
    </div>

    <button>submit</button>
  </form>
</main>

<style>
  input + label {
    display: inline-flex;
  }
</style>
