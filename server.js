var Twig = require("twig"),
    express = require('express'),
    app = express()
    fetch = require('fetch').fetchUrl;

app.use(express.static('public'));

// This section is optional and used to configure twig.
app.set("twig options", {
    strict_variables: false
});

app.get('/', function(req, res){
  res.render('index.twig');
});

// Start the server.
app.listen(3000);
