import buyRequestModel from "../../database/models/buyRequest";
import sellRequestModel from "../../database/models/sellRequest";

export const fetchRequests = async (req, res) => {
  try {
    const { buyRequest, sellRequest } = req.query;
    const { page = 1, limit = 10 } = req.query;

    if (buyRequest !== "buy_request" && sellRequest !== "sell_request") {
      return res
        .status(400)
        .send(
          "you need to insert either 'buy_request' or 'sell_request' into the query for data to be retrieved"
        );
    }
    if (buyRequest === "buy_request") {
      const buyRequestData = await buyRequestModel
        .find()
        .limit(limit * 1)
        .skip(page - 1);
      const count = await buyRequestModel.countDocuments();
      return res.send({
        type: "buy_request",
        data: buyRequestData,
        pages: Math.ceil(count / limit),
        currentPage: page,
      });
    }
    if (sellRequest === "sell_request") {
      const sellRequestData = await sellRequestModel
        .find()
        .find()
        .limit(limit * 1)
        .skip(page - 1);
      const count = await buyRequestModel.countDocuments();
      return res.send({
        type: "sell_request",
        data: sellRequestData,
        pages: Math.ceil(count / limit),
        currentPage: page,
      });
    }
  } catch (e) {
    return res.send(e);
  }
};
