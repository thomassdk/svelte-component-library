<script lang="ts">
  import { ThemeWrapper } from 'svelte-themer';
  import themes from './themes';
</script>

<ThemeWrapper {themes}>
  <main>
    <h1>Hello Project!</h1>
  </main>
</ThemeWrapper>

<style>
  :global(html) {
    background-color: var(--theme-colors-background);
    color: var(--theme-colors-text);
  }
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--theme-fonts-headings);
  }
  :global(h1) {
    font-size: var(--theme-fonts-size-xl4);
  }
  :global(p) {
    font-family: var(--theme-fonts-body);
  }

  main {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
