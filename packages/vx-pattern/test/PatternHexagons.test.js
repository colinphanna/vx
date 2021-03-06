import { PatternHexagons } from '../src';

describe('<PatternHexagons />', () => {
  beforeEach(() => {
    global.console.error = jest.fn();
  });

  test('it should be defined', () => {
    expect(PatternHexagons).toBeDefined();
  });

  test('it should require an id prop', () => {
    const wrapper = mount(<PatternHexagons width={4} height={4} />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toEqual(
      'Warning: Failed prop type: The prop `id` is marked as required in `PatternHexagons`, but its value is `undefined`.\n    in PatternHexagons'
    );
  });

  test('it should require a width prop', () => {
    const wrapper = mount(<PatternHexagons id="test" height={4} />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toEqual(
      'Warning: Failed prop type: The prop `width` is marked as required in `PatternHexagons`, but its value is `undefined`.\n    in PatternHexagons'
    );
  });

  test('it should require a height prop', () => {
    const wrapper = mount(<PatternHexagons id="test" width={4} />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toEqual(
      'Warning: Failed prop type: The prop `height` is marked as required in `PatternHexagons`, but its value is `undefined`.\n    in PatternHexagons'
    );
  });
});
