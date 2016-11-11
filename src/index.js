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
  let fullName = req.query.fullname || '';
   let arr = fullName.split(' ');
   let len = arr.length;

   if (fullName === '' || len > 3 || /\d|_|\//.test(fullName)) {
     fullName = 'Invalid fullname';
   } else {
     fullName = arr[len - 1];
     for (let i = 0; i < len - 1; i++ ) {
       fullName += ' ' + arr[i].slice(0, 1) + '.';
     }
   }

   res.send(fullName);

});


app.get('/task2A', (req, res) => {

const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString())
});
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

app.get('/task2C', (req, res) => {
const reg = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte|www.vk|twitter|github)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');

 if (req.query.username) {
 const username = req.query.username.match(reg)
   if (username) {
     let user = '@'+username[5]
     res.send(user);
   }

 }


});
