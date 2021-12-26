import mongoose from "mongoose";
import { Timestamp } from "bson";

const Notification = mongoose.Schema({
    reqID: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        // require:true
    },
    userID: {
        type: Number,
        require: true
    },
    file: {
        type: String,

    }

}, {
    timestaps: true,
});

export default mongoose.model("Notifications", Notification);