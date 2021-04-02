import "@testing-library/jest-dom";
import "mutationobserver-shim";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn(),
      getLayer: jest.fn()
    })),
    NavigationControl: jest.fn()
}));
