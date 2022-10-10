import UiButton from "./UiButton";

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton
}

const Template = (args) => <UiButton {...args} />;

const props = {
    text: 'Hello', 
    onClick: () => console.log('Button Click'), 
    disabled: false,
    theme: 'light',
    classes: ''
}

export const Light = {
  args: {
    ...props,
    theme: 'light'
  },
};

export const Dark = {
    args: {
      ...props,
      theme: 'dark'
    },
};

export const Disabled = {
    args: {
      ...props,
      disabled: true
    },
};