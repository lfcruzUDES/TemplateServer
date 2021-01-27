/**
 * Settings
 * */

ScriptProperties.setProperties({
  debug: '0',
  argumentRoute: 'path',
  appName: 'Template server',
  urlDev: 'https://script.google.com/a/macros/udes.edu.mx/s/AKfycbxE_VWNGuY9kwu-Dwu3ougxQeHQbHyrVGNt7aYpBmo/dev',
  urlProd: 'https://script.google.com/a/macros/udes.edu.mx/s/AKfycbx3FtQUsruOUBQMp1oyhWX4WU7HoG4D_5v8F90_EiJ9aLm8L8m-pWRV/exec',
  favicon: 'https://udes.edu.mx/wp-content/uploads/2016/08/favicon.png',
  token: '0467e7b4c6b248fcadcd9fbe845da294',
  notAuthPath: '',
  defaultPath: '',
  firebaseUrl: '',
  firebaseSecret: '',
  // header: '',
  // footer: '',
});

const SETTINGS = PropertiesService.getScriptProperties();

export default SETTINGS;
