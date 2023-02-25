export const mockTestNavigationProps = (props?: Object): any => ({
  navigation: {
    navigate: jest.fn(),
    addListener: jest.fn(),
    setOptions: jest.fn(),
    dispatch: jest.fn(),
    replace: jest.fn(),
    push: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    pop: jest.fn(),
  },
  onRequestSetLoaderAction: jest.fn(),
  ...props,
});
