import { model, Schema } from 'mongoose'
import { arrayModle } from '../src/types/interfases'


const arraySchema = new Schema<arrayModle>({
  array: { type: [Number], required: true },
  isEqual: { type: Boolean, required: true },
  numberOfEqual: {type: Number, required: true}
});


export const arrayModel = model<arrayModle>("array", arraySchema);



