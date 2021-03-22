import {authSaga} from './authorizationSaga';
import {recordSaga} from './recordSaga';
import {getAuth} from '../actions';

jest.mock("../api", () => ({serverAuth: jest.fn(() => ({email: "testEmail", password: "testPassword"}))}));

describe("authorizationSaga", () => {
  it("auth through api", async () => {
    const dispatched = await recordSaga(
      authSaga,
      getAuth(true)
    )

    expect(dispatched).toEqual([
      {
        type: "GET_AUTH" 
      }
    ])
  })
});