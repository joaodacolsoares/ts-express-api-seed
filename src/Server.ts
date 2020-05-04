import * as bodyParser from 'body-parser';
import { Controllers } from './controllers/export/Controllers';
import * as CoreServer from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

const SHOW_LOGS : boolean = true

class Server extends CoreServer.Server {

  private readonly SERVER_STARTED = 'The server started in port: ';
  
  constructor() {
    super(SHOW_LOGS);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  private setupControllers(): void {
    let controllers : Controllers = new Controllers()
    controllers.getControllers().forEach((controller) => {
      this.addControllers(controller);
    })
  }

  public start(port: number): void {
    this.app.get('/', (req, res) => { res.send(this.SERVER_STARTED + port); });
    this.app.listen(port, () => { Logger.Imp(this.SERVER_STARTED + port); });
  }
}

export default Server;