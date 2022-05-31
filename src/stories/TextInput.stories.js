import TextInput from '../TextInput.svelte';

export default {
  component: TextInput,
  title: 'Text Input',
  argTypes: {
  },
};

const Template = ({ ...args }) => ({
  Component: TextInput,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
