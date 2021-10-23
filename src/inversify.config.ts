import { Container } from "inversify";
import ILogger from "./ILogger";
import ConsoleLogger from "./ConsoleLogger";

const container = new Container();

container.bind<ILogger>("ILogger").to(ConsoleLogger);

export default container;