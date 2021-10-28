import { model, Schema } from 'mongoose'



const arraySchema = new Schema<array>({
  array: { type: [Number], required: true },
  isEqual: { type: Boolean, required: true },
});


export const arrayModel = model<array>("array", arraySchema);


interface array {
  array: any,
  isEqual: boolean
}

