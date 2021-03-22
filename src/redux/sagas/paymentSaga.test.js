import {getCardSaga} from './paymentSaga';
import {recordSaga} from './recordSaga';
import {getCard} from '../actions';

jest.mock("../api", () => ({getCardData: jest.fn(() => ({cardName: "test", cardNumber: "1234 1234 1234 1234", expiryDate: "01/23", cvc: "111", token: true}))}));

describe("paymentSaga", () => {
  describe("#getCardSaga", () => {
    it("get card data from api", async () => {
      const dispatched = await recordSaga(
        getCardSaga,
        getCard(true)
      )
  
      expect(dispatched).toEqual([
        {
          type: "GET_CARD" 
        }
      ])
    })
  });
});