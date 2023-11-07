<!-- <main class="card"><slot/></main> -->
<main class="card">
  <div class="card-header">
    <slot name="header" />
  </div>
  <div class="card-content">
    <slot name="content" />
  </div>
  {#if $$slots.footer}
    <div class="card-footer">
      <hr />
      <slot name="footer" />
    </div>
  {/if}
</main>

<style>
  .card {
    border-radius: 20px;
    box-shadow: black 2px 5px 10px;
    widows: 200px;
    background-color: rgb(90, 6, 6);
  }
</style>
