document.addEventListener("readystatechange", e => {
    if (e.target.readystatechange === "complete"){
        init()
    }
})

const init = () => {
    const form = document.querySelector("search-bar")
}