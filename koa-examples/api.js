'use strict';
var koa = require('koa');

var bodyParser = require('koa-bodyparser');
var koaLogger = require('koa-logger');
var mount = require('koa-mount');
var router = require('koa-router')({
    prefix: '/users'
});

var app = koa();

app.use(bodyParser());
app.use(koaLogger());
var users = [{
    name: 'Ra'
}, {
    name: 'Juan'
}];

router.get('/', function*() {
    this.body = users;
});
router.get('/:name', function*() {
    var name = this.params.name;
    for(let i= 0, length= users.length; i < length; i++){
        if(users[i].name === name){
            this.body = users[i];
            return;
        }
    }
    this.throw(404, 'Not found');
});

router.post('/', function*(){
    this.assert(this.request.body.name, 400, 'Name not found');
    users.push(this.request.body);
    this.body = this.request.body;
});

app.use(mount('/api', router.middleware()));

app.listen(3000);
console.log('Server started in http://localhost:3000');
