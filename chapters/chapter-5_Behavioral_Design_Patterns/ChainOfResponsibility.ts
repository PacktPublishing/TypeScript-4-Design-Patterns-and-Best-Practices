export interface IRequest {
  getOrigin(): string;
  getParams(): Map<string, string>;
}

export class HTTPRequest implements IRequest {
  constructor(private origin: string, private params: Map<string, string>) {}
  getOrigin(): string {
    return this.origin;
  }
  getParams(): Map<string, string> {
    return this.params;
  }
}

export abstract class RequestHandler {
  constructor(protected next: RequestHandler | null) {}

  handleRequest(request: IRequest) {
    if (this.next !== null) {
      this.next.handleRequest(request);
    }
  }
}
export class LogRequestHandler extends RequestHandler {
  handleRequest(request: IRequest) {
    console.log(
      `Request with origin: ${request.getOrigin()} handled by LogRequestHandler`
    );
    if (this.next !== null) {
      this.next.handleRequest(request);
    }
  }
}
export class EmailRequestHandler extends RequestHandler {
  handleRequest(request: IRequest) {
    console.log(
      `Request with origin: ${request.getOrigin()} handled by EmailRequestHandler`
    );
    if (this.next !== null) {
      this.next.handleRequest(request);
    }
  }
}
const req = new HTTPRequest("localhost", new Map().set("q", "searchTerm"));
new LogRequestHandler(new EmailRequestHandler(null)).handleRequest(req); //
// Request with origin: localhost handled by LogRequestHandler
// Request with origin: localhost handled by EmailRequestHandler
