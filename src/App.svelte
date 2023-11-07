<script>
  import Button from "./components/Button.svelte";
  import Card from "./components/Card.svelte";
  import Outer from "./components/Outer.svelte";

  let showPopup = false;

  const closePopup = event => {
    showPopup = false;
    console.log(event.detail);
  };
</script>

<main>
  <Card>Hello</Card>
  <Card><h2>Hello</h2></Card>
  <Card/>
</main>

<style>
</style>
