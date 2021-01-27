import Router from '../ds_modules/webapp/router';
import { emailBobyBase } from './views';

const urls = () => {
  const paths = Router();

  paths.addRoute({
    name: 'emailBase',
    path: 'base',
    view: emailBobyBase,
  });
};


const callToMe = () => {
  const url = "https://script.google.com/a/macros/udes.edu.mx/s/AKfycbx3FtQUsruOUBQMp1oyhWX4WU7HoG4D_5v8F90_EiJ9aLm8L8m-pWRV/exec?path=base";
  const txt = UrlFetchApp.fetch(url).getContentText();
  Logger.log(txt);
};
