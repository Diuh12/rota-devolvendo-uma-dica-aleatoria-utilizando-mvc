
import {bd} from "../infra/bd.js"

export const tip = (app)=>{
    app.get("/tips", (req, res)=>{
    const index = Math.floor(Math.random()*(bd.tips.length - 0))
    res.json(bd.tips[index])
    })
}
