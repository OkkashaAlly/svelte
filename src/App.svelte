<script>
  import Button from "./components/Button.svelte";
  import Outer from "./components/Outer.svelte";

  let showPopup = false;

  const closePopup = event => {
    showPopup = false;
    console.log(event.detail);
  };
</script>

<main>
  <Outer on:greet={event => alert(`Hello ${event.detail}`)} />
  <Button on:click={() => alert("Clicked")} />
</main>

<style>
</style>
