/**
 * Created by 1 on 2016/5/16.
 */
var mongoose=require('mongoose');

var  userschema=new mongoose.Schema({
    username:String,
    password:String
});

mongoose.model('User',userschema);