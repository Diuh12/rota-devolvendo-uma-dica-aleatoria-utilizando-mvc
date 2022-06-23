import express from "express";
import chalk from "chalk";
const app = express()

app.use(express.json())

import { create } from "./controllers/create.js";
create(app)

import { tip } from "./controllers/tips.js";
tip(app)

app.listen(3000, ()=>{
    console.log(chalk.magenta("Está rodando na porta 3003"))
    })
