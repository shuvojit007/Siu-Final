const User = require('../models/user_model');
const Event = require('../models/event_model');
const Notice = require('../models/notice_model');
const Result = require('../models/result_model');
const NewsFeed = require('../models/newsfeed_model');


module.exports={
    GoToAdminPage:async (req,res)=>{
        const {username,pass} =req.body;
        if(username==="admin"&&pass==="admin"){
            res.status(200).json({success:true});
        }else {
            res.status(200).json({success:false});
        }
    },
    AddNewNotice: async(req,res)=>{
        const data = req.body;
        const notice = new Notice(data);
        await notice.save();
        res.status(200).json({ sucess: true });
    },
       ReadAllNotice: async(req, res) => {
        const allNotice= await Notice.find({});
        res.status(200).json(allNotice);

    },  
    //==========Event============
    AddNewEvent: async(req,res)=>{
        const data = req.body;
        const notice = new Notice(data);
        await notice.save();
        res.status(200).json({ sucess: true });
    },
    ReadAllEvent: async(req, res) => {
        const allNotice= await Notice.find({});
        res.status(200).json(allNotice);
    },


    AddNewNews: async(req,res)=>{
        const data = req.body;
        const news = new NewsFeed(data);
        await news.save();
        res.status(200).json({ sucess: true });
    },
    ReadAllNews: async(req, res) => {
        const news= await NewsFeed.find({});
        res.status(200).json(news);
    },


    AddNewResult: async(req,res)=>{
        const data = req.body;
        const result = new Result(data);
        await result.save();
        res.status(200).json({ sucess: true });
    },
    ReadAllResult: async(req, res) => {
        const result= await Result.find({});
        res.status(200).json(result);
    },


    //Update Result
    UpdateResult: async(req, res) => {
        const result = await Result
            .findByIdAndUpdate(req.params.resultId,req.body);
        res.status(200).json({ sucess: true });
    },

    //Delete post
    DeleteResultById: async(req, res) => {
        const result = await Result.findById(req.params.resultId);
        if (!result) {
            return res.status(404).json({ error: "Result doesn\'t exist" })
        }
        await post.remove();
        res.status(200).json({ sucess: true });
    }
}

