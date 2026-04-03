import { Schema } from "mongoose";
import { Document } from "mongoose";
import mongoose from "mongoose";

export interface IBoard extends Document {
    name: string;
    userId: string;
    columns: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const BoardSchema = new Schema<IBoard>(
    {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            index: true,
            required: true
        },
        columns: [
            {
                type: Schema.Types.ObjectId,
                ref: "Column",
            }
        ],
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Board ||
    mongoose.model<IBoard>("Board", BoardSchema);