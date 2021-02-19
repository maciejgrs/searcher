const deleteSearchResults = () => {
  const parentElement = document.querySelector(".searchResults");
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = createResultItem(result);
    const resultContent = document.createElement("div");
    resultContent.classList.add("resultContent");

    if (result.img) {
      const resultImage = createResultImage(result);
      resultContent.append(resultImage);
    }

    const resultText = createResultText(result);
    resultContent.append(resultText);
    resultItem.append(resultContent);
    const searchResults = document.querySelector(".searchResults");
    searchResults.append(resultItem);
  });
};

const createResultItem = (result) => {
  const resultItem = document.createElement("div");
  resultItem.classList.add("resultItem");
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("resultTitle");
  const link = document.createElement("a");
  link.href = result.fullurl;
  link.textContent = result.title;
  link.target = "_blank";
  resultTitle.append(link);
  resultItem.append(resultTitle);
  const newResultTitle = result.title.split(" ").join("_");
  link.href = `https://en.wikipedia.org/wiki/${newResultTitle}`;
  return resultItem;
};

const createResultImage = (result) => {
  const resultImage = document.createElement("div");
  resultImage.classList.add("resultImage");
  const img = document.createElement("img");
  img.src = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
};

const createResultText = (result) => {
  const resultText = document.createElement("div");
  resultText.classList.add("resultText");
  const resultDescription = document.createElement("p");
  resultDescription.classList.add("resultDescription");
  resultDescription.textContent = result.text;
  resultText.append(resultDescription);
  return resultText;
};

const clearStats = () => {
  document.querySelector(".stats").textContent = "";
};

const setStatsLine = (numOfResults) => {
  const statsLine = document.querySelector(".stats");

  if (numOfResults) {
    statsLine.textContent = `We have ${numOfResults} results for you.`;
  } else {
    statsLine.textContent = "No results for this search";
  }
};

const clearSearch = (e) => {
  e.preventDefault();
  const search = document.querySelector("#search");
  search.value = "";
  search.focus();
};
