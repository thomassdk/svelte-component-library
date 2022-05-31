import ProgressBar from '../ProgressBar.svelte';

export default {
  component: ProgressBar,
  title: 'ProgressBar',
  argTypes: {
    min: { type: 'number' },
    max: { type: 'number' },
    value: { type: 'number' },
    color: { control: 'color' }
  },
};

const Template = ({ ...args }) => ({
  Component: ProgressBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  color: 'hsl(86, 100%, 40%)',
};
