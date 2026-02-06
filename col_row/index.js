import data from "./data.json" with {type : "json"}
import { Manager } from "./manager.js";
import { Table } from "./table.js";
 
const mendezeserr = new Manager()
mendezeserr.addCallback = (element) => {
    console.log(element)
}
for (let a of data.colspanDataArr)
{
    mendezeserr.addElement(a)
}
 
new Table()


 
 