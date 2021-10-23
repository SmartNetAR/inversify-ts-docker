import ILogger from "./ILogger";
import container from "./inversify.config";

class LoggerUseCase {
    private logger: ILogger

    constructor() 
    {
        this.logger = container.get<ILogger>("ILogger");
    }

    handle(message: string)
    {
        this.logger.log(message)
    }

}

export default LoggerUseCase;
