<script lang="ts">
  // https://www.w3.org/WAI/ARIA/apg/patterns/meter/
  // https://carbondesignsystem.com/components/progress-bar/usage/
  // https://usersnap.com/blog/progress-indicators/

  import { Status, Label } from './interfaces';
  import { clamp } from './utils';

  export let min = 0;
  export let max = 100;
  export let value = 25;
  export let color = 'hsl(86, 100%, 40%)';

  export let status = Status.Active;
  export let label = Label.DataProcessing;

  $: clampedValue = clamp(value, min, max);
  $: width = `${(100 * (clampedValue - min)) / (max - min)}%`;
</script>

<div
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin={min}
  aria-valuemax={max}
  aria-describedby={Status[status]}
  aria-labelledby={Label[label]}
  style:color
>
  <svg
    style:width
    height="100"
    class="fill"
    aria-hidden="true"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="100%" height="100%" fill="currentcolor" />
  </svg>
</div>

<style>
  div {
    padding: 2px;
    width: 200px;
    height: 40px;
    border: 2px solid black;
    border-radius: 5px;
  }

  .fill {
    height: 100%;
    box-sizing: border-box;
    border: 2px solid black;
    border-radius: 3px;
    background-color: black;
  }
</style>
