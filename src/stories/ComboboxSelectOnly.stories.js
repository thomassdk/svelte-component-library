import ComboboxSelectOnly from '../ComboboxSelectOnly.svelte';

export default {
  component: ComboboxSelectOnly,
  title: 'Combobox SelectOnly',
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = ({ ...args }) => ({
  Component: ComboboxSelectOnly,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Favorite Fruit',
  options: [
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
  ]
};
