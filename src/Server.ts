import express, { Application } from 'express';

export default class Server {
  private app: Application;
  constructor() {
    this.app = express();
    this.configuration();
  }

  private configuration(): void {
    this.app.use(express.json());
  }

  public start(): void {
    this.app.listen(8080, () => console.log('Listening on port 8080'));
  }
}
