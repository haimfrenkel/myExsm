import { mongoDB } from './mongoConnectiom'
export let mongoConn: mongoDB

export let mongodb: mongoDB

export const mainInit = () => {
    console.log(' new db');
    mongoConn = new mongoDB();

    mongoConn.initDB().then(() => {
        console.log('DB connected');

       
    })

}




