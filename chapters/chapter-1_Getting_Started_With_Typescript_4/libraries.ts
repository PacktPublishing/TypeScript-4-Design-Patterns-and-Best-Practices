import "reflect-metadata";
import { Container, injectable, inject } from "inversify";

@injectable()
class LoggerService {
  public logRequest() {
    console.log("call API Request");
  }
}

@injectable()
class ApiService {
  private logger: LoggerService;

  public constructor(logger: LoggerService) {
    this.logger = logger;
  }

  public request() {
    this.logger.logRequest();
    return Promise.resolve([]);
  }
}

var container = new Container();
container.bind<LoggerService>(LoggerService).to(LoggerService);
container.bind<ApiService>(ApiService).to(ApiService);

const apiService = container.resolve(ApiService);
apiService.request();
