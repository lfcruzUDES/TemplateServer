import Router from '../ds_modules/webapp/router';
import { emailBobyBase, setSettingsDefaultValues } from './views';

const urls = () => {
  const paths = Router();

  /**
   * Route to email template.
   * */
  paths.addRoute({
    name: 'emailBase',
    path: 'base',
    view: emailBobyBase,
  });

  /**
   * Route to set default values configuration.
   * */
  paths.addRoute({
    name: 'dataConfig',
    path: 'conf',
    view: setSettingsDefaultValues,
  });
};
