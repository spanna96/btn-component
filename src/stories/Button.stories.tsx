import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  onClick: () => {
    alert("Clicked!");
  },
  children: <a>Click me</a>
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  color: "blue",
  disabled: true,
  children: "Disabled",
};

export const ButtonWithStandardProps = Template.bind({});
ButtonWithStandardProps.args = {
  color: "red",
  children: "Hover here",
  onMouseEnter: () => {
    alert("You are caught!");
  },
};
