import {getRouteSaga} from './routeSaga';
import {recordSaga} from './recordSaga';
import {buildARoute} from '../actions';

jest.mock("../api", () => ({getRoute: jest.fn(() => [[30, 50], [31, 51], [32, 52]])}));

describe("routeSaga", () => {
  it("get route from api", async () => {
    const dispatched = await recordSaga(
      getRouteSaga,
      buildARoute([[30, 50], [31, 51], [32, 52]])
    )

    expect(dispatched).toEqual([
      {
        type: "BUILD_A_ROUTE",
        payload: [[30, 50], [31, 51], [32, 52]]
      }
    ])
  })
});