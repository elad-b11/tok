import express from 'express';
//import consts from './consts.js';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';
//import Mongoose from 'mongoose';
import BodyParser from 'body-parser';
//import RootRouter from './Routes/rootRouter';
/*eslint-disable no-console */

let app = express();
let router = express.Router();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

router.use(BodyParser.json());

//router.use('/api', RootRouter());

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.use(router);

app.listen(3000, (err) => {
    if(err) {
        console.error(err);
        throw err;
    }
    console.log("Server is up");
});