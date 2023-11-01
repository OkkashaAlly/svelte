<script>
  import { getContext } from "svelte";

  const person = getContext('person-details')
</script>

<h2>ChildC</h2>
<h2>Hello - {person.name}</h2>

