const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/api/employees', (req,res) => {
    res.send([
        {
            'id': '1',
            'number': '20200413001',
            'image':'https://placeimg.com/128/128/1',
            'name': '가나다',
            'sex': '男性',
            'position':'社員'
        },
        {
            'id': '2',
            'number': '20200413002',
            'image':'https://placeimg.com/128/128/2',
            'name': '라마바',
            'sex': '男性',
            'position':'社員'
        },
        {
            'id': '3',
            'number': '20200413003',
            'image':'https://placeimg.com/128/128/3',
            'name': '사아자',
            'sex': '女性',
            'position':'社員'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
