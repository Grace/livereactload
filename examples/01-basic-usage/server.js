const express     = require("express"),
      React       = require("react"),
      Application = require("./src/app"),
      app         = express()

app.get("/", (req, res) => {
  const model = {
    counter1: 10000,
    counter2: -100000
  }
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <title>2.x basic usage</title>
    </head>
    <body>
      <div id="app">
        ${React.renderToString(<Application {...model} />)}
      </div>
      <script type="text/javascript">
        window.INITIAL_MODEL = ${JSON.stringify(model)};
      </script>
      <script type="text/javascript" src="/static/bundle.js"></script>
    </body>
  </html>`)
})

app.get("/static/bundle.js", function(req, res) {
  res.sendFile("bundle.js", {root: __dirname})
})

app.listen(3000)
