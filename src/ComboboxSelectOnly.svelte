<script type="ts">
  // https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html
  import { onMount } from 'svelte';

  export let label = 'Input Selector';
  $: labelId = label.split(' ')[0].toLowerCase();
  $: ariaLabel = `${labelId}-combo-label`;
  $: ariaId = `combo-${labelId}`;

  export let options: string[];

  let open = false;
  let selectedIndex = 0;
</script>

<div class="container">
  <label id={ariaLabel} class="combo-label">{label}</label>
  <div class="combo" class:open on:click={() => (open = !open)}>
    <div
      aria-controls="listbox1"
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-labelledby={ariaLabel}
      id={ariaId}
      class="combo-input"
      role="combobox"
      tabindex="0"
      aria-activedescendant={open && ariaId + '-' + selectedIndex}
    >
      {options[selectedIndex]}
    </div>
    <div
      class="combo-menu"
      role="listbox"
      id="listbox1"
      aria-labelledby={ariaLabel}
      tabindex="-1"
    >
      {#each options as option, i}
        <div
          role="option"
          id="{ariaLabel}-{i}"
          class="combo-option"
          class:option-current={i == selectedIndex}
          on:click={() => (selectedIndex = i)}
          aria-selected={i == selectedIndex}
        >
          {option}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    min-width: 200px;
  }

  .combo *,
  .combo *::before,
  .combo *::after {
    box-sizing: border-box;
  }

  .combo {
    display: block;
    margin-bottom: 1.5em;
    max-width: 400px;
    position: relative;
  }

  .combo::after {
    border-bottom: 2px solid rgb(0 0 0 / 75%);
    border-right: 2px solid rgb(0 0 0 / 75%);
    content: '';
    display: block;
    height: 12px;
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translate(0, -65%) rotate(45deg);
    width: 12px;
  }

  .combo-input {
    background-color: #f5f5f5;
    border: 2px solid rgb(0 0 0 / 75%);
    border-radius: 4px;
    display: block;
    font-size: 1em;
    min-height: calc(1.4em + 26px);
    padding: 12px 16px 14px;
    text-align: left;
    width: 100%;
  }

  .open .combo-input {
    border-radius: 4px 4px 0 0;
  }

  .combo-input:focus {
    border-color: #0067b8;
    box-shadow: 0 0 4px 2px #0067b8;
    outline: 4px solid transparent;
  }

  label {
    display: block;
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 0.25em;
  }

  .combo-menu {
    background-color: #f5f5f5;
    border: 1px solid rgb(0 0 0 / 75%);
    border-radius: 0 0 4px 4px;
    display: none;
    max-height: 300px;
    overflow-y: scroll;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 100;
  }

  .open .combo-menu {
    display: block;
  }

  .combo-option {
    padding: 10px 12px 12px;
  }

  .combo-option:hover {
    background-color: rgb(0 0 0 / 10%);
  }

  .combo-option.option-current {
    outline: 3px solid #0067b8;
    outline-offset: -3px;
  }

  .combo-option[aria-selected='true'] {
    padding-right: 30px;
    position: relative;
  }

  .combo-option[aria-selected='true']::after {
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    content: '';
    height: 16px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0, -50%) rotate(45deg);
    width: 8px;
  }
</style>
