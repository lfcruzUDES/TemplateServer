/**
 * Server module.
 * */

import Router from './router';
import SETTINGS from '../../Settings';
//import urls from '../../GASwebAppTest/urls'

// Interfaces
// ------------------------------------------------------------
export interface RequestGetInterface {
  queryString: string;
  contentLength: number;
  parameters: {};
  contextPath: string;
  parameter: {};
  method: 'GET' | 'POST';
}

// Server
// ------------------------------------------------------------

class Server {
  private static _router = Router();

  public static response(req: RequestGetInterface) {
    const argumentRoute = SETTINGS.getProperty('argumentRoute');
    const path = req.parameter[argumentRoute];
    return this._router.getRouteByPath(path).view(req);
  }

  public static sendError(msg: string) {
    return HtmlService.createHtmlOutput(msg);
  }
}

// Serve get response.
const doGet = (req: RequestGetInterface) => {
  // try {
     urls();
  // } catch (error) {
  //   return Server.sendError(error);
  // }
  // try {
     req.method = 'GET';
     return Server.response(req);
  // } catch (error) {
  //   return Server.sendError(error);
  // }
};

// Serve post response.
const doPost = (req) => {
  Logger.log(req);
};
