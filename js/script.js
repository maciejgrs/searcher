import { searchFocus } from "./searching"
import { getSearchTerm } from "./dataFunctions"



document.addEventListener("readystatechange", e => {
    if (e.target.readystatechange === "complete"){
        init()
    }
})

const init = () => {
    searchFocus()
    const form = document.querySelector("search-bar")
    form.addEventListener("submit", submitTheSearch)
}

const submitTheSearch = (e) => {
    e.preventDefault()
    processTheSearch()
    searchFocus()


}

const processTheSearch = async () => {
    const searchTerm = getSearchTerm()
    if (searchTerm === "") return
    const resultArray = await retrieveSearchResults(searchTerm)
}