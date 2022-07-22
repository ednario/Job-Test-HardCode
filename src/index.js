const express = require('express');
const { engine } = require('express-handlebars');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Config HandleBars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

routes(app);
app.use(cors());

app.listen(port, () => { console.log('server is runner on port 3000'); });
