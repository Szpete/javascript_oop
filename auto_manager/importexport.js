import { ViewElement } from "./viewelement";

class ImportExport extends ViewElement {
    /**
     *  @type {AuthorManager}
     */
    #manager;

    /**
     * @param {string} id
     * @param {AuthorManager} manager
     */
    constructor(id, manager){
        super(id);
        this.#manager = manager;
        const importInput = document.createElement('input')
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = () => {
                const result = {};
                const filecontent = reader.result;
                const filecontentlines = filecontent.split('\n');
                /**
                 * @type {import("./index.js").AuthorManager}
                 * 
                 */
                const AuthorType = {
                    author: currentRowData[0],
                    work:  currentRowData[1],
                    concept: currentRowDate[2],
                }
                result.push(authorType)  
            }
            this.#manager.addElementList(result)
        })
        const exportButton = document.createElement('button')
        exportButton.innerText = 'export'
        this.div.appendchild(exportButton)
        exportButton.addEventListener('click', ()=> {
            const a = document.createElement('a')
            const content = this.#manager.getExportContent();
            const file = new Blob({content});
            const url = URL.createObjectURL(file)
            a.href = url
            a.download = 'export.csv';
            a.click()
            URL.revokeObjectURL(a.href)
        })
    }
}