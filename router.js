import expres from "express";
import {getReport,
    insertReortToDB,
    getReportbyRisk,
    updetConfirmeInDB,
    deletReportById,
} from "./express.js"

export const rout = expres.Router()

rout.get("/",getReport)
rout.get("/high",getReportbyRisk)
rout.post("/",insertReortToDB)
rout.put("/:id/confirm",updetConfirmeInDB)
rout.delete("/:id",deletReportById)


