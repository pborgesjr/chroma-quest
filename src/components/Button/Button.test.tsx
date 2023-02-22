import React from 'react';
import {Button, ButtonProps} from './Button';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {styles} from './styles';

describe('Testing <Button /> component', () => {
  const defaultProps = {
    onPress: jest.fn(),
    testID: 'buttonTestID',
    textProps: {
      text: 'text',
      shadow: true,
      textTestID: 'textTestID',
    },
  };

  const wrapper = (props: Partial<ButtonProps> = {}) =>
    render(<Button {...defaultProps} {...props} />);

  it('Should fire onPress when button is pressed', () => {
    const {getByTestId} = wrapper();

    fireEvent.press(getByTestId(defaultProps.testID));

    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });
  it('Should render Button with border', () => {
    const {getByTestId} = wrapper({showBorder: true});

    expect(getByTestId(defaultProps.testID)).toHaveStyle(styles.border);
  });
  it('Should render Button without border', () => {
    const {getByTestId} = wrapper();

    expect(getByTestId(defaultProps.testID)).not.toHaveStyle(styles.border);
  });
  it('Should render all components', () => {
    const {getByTestId} = wrapper();

    expect(getByTestId(defaultProps.testID)).toBeTruthy();
    expect(getByTestId(defaultProps.textProps.textTestID)).toBeTruthy();
  });
});
