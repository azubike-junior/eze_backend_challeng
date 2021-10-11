import xlsx from "node-xlsx";
import buyRequestModel from "../database/models/buyRequest";
import sellRequestModel from "../database/models/sellRequest";
import logger from './logger'

const buyRequestWorksheet = xlsx.parse(`${__dirname}/buy clause.xlsx`);
const buyRequestData = buyRequestWorksheet[0].data; // buy request sheet data

const sellRequestWorksheet = xlsx.parse(`${__dirname}/sell request.xlsx`);
const sellRequestData = sellRequestWorksheet[0].data; // sell request sheet data

let buyRequest = []; // empty buyRequest array
let sellRequest = []; // empty sellRequest array
let condition = ["New", "A1", "A2", "B1", "B2", "C", "C/B", "C/D"];
let model = [
  "iPhone XS Max",
  "iPhone XS",
  "iPhone XR",
  "iPhone X",
  "iPhone 8 Plus",
  "iPhone 8",
  "iPhone 7 Plus",
  "iPhone 7",
  "iPhone 6S Plus",
  "iPhone 6S",
  "iPhone 6 Plus",
  "iPhone 6",
  "iPhone SE",
];

/**
 * printBuyRequest method.
 *
 * Method prints the content of the buyRequest array. An array of buyRequest entries.
 */
export const printBuyRequest = () => {
  for (
    let row = 0,
      column = 1,
      brandIndex = -1,
      conditionIndex = 0,
      sizeColumn = 0;
    column <= condition.length;
    row++
  ) {
    let buyRequestEntry = new Object(); // create object entries

    if (row == buyRequestData.length) {
      if (column == condition.length) break;

      row = 0;
      column++;
      brandIndex = -1;
      conditionIndex++;
    }

    if (typeof buyRequestData[row][column] == "undefined") {
      brandIndex++;
      continue;
    }

    buyRequestEntry.brand = model[brandIndex]; // assign brand to object's property 'brand'
    buyRequestEntry.condition = condition[conditionIndex]; // assign condition to object's property 'condition'
    buyRequestEntry.size = buyRequestData[row][sizeColumn]; // assign storage size to object's property 'size'
    buyRequestEntry.price = buyRequestData[row][column]; // assign value to object's property 'price'

    buyRequest.push(buyRequestEntry); // push each entry object into buyRequest array
  }

  buyRequestModel.insertMany(buyRequest, (errors, docs) => {
    logger.error(errors)
    logger.log(docs)
  });
};

export const printSellRequest = () => {
  for (
    let row = 0,
      column = 1,
      brandIndex = -1,
      conditionIndex = 0,
      sizeColumn = 0;
    column <= condition.length;
    row++
  ) {
    let sellRequestEntry = new Object(); // create object entries

    if (row == sellRequestData.length) {
      if (column == condition.length) break;

      row = 0;
      column++;
      brandIndex = -1;
      conditionIndex++;
    }

    if (typeof sellRequestData[row][column] == "undefined") {
      brandIndex++;
      continue;
    }

    sellRequestEntry.brand = model[brandIndex]; // assign brand to object's property 'brand'
    sellRequestEntry.condition = condition[conditionIndex]; // assign condition to object's property 'condition'
    sellRequestEntry.size = sellRequestData[row][sizeColumn]; // assign storage size to object's property 'size'
    sellRequestEntry.price = sellRequestData[row][column]; // assign value to object's property 'price'

    sellRequest.push(sellRequestEntry); // push each entry object into buyRequest array
  }

  sellRequestModel.insertMany(sellRequest, (errors, docs) => {
      logger.error(errors);
      logger.log(docs);
  });
};
