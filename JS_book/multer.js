const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");

app.listen(3000, () => {
	const dir = "./uploads";
    if(!fs.existsSync(dir)) {
    	fs.mkdirSync(dir);
    }
    console.log("서버 실행");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage })


////////////////////////////////////////////


app.post('/', upload.single('img'), (req, res, next) => {
    res.status(200).send({
        message: "Ok",
        fileInfo: req.file
    })
});

// 다중 파일 업로드
app.post('/multipart', upload.array('img'), (req, res, next) => {

    // console check
    req.files.map((data) => {
        console.log(data);
    });
    
    res.status(200).send({
        message: "Ok",
        fileInfo: req.files
    })
});

//////////////////////////////////////////




app.post('/upload', function(req, res){
    res.send('업로드 성공!');
  });


var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
var upload = multer({ dest: 'uploads/' })
// 입력한 파일이 uploads/ 폴더 내에 저장된다.
// multer라는 모듈이 함수라서 함수에 옵션을 줘서 실행을 시키면, 해당 함수는 미들웨어를 리턴한다.


app.post('/upload', upload.single('userfile'), function(req, res){
    res.send('Uploaded! : '+req.file); // object를 리턴함
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
  });

var multer = require('multer'); // multer모듈 적용 (for 파일업로드)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  }
  filename: function (req, file, cb) {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
var upload = multer({ storage: storage })


//////////////////////////////////////////////////

var multer = require('multer');
var cors = require('cors');
var fs = require('fs');
var static = require('serve-static');


var app = express();

app.use('/upload', static(path.join(__dirname + 'upload'));
app.use(cors());

var storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(request, 'upload');
    },
    filename: (request, file, callback) => {
    
        /* 확장자를 제외한 파일명 */
        var basename = path.basename(file.basename);
        /* 파일의 중복과 덮어쓰기를 방지하기 위해 시간을 붙인다 */
        var date = Date.now();
        
        callback(request, date + '_' + basename);
    }
});

var upload = multer({
    storage: storage,
    limits: {
        files: 10, /* 한번에 업로드할 최대 파일 개수 */
        fileSize: 1024 * 1024 * 10 /* 업로드할 파일의 최대 크기 */
    }
});


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
            height: 100%;
        }
        .main-box{
            background-color: gray;
            height: 300px;
            width: 300px;
        }
        .upload-form input[type='file']{
            width: 90%;
            background-color: #fff;
        }
    </style>
</head>
<body>
    <div class="main-box">
        <form action="/upload" method="post" enctype="multipart/form-data" class="upload-form">
            <div>
                <label for="">Files</label>
                <input type="file" name="uploadfile" multiple>
            </div>
            <input type="submit" value="submit">
        </form>
    </div>
</body>
</html>


//GET
app.get('/upload', (request, response) => {
    console.log('# GET /upload');

    fs.readFile(path.join(__dirname, 'html/upload.html'), 'utf8', (err, data) => {
        if(err) throw err;

        console.log('upload.html read');
        
        response.write(data);
        response.end();
    });
});

//POST
/* post메서드의 인자로 파일을 배열로 받고싶다 할 때 인자로 변수 upload의 array() 넣을 수 있다. */
/* upload.array('uploadfile', 2) : 'uploadfile'이라는 이름의 파일 중 2개를 배열로 받는다. */
/* array('uploadfile') 처럼 몇 개를 할 지 인자를 안줘도 가능하다. */

app.post('/upload', upload.array('uploadfile'), (request, response) => {
    console.log('# POST /upload');

     /* 업로드된 파일은 request에 담겨있다. */
    var files = request.files;

    console.log('files length : ' + files.length);

    var html = '<h1>파일 업로드 결과</h1>';

    if(files.length > 0){
        files.forEach((file, idx) => {
            console.log('idx : ' + idx);
            console.dir(file);

            html += `
                <div>
                    <img src="upload/${file.filename}">
                </div>
            `
        });
    }
    else{
        console.log('Upload files aren\'t exist');
        html += '<div>파일이 존재하지 않습니다.</div>';
    }

    response.send(html);
});

