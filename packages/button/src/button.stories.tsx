import React from 'react';
import { Button } from '.';

export default {
  title: 'AgDS/Button',
};

export const Basic = <Button>Click me</Button>;

export const Disabled = () => <Button disabled>Disabled</Button>;

export const Secondary = () => <Button variant={'secondary'}>Secondary</Button>;

export const Tertiary = () => <Button variant={'tertiary'}>Tertiary</Button>;

export const Block = () => (
  <>
    <Button block>Primary + Block</Button>
    <hr />
    <Button block variant={'secondary'}>
      Secondary + Block
    </Button>
    <hr />
    <Button variant={'tertiary'}>Tertiary + Block</Button>
  </>
);

export const Dark = () => (
  <>
    <Button colorScheme={'dark'}>Primary + Dark</Button>
    <hr />
    <Button colorScheme={'dark'} variant={'secondary'}>
      Secondary + Dark
    </Button>
    <hr />
    <Button colorScheme={'dark'} variant={'tertiary'}>
      Tertiary + Dark
    </Button>
  </>
);

export const HeightTest = () => (
  <div className="height-test">
    <label className="no-a11y-test" htmlFor="select-height-test">
      What option?
    </label>
    <select id="select-height-test" className="au-select">
      <option value="">Please select</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label className="no-a11y-test" htmlFor="textinput-height-test">
      A text input field
    </label>
    <input
      className="au-text-input"
      name="textinput-height-test"
      id="textinput-height-test"
      type="text"
      value="ABCZ abcjg liI1 12340"
    />
    <Button disabled>Disabled</Button>
    <Button variant={'secondary'}>Secondary</Button>
    <Button variant={'tertiary'}>Tertiary</Button>
  </div>
);
