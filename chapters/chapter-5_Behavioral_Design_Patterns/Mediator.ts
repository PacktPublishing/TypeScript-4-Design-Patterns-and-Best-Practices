interface WorkerMediator {
  triggerEvent(sender: object, message: string): void;
}

class WorkerCenter implements WorkerMediator {
  constructor(
    protected workerA: BatchWorker,
    protected workerB: SingleTaskWorker
  ) {
    this.workerA.setMediator(this);
    this.workerB.setMediator(this);
  }

  public triggerEvent(sender: object, message: string): void {
    // Triggers stack overflow error
    // if (message.startsWith("single_job_completed")) {
    //   this.workerB.performWork();
    // }

    if (message.startsWith("batch_job_completed")) {
      this.workerB.performWork();
    }
  }
}

abstract class Workhorse {
  protected mediator: WorkerMediator | undefined;
  constructor(mediator?: WorkerMediator) {
    this.mediator = mediator;
  }

  setMediator(mediator: WorkerMediator): void {
    this.mediator = mediator;
  }
}

class BatchWorker extends Workhorse {
  public performWork(): void {
    console.log("Performing work in BatchWorker");
    if (this.mediator) {
      this.mediator.triggerEvent(this, "batch_job_completed");
    }
  }

  public finalize(): void {
    console.log("Performing final work in BatchWorker");
    if (this.mediator) {
      this.mediator.triggerEvent(this, "final_job_completed");
    }
  }
}

class SingleTaskWorker extends Workhorse {
  public performWork(): void {
    console.log("Performing work in SingleTaskWorker");
    if (this.mediator) {
      this.mediator.triggerEvent(this, "single_job_completed");
    }
  }
}

const workerA = new BatchWorker();
const workerB = new SingleTaskWorker();
const mediator = new WorkerCenter(workerA, workerB);

workerA.performWork();
