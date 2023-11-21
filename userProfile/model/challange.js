// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const CourseSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     instructor: {
//         type: String,
//         required: true
//     },
//     location: {
//         room: {
//         type: String,
//         required: true
//         },
//         building: {
//             type: String,
//             required: true
//         },
//         schedule: {
//             startTime: {
//                 type: String,
//                 required: true
//             },
//             endtime: {
//                 type: String,
//                 required: true
//             }
//         }
//     }   
//     },
//     //{
//     //  versionKey: false
//     //}
//     );

//     const CourseModel = mongoose.model('course', CourseSchema);

//     export default CourseModel;

import mongoose from "mongoose";

const Schema =mongoose.Schema;

const CourseSchema = new Schema({

    // codingChallenge: {
    //     title: {
    //         type:String,
    //         required:true
    //     },
    //     discription: {
    //         type:String,
    //         required:true
    //     }
    // },

    userdetails: {
        name: {
            type:String,
            required:true 
        },
        username: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        }
    }
    // name:{
    //     type:String,
    //     required: true
    // },

    // instructor:{
    //     type:String,
    //     required:true
    // },

    // location:{
    //     room: {
    //         type:String,
    //         required:true
        
    //     },

    //     building:{
    //         type:String,
    //         required:true
    //     }
        
    // },

    // schedule:{
        
    //     startTime:{
    //         type:String,
    //         required:true
    //     },
    //     endTime:{
    //         type:String
    //     }

    // }
 },
// {
//     versionKey: false
// }
);

const CourseModel = mongoose.model('course', CourseSchema);

export default CourseModel;


