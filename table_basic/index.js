/**
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback RenderRowCallback
 * @param {HTMLTableSectionElement}
*/
 
/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}]
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}]
 
/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút",
        concepts1: "képvers",
        title2: "Búcsú",
        concepts2: "avantgárd"
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény"
    },
    {
        author: "Franz Kafka",
        title1: "A per",
        concepts1: "képvers",
        title2: "Az átvlátozás",
        concepts2: "kisregény"
    }
]
 
 
 
/** @type {ColspanRowType[]} */
const colspanBodyArr = [
    {
        author: "Appolliniare",
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés",
    },
    {
        author: "Appolliniare",
        title: "Búcsú",
        concepts: "Avantgárd"
    },
    {
        author: "Thomas Mann",
        title: "Mario és a varázsló",
        concepts: "Kisregény"
    },
    {
        author: "Franz Kafka",
        title: "A per",
        concepts: "regény"
    },
    {
        author: "Franz Kafka",
        title: "Az átváltozás",
        concepts: "kisregény",
        concepts2: "groteszk"
    }
]
 
// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)
 
class Table {
    /**
     * @type {HeaderType}
     */
    #tbody;
 
    get tbody() {
        return this.#tbody;
    }
 
    /**
     *
     * @param {HeaderType} headerArray
     */
    constructor(headerArray) {
        this.#tbody = makeTableBodyWithHeader(headerArray);
    }

    appendRow(callback){
        callback(this.#tbody)
    }

}
 
class ColSpanTable extends Table {
    /**
     *
     * @param {HeaderType} headerArray
     */
    constructor(headerArray) {
        super(headerArray)
    }
 
    /**
     *
     * @param {ColspanRowType} body
     */
    render(body) {
        renderColspanBody(this.tbody, body);
    }
}
 
class RowSpanTable extends Table {
    /**
     *
     * @param {HeaderType} headerArray
     */
    constructor(headerArray) {
        super(headerArray)
    }
 
    /**
     *
     * @param {RowspanRowType} body
     */
    render(body) {
        renderRowspanBody(this.tbody, body);
    }
}

const colspanTable = new ColSpanTable(colspanHeaderArr);
colspanTable.render(colspanBodyArr);
 
const rowspanTable = new RowSpanTable(rowspanHeaderArr);
rowspanTable.render(rowspanBodyArr);
 



//callback


const rowspanButton = document.getElementById('rowspanButton');

rowspanButton.addEventListener('click', onclickButton.bind(rowspanTable))      //itt valami nem jó :(

function onclickButton(e){
    e.preventDefault();
    /**
     * @type {RowspanRowType}
     */
    const objektum = {
        author: "kaki",
        title: "fing",
        concepts: "májkrém",  
        concepts2: "ring",
    };

    rowspanTable.appendRow(function(body){
        const tr = document.createElement('tr');
        body.appendchild(tr);

        for(cell of objektum){
            const td = document.createElement('td');
            td.innerText=cell
            body.appendchild(td)
        }
        
    })
}
    



