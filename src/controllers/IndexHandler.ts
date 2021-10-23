import express = require("express");
import {controller, httpGet, BaseHttpController} from 'inversify-express-utils';
import LoggerUseCase from "../LoggerUseCase";

@controller('/')
class IndexHandler extends BaseHttpController
{
    @httpGet('/')
	public index(req: express.Request, res: express.Response, next: express.NextFunction) 
    {
        const useCase = new LoggerUseCase();
        useCase.handle("log /");
        res.status(200).json({msg: "Welcome to Minimal TS - Inversify - Debug - Node project"});
    }
}

export default IndexHandler;
