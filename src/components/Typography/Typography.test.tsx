import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {Typography, TypographyProps} from './Typography';
import {styles} from './styles';

describe('Testing <Typography /> component', () => {
  const defaultProps = {
    text: 'text',
    containerTestID: 'containerTestID',
    textTestID: 'textTestID',
  };

  const wrapper = (props: Partial<TypographyProps> = {}) =>
    render(<Typography {...defaultProps} {...props} />);

  it('Should render all components inside', () => {
    const {getByTestId} = wrapper();

    expect(getByTestId(defaultProps.containerTestID)).toBeTruthy();
    expect(getByTestId(defaultProps.textTestID)).toBeTruthy();
  });
  it('Should render text correctly', () => {
    const {getByTestId} = wrapper();

    expect(getByTestId(defaultProps.textTestID)).toHaveTextContent(
      defaultProps.text,
    );
  });
  it('Should render with shadow styling', () => {
    const {getByTestId} = wrapper({shadow: true});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(styles.shadow);
  });
  it('Should render without shadow styling', () => {
    const {getByTestId} = wrapper();

    expect(getByTestId(defaultProps.textTestID)).not.toHaveStyle(styles.shadow);
  });
  it('Should render with variation=title', () => {
    const {getByTestId} = wrapper({variation: 'title'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(styles.title);
  });
  it('Should render with variation=body', () => {
    const {getByTestId} = wrapper({variation: 'body'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(styles.body);
  });
  it('Should render with variation=heading', () => {
    const {getByTestId} = wrapper({variation: 'heading'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(styles.heading);
  });
  it('Should render with variation=description', () => {
    const {getByTestId} = wrapper({variation: 'description'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(
      styles.description,
    );
  });
  it('Should render with variation=smallDescription', () => {
    const {getByTestId} = wrapper({variation: 'smallDescription'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(
      styles.smallDescription,
    );
  });
  it('Should render with theme=dark', () => {
    const {getByTestId} = wrapper({theme: 'dark'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(styles.dark);
  });
  it('Should render with theme=light', () => {
    const {getByTestId} = wrapper({theme: 'light'});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(styles.light);
  });
  it('Should render with custom styles for the container', () => {
    const customContainerStyles = {
      backgroundColor: 'red',
    };

    const {getByTestId} = wrapper({containerStyle: customContainerStyles});

    expect(getByTestId(defaultProps.containerTestID)).toHaveStyle(
      customContainerStyles,
    );
  });
  it('Should render with custom styles for text', () => {
    const customTextStyles = {
      color: 'red',
    };

    const {getByTestId} = wrapper({textStyle: customTextStyles});

    expect(getByTestId(defaultProps.textTestID)).toHaveStyle(customTextStyles);
  });
});
