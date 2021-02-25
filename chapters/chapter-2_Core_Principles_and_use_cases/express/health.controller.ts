import { injectable, inject } from "inversify";
import {
  controller,
  httpGet,
  BaseHttpController,
} from "inversify-express-utils";

@controller("/health")
export class HealthController extends BaseHttpController {
  @httpGet("/")
  public async get() {
    return this.ok("All good!");
  }
}
