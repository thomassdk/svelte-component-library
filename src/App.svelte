<script lang="ts">
  import { ThemeWrapper } from 'svelte-themer';
  import themes from './themes';
  import ProgressBar from './ProgressBar.svelte';
  import ComboboxSelectOnly from './ComboboxSelectOnly.svelte';

  //TODO: Add this to the storybook somehow
  let min = 0;
  let max = 100;
  let value = 0;
  setInterval(() => {
    value = (value + 1) % 100;
  }, 50);
</script>

<ThemeWrapper {themes}>
  <main>
    <ProgressBar bind:min bind:max bind:value />
    <ComboboxSelectOnly
      label="Favorite Fruit"
      options={[
        'Apple',
        'Banana',
        'Blueberry',
        'Boysenberry',
        'Cherry',
        'Cranberry',
        'Durian',
        'Eggplant',
        'Fig',
        'Grape',
        'Guava',
        'Huckleberry',
      ]}
    />
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
    flex-direction: column;
  }
</style>
