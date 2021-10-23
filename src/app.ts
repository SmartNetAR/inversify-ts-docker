import 'reflect-metadata';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import './controllers/IndexHandler';
import container from './inversify.config';

class App
{
    public port?: number;
    private server: InversifyExpressServer;
    private app: express.Application;

    constructor()
    {
        this.port = 8080;
        this.server = new InversifyExpressServer(container);
    }

    public initConfig()
    {
        this.server.setConfig((app: express.Application) =>
        {
            app.use(express.json({
                limit: '5mb'
            }));
        });
    }

    public build()
    {
        this.app = this.server.build();
    }

    public listen()
    {
        this.app.listen(this.port, () =>
        {
            console.log(`listening on port ${this.port}`);
        });
    }
}

export default App;