const User = require('../models/user_model');
const Event = require('../models/event_model');
const Notice = require('../models/notice_model');
const Result = require('../models/result_model');
const NewsFeed = require('../models/newsfeed_model');
const Student = require('../models/student_model');


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
        const event = new Event(data);
        await event.save();
        res.status(200).json(event);
    },
    ReadAllEvent: async(req, res) => {
        const allEvent= await Event.find({});
        res.status(200).json(allEvent);
    },

   //==========NewsFeed============
    AddNewNews: async(req,res)=>{
        const data = req.body;
        const news = new NewsFeed(data);
        await news.save();
        res.status(200).json(news);
    },
    ReadAllNews: async(req, res) => {
        const news= await NewsFeed.find({});
        res.status(200).json(news);
    },


     //==========Result============
    AddNewResult: async(req,res)=>{
        const data = req.body;
        const result = new Result(data);
        await result.save();
        res.status(200).json(result);
    },
    ReadAllResult: async(req, res) => {
        const result= await Result.find({});
        res.status(200).json(result);
    },

    //Update Result
    UpdateResult: async(req, res) => {
        const result = await Result
            .findByIdAndUpdate(req.params.resultId,req.body);
        res.status(200).json(result);
    },
    //Delete post
    DeleteResultById: async(req, res) => {
        const result = await Result.findById(req.params.resultId);
        if (!result) {
            return res.status(404).json({ error: "Result doesn\'t exist" })
        }
        await result.remove();
        res.status(200).json(result);
    },




    //Student Project
    AddNewProject: async(req,res)=>{
        const data = req.body;
        const student = new Student(data);
        await student.save();
        res.status(200).json(student);
    },
        //Delete post
        DeleteProjectById: async(req, res) => {
            const student = await Student.findById(req.params.studentId);
            if (!student) {
                return res.status(404).json({ error: "Project doesn\'t exist" })
            }
            await student.remove();
            res.status(200).json(student);
        },

        GetAllProject :async(req, res) => {
            const allproject= await Student.find({});
            res.status(200).json(allproject);
        },


        //User==============
        GetAllUser: async(req, res) => {
            const alluser= await User.find({});
            res.status(200).json(alluser);
    
        },  


        DeleteUserById: async(req, res) => {
            const user = await User.findById(req.params.userId);
            if (!user) {
                return res.status(404).json({ error: "User doesn\'t exist" })
            }
            await user.remove();
            res.status(200).json(user);
        },

}

