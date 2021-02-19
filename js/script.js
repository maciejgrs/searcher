const init = () => {
  const search = document.querySelector("#search");
  search.value = "";
  search.focus();
  const form = document.querySelector("#search-bar");
  form.addEventListener("submit", submitTheSearch);
  const clear = document.querySelector(".clear");
  clear.addEventListener("click", (e) => {
    if (e.target.closest("button").classList.contains("clear")) {
      clearSearch(e);
    }
  });
};

const submitTheSearch = (e) => {
  e.preventDefault();
  deleteSearchResults();
  processTheSearch();
};

const processTheSearch = async () => {
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchTermResults(searchTerm);

  if (resultArray.length) {
    buildSearchResults(resultArray);
  }
  setStatsLine(resultArray.length);
};
init();
