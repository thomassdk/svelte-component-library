<script lang="ts">
  export let icon = new URL(
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1waCIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im0yMjkuNyAyMTguM2wtNDMuMy00My4yYTkyLjIgOTIuMiAwIDEgMC0xMS4zIDExLjNsNDMuMiA0My4zYTguMiA4LjIgMCAwIDAgMTEuNCAwYTguMSA4LjEgMCAwIDAgMC0xMS40Wk00MCAxMTZhNzYgNzYgMCAxIDEgNzYgNzZhNzYuMSA3Ni4xIDAgMCAxLTc2LTc2WiI+PC9wYXRoPjwvc3ZnPg==',
  );
</script>

<div style:--search-icon-url="url({icon.toString()})">
  <input
    placeholder="Search..."
    type="text"
    id="search"
    name="search"
    required
  />
</div>

<style>
  div {
    width: fit-content;
    border-bottom: 1.5px solid black;
    border-radius: 1px;
    padding-block: 5px;
  }

  div::before {
    color: hsl(0 0% 46%);
    content: var(--search-icon-url);
    position: relative;
    top: 2.75px;
    padding: 5px;
  }

  input {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
  }

  input:focus {
    outline: none;
  }
</style>
