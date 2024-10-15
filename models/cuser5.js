import mongoose from "mongoose";

const cuser5Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    disease: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

export default mongoose.models.cuser5 || mongoose.model("cuser5", cuser5Schema);