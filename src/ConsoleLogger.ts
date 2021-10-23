
import { injectable } from 'inversify';
import ILogger from './ILogger'

@injectable()
class ConsoleLogger implements ILogger {

    log(message: string): void {
        console.log(message);
    }
}

export default ConsoleLogger;
    