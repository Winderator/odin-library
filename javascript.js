const myLibrary = ["Book1","Book2","Book3"]

function Book(){

}

function addBook(){

}

function displayBooks(){
    const libraryContainer = document.getElementById("library-container")

    libraryContainer.textContent = ''

    for (let book of myLibrary){
        let newBookContainer = document.createElement('div')
        newBookContainer.classList.add('book-container')

        let newContent = document.createElement('p')
        newContent.textContent = book

        newBookContainer.appendChild(newContent)
        libraryContainer.appendChild(newBookContainer)
    }
}