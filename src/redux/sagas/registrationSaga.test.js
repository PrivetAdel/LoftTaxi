import {registrationSaga} from './registrationSaga';
import {recordSaga} from './recordSaga';
import {getAuth} from '../actions';

jest.mock("../api", () => ({postRegister: jest.fn(() => true)}));

describe("registrationSaga", () => {
  it("auht through api", async () => {
    const dispatched = await recordSaga(
      registrationSaga,
      getAuth(true)
    )

    expect(dispatched).toEqual([
      {
        type: "GET_AUTH" 
      }
    ])
  })
});