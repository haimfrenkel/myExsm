import mongoose from 'mongoose';
import mongodb from 'mongodb';

export class mongoDB {


    public initDB = async () => {
        let mongoose = await this.initMongoose()
        return true
    }

    private initMongoose() {
        return new Promise((resolve) => {

            let uri = 'mongodb://root:Ges112213@localhost:27017/admin';

            try {
                mongoose.connect(uri)

                const db = mongoose.connection;
                db.on('error', console.error.bind(console, 'connection error:'));
                db.once('open', function () {
                    console.log('mongodb connected');
                    resolve(mongoose);
                });
            } catch (error) {
                console.log(error);
            }

        })
    }
}
