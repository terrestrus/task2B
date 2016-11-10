import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});
app.get('/task2B', (req, res) => {

  let name = '';

 let n = req.query.fullname.split(" ");
 if (n.length > 3) {
   res.send('Invalid fullname');
 }
  name = n[n.length - 1] + " ";
  if (n.length == 3) {
    for (let i = 0; i < 2; i++) {
        console.log(n[i]);
       name += n[i].slice(0,1)+"."+ " ";
  }
}
  if (n.length == 2) {
    for (let i = 0; i < 1; i++) {
        console.log(n[i]);
       name += n[i].slice(0,1)+"."+ " ";
  }
}

  console.log(n);
  res.send(name);

});


app.get('/task2A', (req, res) => {

const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString())
});
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
