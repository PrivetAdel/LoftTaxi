import {getCardSaga, postCardSaga} from './paymentSaga';
import {recordSaga} from './recordSaga';
import {getCard, postCard} from '../actions';

jest.mock("../api", () => ({
  getCardData: jest.fn(() => ({cardName: "test", cardNumber: "1234 1234 1234 1234", expiryDate: "01/23", cvc: "111", token: true
  })),
  saveCardData: jest.fn(() => true)
}));

describe("paymentSaga", () => {
  describe("#postCardSaga", () => {
    it("posted card data to api", async () => {
      const dispatched = await recordSaga(
        postCardSaga,
        postCard(true)
      )
  
      expect(dispatched).toEqual([
        {
          type: "POST_CARD",
          payload: true 
        }
      ])
    })
  });

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