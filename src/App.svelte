<script>
  import NameList from "./components/NameList.svelte";

  let showPopup = false;

  const closePopup = event => {
    showPopup = false;
    console.log(event.detail);
  };
</script>

<main>
  <NameList>
    <h3 slot="hero" let:firstName let:lastName>{firstName} {lastName}</h3>
  </NameList>
  <NameList>
    <h3 slot="hero" let:firstName>{firstName}</h3>
  </NameList>
</main>

<style>
</style>
