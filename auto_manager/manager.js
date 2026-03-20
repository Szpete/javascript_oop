/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 */


class AuthorManager{

    /**
     * @type {Author[]}
     */
    #authorList

    /**
     * @type {TableCallback}
     */
    #tableCallback

    /**
     * @type {AddElementResultCallback}
     */
    #addElementResultCallback

    /**
     * @type {ImportResultCallback}
     */
    #importResultCallback;

    /**
     * @param {TableCallback} value
     */
    set tableCallback(value){
        this.#tableCallback = value
    }

    constructor(){
        this.#authorList = []
    }

    /**
     * 
     * @param {import {"."}.AuthorType} element 
     */
    addElement(element){
        const author = new Author();
        author.id = this.#authorList.length
        author.name = element.author
        author.work = element.work
        author.concept = element.concept
        this.#authorList.push(author)
    }

    /**
     * @param {import(".").AuthorType[]} elementlist
     * @returns {void} 
     */
    addElementList(elementlist){
        for (const elem of elementlist){
            const author = new Author()
            author.id = this.#authorList.length;
            author.name = elem.author
            author.concept = elem.concept
            author.work = elem.work
            if(author.validate()){
                this.#authorList.push(author);
                this.#ImportResultCallback('Sikeres volt a filefeltöltés')
            

            }else{
                this.#importResultCallback('nem volt sikeres a filefeltoltes')
                break;
            }
        }

    }

    getAllElement(){
        this.#tableCallback(this.#authorList)
    }


}

class Author{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {string}
     */
    #name
    /**
     * @type {string}
     */
    #work
    /**
     * @type {string}
     */
    #concept

    constructor(){

    }

    get id(){
        return this.#id
    }
    
    set id(value){
        this.#id = value
    }

    get name(){
        return this.#name
    }

    set name(value){
        this.#name = value
    }

    get work(){
        return this.#work
    }

    set work(value){
        this.#work = value
    }

    get concept(){
        return this.#concept
    }

    set concept(value){
        this.#concept = value
    }
}

export {AuthorManager}