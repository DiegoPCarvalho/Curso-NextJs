export default class Produto {
    #id
    #nome
    #preco

    constructor(id, nome, preco){
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }

    get preco(){
        return this.#preco
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }
    
}