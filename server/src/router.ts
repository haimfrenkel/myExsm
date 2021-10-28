import express from 'express';
import { Create, getAll } from './controller';

const router = express.Router();


router.post('/create',(req, res)=>{ 
    const add = Create(req.body["arrey"], req.body["isEqual"], req.body["numberOfEqual"], res)
});

router.get('/getAll',(req, res)=>{
    const add = getAll(res)
});

export = router;