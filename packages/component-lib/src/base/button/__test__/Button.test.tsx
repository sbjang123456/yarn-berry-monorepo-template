import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button Component', () => {
  let ButtonComponent: React.ReactElement;
  let onClick: jest.Mock<any, any>;

  beforeEach(() => {
    onClick = jest.fn();
    ButtonComponent = (
      <Button
        label="ButtonTest"
        size="medium"
        backgroundColor="red"
        onClick={onClick}
      />
    );
  });

  it('renders', () => {
    const component = renderer.create(ButtonComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('attribute test', () => {
    const setup = () => render(ButtonComponent);

    it('has attribute className', () => {
      setup();
      const button = screen.getByText('ButtonTest');
      expect(button.classList.contains('medium')).toStrictEqual(true);
    });

    it('button click', () => {
      setup();
      const button = screen.getByText('ButtonTest');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
