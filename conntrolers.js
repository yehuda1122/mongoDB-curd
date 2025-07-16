import { getAllReports, insertReport,getHighreport,updateReport,deletReport,getReportById } from "./reportDAL.js";

export async function getReport(req, res) {
    try {
        const reports = await getAllReports()
        res.send(reports)
    }
    catch (erorr) {
        console.log('erorr' + erorr);
        res.status(404).send("databese erorr")
    }
}

export async function insertReortToDB(req, res) {
    try {
        const newRport = await insertReport(req.body)
        res.send(newRport)
    }
    catch (erorr) {
        console.log('erorr' + erorr);
        res.status(404).send("databese erorr")
    }

}
export async function getReportbyRisk(req, res) {
    try {
        const reports = await getHighreport()
        res.send(reports)
    }
    catch (erorr) {
        console.log('erorr' + erorr);
        res.status(404).send("databese erorr")
    }
}
export async function updetConfirmeInDB(req,res){
    const id = req.params.id
    try{
        const newConfirmed = await updateReport(id)
        const report = await getReportById(id)        
        res.send(report)
    }
        catch (erorr) {
        console.log('erorr' + erorr);
        res.status(404).send("databese erorr")
    }
}

export async function deletReportById(req,res){
        const id = req.params.id
    try{
        const report = await deletReport(id)
        res.send(report)
    }
            catch (erorr) {
        console.log('erorr' + erorr);
        res.status(404).send("databese erorr")
    }   
}

