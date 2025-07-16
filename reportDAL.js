import { ObjectId } from "mongodb";
import  {connect} from "./db.js";

export async function getAllReports(){
    const db = await connect()
    return await db.collection("intel_reports").find().toArray()
}

export async function insertReport(reports){
    const db = await connect()
    return await db.collection("intel_reports").insertOne(reports)
}

export async function getHighreport(){
    const db = await connect()
    return await db.collection("intel_reports").find({threatLevel:{ $gte: 4}}).toArray()
}

export async function updateReport(id){
    const db = await connect()
    return await db.collection("intel_reports").updateOne({_id: new ObjectId(id)},{$set:{ confirmed:true}})
}

export async function deletReport(id){
    const db = await connect()
    return await db.collection("intel_reports").deleteOne({_id: new ObjectId(id)})
}

export async function getReportById(id){
    const db = await connect()
    return await db.collection("intel_reports").findOne({_id: new ObjectId(id)})
}