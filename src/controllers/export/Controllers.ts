import * as controllersFiles from '../index';

let controllers: any[] = [];

class Controllers {

  public getControllers(): any[] {
    if (controllers.length != 0) return controllers

    for (const fileName in controllersFiles) {
      if (controllersFiles.hasOwnProperty(fileName)) {
        const controller = (controllersFiles as any)[fileName];
        controllers.push(new controller())
      }
    }

    return controllers
  }
}

export {
  Controllers
}