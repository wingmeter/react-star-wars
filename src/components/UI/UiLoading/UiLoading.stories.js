import UiLoading from "./UiLoading";

export default {
    title: 'Ui-Kit/UiLoading',
    component: UiLoading
}

const Template = (args) => <UiLoading {...args} />;

const props = { 
    theme: 'black',
    isShadow: false,
    classes: ''
}

export const Black = {
    args: {
    ...props,
    theme: 'black'
  },
};

export const White = {
    args: {
      ...props,
      theme: 'white',
      isShadow: true  
    },
};

export const Blue = {
    args: {
      ...props,
      theme: 'blue'
    },
};