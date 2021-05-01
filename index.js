const WMA = require('wma-matching-algorithm');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String},
    skill:{type:Number},
    user_level:{Number},
    waiting_time:{Number}
})

module.exports.user = userSchema();


const input = ({req,res}) => {

    const wma = new WMA({
      source: req.body.user,
      keys: [
        {key: match_config},
        {key: waiting_users},
        {key: s_weight},
        {key: t_weight},
        {key: l_weight},
    ]
    });
  
    console.log(wma.match(match));
  
    console.log(wma.match(match2));
  
  };

exports.match('/',(req,res,next)=>{
    const skill=req.body.user.skill;
    const user_level = req.body.user.user_level;
    const waiting_time=req.body.user.waiting_time;

})
 exports.distance_score('/match',(req,res)=>{
    var userskill = req.user1.skill - req.user2.skill 
    var userwaiting_time = req.user1.waiting_time - req.user2.waiting_time
    var distance_score = s_weight * Δuser.skill + t_weight * Δuser.waiting_time + l_weight * Δuser.user_level

  }
  