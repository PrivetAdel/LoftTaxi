import "@testing-library/jest-dom";

window.URL.createObjectURL = function() {};

jest.mock('mapbox-gl/dist/mapbox-gl-csp-worker', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn()
    })),
    NavigationControl: jest.fn()
}));