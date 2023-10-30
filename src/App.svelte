<script>
  const name = "Okkasha Ally";
  const profession = "<u>Software Engineer</u>";
  const paragraphID = "paragraph";
  const disabled = false;
</script>

<main>
  <h1>Hello {name}</h1>
  <div>{@html profession}</div>
  <p id={paragraphID}>Paragraph</p>
  <button {disabled}>Bind</button>
</main>

<style>
</style>
