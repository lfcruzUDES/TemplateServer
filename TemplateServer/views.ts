import View from '../ds_modules/webapp/views';

const emailBobyBase = (request: { parameter: {} }) => {
  const parameters = request.parameter;
  if (!parameters.hasOwnProperty('header')) {
    parameters.header = ScriptProperties.getProperty('header');
  }
  if (!parameters.hasOwnProperty('footer')) {
    parameters.footer = ScriptProperties.getProperty('footer');
  }
  const html = View.render(
    request,
    'TemplateServer/templates/emailBase.html',
    parameters,
  );
  const content = html.getContent()
    .replace(new RegExp(' ', 'g'), '')
    .replace(new RegExp('\t', 'g'), '')
    .replace(new RegExp('\n', 'g'), '');
  return View.stringResponse(content);
};

export default {
  emailBobyBase,
};
