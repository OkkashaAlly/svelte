<script>
  const name = "Okkasha Ally";
  const profession = "<u>Software Engineer</u>";
  const paragraphID = "paragraph";
  const disabled = false;
  const status = "success";
  const promoted = true;
</script>

<main>
  <h2 class={status}>status</h2>
  <!-- <p class:promoted={isPromoted}>movie name</p> -->
  <p class:promoted>movie name</p>
  <h1>Hello {name}</h1>
  <div>{@html profession}</div>
  <p id={paragraphID}>Paragraph</p>
  <button {disabled}>Bind</button>
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
