var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//SCHEMA
let Custommer4Schema = mongoose.Schema({
    IdDistrict: {
        type: String,
    },
    IdVillage: {
        type: String,
    },
    Address: {
        type: String,
    },
    BankName: {
        type: String,
    },
    BranchName: {
        type: String,
    }
});



//MODEL
let Custommer4 = mongoose.model('Custommer4', Custommer4Schema);

/* GET home page. */
router.get('/', function(req, res, next) {
    Custommer4.find({}, (Error, data) => {
        console.log("Custommer4", data);
        res.render('index', { Custommer4s: data });
    });
});
router.get('/form-add', function(req, res, next) {
    res.render('form-add', {});
});
router.post('/add', function(req, res, next) {
    Custommer4.create(req.body);
    res.redirect('/');
});
router.get('/form-update/:id', function(req, res, next) {
    Custommer4.findById(req.params.id, (Error, data) => {
        res.render('form-update', { Custommer4s1: data });
    });
});
router.post('/update', function(req, res, next) {
    Custommer4.findByIdAndUpdate(req.body.id, req.body, (Error, data) => {
        res.redirect('/');
    })
});
router.get('/form-delete/:id', function(req, res, next) {
    Custommer4.findByIdAndDelete(req.params.id, (Error, data) => {
        res.redirect('/');
    })
});



module.exports = router;