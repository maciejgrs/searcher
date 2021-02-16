import { searchFocus } from "./searching"
import { getSearchTerm } from "./dataFunctions"
import { retrieveSearchResults } from "./dataFunctions"
import { buildSearchResults } from "./searching"



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

    if (resultArray.length) {
      buildSearchResults(resultArray)
    }
}