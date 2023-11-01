<script>
  import { setContext } from "svelte";
  import ChildA from "./components/ChildA.svelte";

  
  const person = {
    name: "Okkasha",
    heroName: "ProFrontEnd Dev",
  };
  
  setContext("person-details", person)
</script>

<main>
  <h1>App component</h1>
  <h2>Hello - {person.name}</h2>
  <ChildA/>
</main>

<style>
</style>