///////////////////////////////////

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var static = require('serve-static');
var session = require('express-session');

/* file upload */
var multer = require('multer');
var cors = require('cors');
var fs = require('fs');

var app = express();
var router = express.Router();
/* Definition */

/* Middleware Setting */
app.set('port', process.env.PORT || 3000);
app.use(cookieParser());
app.use(session({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));

app.use('/upload', static(path.join(__dirname, 'upload')));
app.use(cors());

var storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'upload');
    },
    filename: (request, file, callback) => {

        var basename = path.basename(file.originalname);
        var date = Date.now();

        console.log(date + "_" + basename);

        callback(null, date + "_" + basename);
    }
});
var upload = multer({
    storage: storage,
    limits:{
        files: 10, /* 한번에 최대 업로드 파일 수 */
        fileSize: 1024 * 1024 * 10, /* 파일의 최대 사이즈 */
    }
});
/* Middleware Setting */


app.get('/', (request, response) => {
    console.log('# GET /');

    response.send('<h1>Hello World!!</h1><a href="mypage">mypage</a>');
});


app.get('/login', (request, response) => {
    console.log('# GET /login');

    console.log(path.join(__dirname, 'html/login.html'));

    fs.readFile(path.join(__dirname, 'html/login.html'), 'utf8', (err, data) => {
        if(err) throw err;

        console.log('login.html read');
        response.write(data);
        response.end();
    });

});
app.post('/login', (request, response) => {
    console.log('POST /login');
    
    var body = request.body;
    var id = body.id;
    var pw = body.pw;

    response.cookie('info', {
        id: id,
        pw: pw,
        authorize: true
    });

    request.session.user = {
        id: id,
        pw: pw,
        authorize: true
    };

    response.redirect('/mypage');
});


app.get('/mypage', (request, response) => {
    console.log('# GET /mypage');

    if(request.session.user){
        console.log('로그인 됨');
        response.send('<h1>mypage</h1><h2>' + request.session.user.id + '</h2>');
    }
    else{
        console.log('로그인 요망');
        response.redirect('/login');
    }
});

app.get('/logout', (request, response) => {

    if(request.session.user){
        
        request.session.destroy((err) => {
            if(err) throw err;
            console.log('로그아웃 완료');
        });
    }
    else{
        console.log('로그인이 되어있지 않습니다.');
    }
    response.redirect('/login');
});

app.get('/upload', (request, response) => {
    console.log('# GET /upload');

    fs.readFile(path.join(__dirname, 'html/upload.html'), 'utf8', (err, data) => {
        if(err) throw err;

        console.log('upload.html read');
        
        response.write(data);
        response.end();
    });
});
app.post('/upload', upload.array('uploadfile'), (request, response) => {
    console.log('# POST /upload');

     /* 업로드된 파일은 request에 담겨있다. */
    var files = request.files;

    console.log('files length : ' + files.length);

    var html = '<h1>파일 업로드 결과</h1>';

    if(files.length > 0){
        files.forEach((file, idx) => {
            console.log('idx : ' + idx);
            console.dir(file);

            html += `
                <div>
                    <img src="upload/${file.filename}">
                </div>
            `
        });
    }
    else{
        console.log('Upload files aren\'t exist');
        html += '<div>파일이 존재하지 않습니다.</div>';
    }

    response.send(html);
});

app.all('*', (request, response) => {

    var html = `
    <h1>Sorry. This page is 404 Error page. We can't take your request.</h1>
    <div><a href="/">return HOME</a></div>
    `;

    response.status(404).send(html);
});
app.use('/', router);

/* Create Server */
var server = http.createServer(app).listen(app.get('port'), () => {
    console.log('Express Server is Running on ' + app.get('port'));
});


////////////////////////////////