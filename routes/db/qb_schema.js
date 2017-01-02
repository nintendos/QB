// 链接 firstblood 集合
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://10.211.55.1:27017/qb');
// 链接错误
db.on('error', function(error) {
  console.log(error);
});
// Schema 结构
var Schema = mongoose.Schema;
var superbondScheMa = new Schema({
  event_id: {type : Number},
  account: {type : String},
  //time     : {type : Date, default: Date.now},
  time: {type : Date},
  time_next: {type : Date},
  event_key: {type : String},
  event_value: {type : String},
  MainWindow: {type : Number},
  time_stay: {type : Number},
  func: {type : String},
  func_last: {type : String},
  cp: {type : String},
  cp_type: {type : String},
  city: {type : String},
});
// 关联 firstblood -> superbond 表
exports.superbond = db.model('superbond', superbondScheMa);
exports.db = db;

						
