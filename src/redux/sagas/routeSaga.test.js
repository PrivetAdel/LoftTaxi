import {getRouteSaga} from './routeSaga';
import {recordSaga} from './recordSaga';
import {buildARoute} from '../actions';

jest.mock("../api", () => ({getRoute: jest.fn(() => ['address1', 'address2'])}));

describe("routeSaga", () => {
  it("get route from api", async () => {
    const dispatched = await recordSaga(
      getRouteSaga,
      buildARoute([[], [], []])
    )

    expect(dispatched).toEqual([
      {
        type: "BUILD_A_ROUTE"
      }
    ])
  })
});