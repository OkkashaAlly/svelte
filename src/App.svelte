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
  <Card>
    <div slot="header">Header</div>
    <div slot="content">Content</div>
    <!-- <div slot="footer">Footer</div> -->
  </Card>
</main>

<style>
</style>
