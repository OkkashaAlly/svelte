<script>
  import Greet from "./components/Greet.svelte";

  const name = "suma";

  const person = {
    name: "chatter",
    heroName: "blockchain dev",
  };
</script>

<main>
  <Greet name="Okkasha" heroName="ProFrontEnd Dev" />
  <Greet name="Brian" heroName="Desinger Dev" />
  <Greet {name} />
  <Greet {...person} />
</main>

<style>
</style>
