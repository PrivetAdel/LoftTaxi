import {getAddressListSaga} from './addressListSaga';
import {recordSaga} from './recordSaga';
import {getAddresses} from '../actions';

jest.mock("../api", () => ({getAddressList: jest.fn(() => ['address1', 'address2', 'address3'])}));

describe("addressListSaga", () => {
  it("get address list from api", async () => {
    const dispatched = await recordSaga(
      getAddressListSaga,
      getAddresses(['address1', 'address2', 'address3'])
    )

    expect(dispatched).toEqual([
      {
        type: 'GET_ADDRESS_LIST' 
      }
    ])
  })
});