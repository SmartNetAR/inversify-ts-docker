import express = require("express");
import {controller, httpGet, BaseHttpController} from 'inversify-express-utils';

@controller('/')
class IndexHandler extends BaseHttpController
{
    @httpGet('/')
	public index(req: express.Request, res: express.Response, next: express.NextFunction) 
    {
        res.status(200).json({msg: "Welcome to Minimal TS - Inversify - Debug - Node project"});
    }
}

export default IndexHandler;