const express = require('express');
const { engine } = require('express-handlebars');
const routes = require('./routes');

const app = express();
const port = 3000;

// Config HandleBars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

routes(app);

app.listen(port, () => { console.log('server is runner on port 3000'); });
