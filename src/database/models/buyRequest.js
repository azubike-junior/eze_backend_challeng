import mongoose from 'mongoose';
import {storageEnum, conditionEnum } from './enums'

const buyRequestSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    enum: [conditionEnum],
    required: true,
  },
  size: {
    type: String,
    enum: [storageEnum],
    required: true
  },
  price: {
    type: String,
    required: true
  },
});

export default mongoose.model('buyRequest', buyRequestSchema)