var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var TASKS_FILE = path.join(__dirname, 'app/file/file.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '/dist')));

app.get('/app/file', function (req, res) {
  fs.readFile(TASKS_FILE, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/app/file', function (req, res) {
  fs.readFile(TASKS_FILE, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var tasks = JSON.parse(data);
    var newTask = {
      text: req.body.text,
      completed: false
    };
    if (newTask.text != '') {
      tasks.push(newTask);
    }
    else{
      tasks=[];
    }
    // tasks.push(newTask);
    fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 4), function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(tasks);
    });
  });
});

app.put('/app/file', function (req, res) {
  fs.readFile(TASKS_FILE, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var tasks = JSON.parse(data);
    var index = req.body.index;
    tasks[index].completed = true;
    fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 4), function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(tasks);
    });
  });
});

app.delete('/app/file', function (req, res) {
  fs.readFile(TASKS_FILE, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var tasks = JSON.parse(data);
    var index = req.body.index;
    tasks.splice(index, 1);
    fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 4), function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(tasks);
    });
  });
});
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
