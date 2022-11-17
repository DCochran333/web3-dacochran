
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add/:x([0-9]+)/:y([0-9]+)', (req,res) =>
{
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);
    const z = x + y;
    res.json({'status':'ok','value': z});
})
app.get('/users/:userId', (req, res)=>
{
    console.log(req.params);
    res.send('ok');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
