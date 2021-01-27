import View from '../ds_modules/webapp/views';

/**
 * Check authorization.
 * */
const isAuthoriced = (request: {parameter: { }}): boolean => {
  const parameters = request.parameter;
  let token;
  if (parameters.hasOwnProperty('token')) {
    token = parameters.token;
  }
  Logger.log(token);
  Logger.log(ScriptProperties.getProperty('token'));
  return token === ScriptProperties.getProperty('token');
};

/**
 * Return a email body base.
 * If there is a header or footer GET parameters use that
 * values for images src.
 * */
const emailBobyBase = (request: { parameter: {} }) => {
  const parameters = request.parameter;
  if (isAuthoriced(request)) {
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
      .replace(new RegExp('  ', 'g'), '')
      .replace(new RegExp('"', 'g'), '\'')
      .replace(new RegExp('\t', 'g'), '')
      .replace(new RegExp('\n', 'g'), '');
    return View.JSONresponse({
      status: 200,
      data: content,
    });
  }
  return View.JSONresponse({
    status: 404,
    error: 'Not allowed.',
  });
};

/**
 * Set values.
 * */
const setSettingsDefaultValues = (request: { parameter: {} }) => {
  const parameters = request.parameter;
  if (isAuthoriced(request)) {
    try {
      if (parameters.hasOwnProperty('header')) {
        ScriptProperties.setProperty('header', parameters.header);
      }
      if (parameters.hasOwnProperty('footer')) {
        ScriptProperties.setProperty('footer', parameters.footer);
      }
      return View.JSONresponse({ status: 200 });
    } catch (error) {
      return View.JSONresponse({
        status: 500,
        error: error.message,
      });
    }
  } else {
    return View.JSONresponse({
      status: 404,
      error: 'Not allowed.',
    });
  }
};

export default {
  emailBobyBase,
  setSettingsDefaultValues,
};
