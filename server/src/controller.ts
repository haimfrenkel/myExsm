import { Request, Response, NextFunction } from 'express';
import { Mongoose } from 'mongoose';
import { arrayModel } from './schema'
import { Cheking } from './serverCollectiom'

export async function Create(array: number[], isEqual: boolean,  res: any) {
    console.log(array);
    let chekcing = new Cheking()

    isEqual = await chekcing.checkArray(array)
    const doc = new arrayModel({
        array: array,
        isEqual: isEqual,
    });
    console.log(doc);

    doc.save(function (err: any, newDoc: any) {
        if (err) {
            var msg = "no info";

            console.log(err);

        }
        res.status(201).send(newDoc);
    })
}
export function getAll(res: any) {
    arrayModel.find(function (err, list) {
        if (err) {
            return res.status(500).send({})
        }
        console.log(list)
    
        return res.status(200).send(list);
    })
}




