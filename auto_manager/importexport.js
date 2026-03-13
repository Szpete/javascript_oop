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
            
        }
            
        )
    }
}