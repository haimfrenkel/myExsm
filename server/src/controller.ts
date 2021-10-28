import { Request, Response, NextFunction } from 'express';
import { Mongoose } from 'mongoose';
import { arrayModel } from './schema'
import { Cheking } from './serverCollectiom'



export async function Create(array: number[], isEqual: boolean, numberOfEqual: number,  res: any) {

    let chekcing = new Cheking()
    isEqual = await chekcing.checkArray(array)
    numberOfEqual = await chekcing.numberOfEqual
    const doc = new arrayModel({
        array: array,
        isEqual: isEqual,
        numberOfEqual: numberOfEqual
    });

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
        return res.status(200).send(list);
    })
}




