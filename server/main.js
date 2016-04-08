import {app} from 'app';
import {endpoints} from 'endpoints';
import path from 'path';

const settings = {
  port: process.env.PORT || 8052,
  root: path.resolve(process.cwd())
};

endpoints(app);

app.connect.use((error, request, response, next) => {
  console.error('[ERROR]', error);
  next();
});

app.connect.use(require('morgan')('dev'));


app.connect.use(require('serve-static')(settings.root)).listen(settings.port, () => {
  console.log('Server running at ' + settings.port);
});

