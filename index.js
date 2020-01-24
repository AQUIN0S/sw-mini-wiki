const apiRoot = new URL("https://swapi.co/api/");
const options = document.getElementById("options");
const chevron = document.getElementById("chevron");
let activeCategoryNode = document.getElementById("activeCategory");
let activeCategory;
let optionsVisible = false;
const searchCategories = {};
let items;

const setActiveCategory = (category) => {
    const lastIndex = activeCategoryNode.childNodes.length - 1
    if (activeCategoryNode.childNodes[lastIndex].nodeType === Node.TEXT_NODE) {
        activeCategoryNode.childNodes[lastIndex].nodeValue = ` ${category}`;
    } else {
        activeCategoryNode.appendChild(document.createTextNode(` ${category}`));
    }
    activeCategory = category;
    setupCategoryMenu();
};

const populateSearchCategories = (data) => {
    Object.assign(searchCategories, data);
};

const toggleOptions = () => {
    if (!optionsVisible) {
        options.style.display = "block";
        chevron.className = "fas fa-chevron-down";
        optionsVisible = true;
    } else {
        options.style.display = "none";
        chevron.className = "fas fa-chevron-right";
        optionsVisible = false;
    }
};

const setDefaultCategory = () => {
    let defaultCategory = null;
    for (category in searchCategories) {
        if (!defaultCategory) {
            defaultCategory = category;
        }
    }
    
    setActiveCategory(defaultCategory);
    activeCategoryNode.addEventListener("click", toggleOptions);
};

const setupCategoryMenu = () => {
    while (options.lastChild) {
        options.removeChild(options.lastChild);
    }
    for (category in searchCategories) {
        if (category !== activeCategory) {
            let node = document.createElement("div");
            node.classList.add("option", "hide");
            node.appendChild(document.createTextNode(category));
            node.addEventListener("click", clickOption);
            options.appendChild(node);
        }
    }
};

const updateLoadingBar = (count, progress) => {
    const fullLength = document.getElementById("loadingBar").clientWidth;
    const fraction = progress / count;
    document.getElementById("loadingProgress").style.width = `${fraction * fullLength}px`;
};

const removeLoading = () => {
    const loading = document.getElementById("loading");
    loading.style.display = "none";
};

const clearContent = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

const getContentData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    let results = await data.results;
    updateLoadingBar(data.count, results.length);
    while (data.next) {
        response = await fetch(data.next);
        data = await response.json();
        results = results.concat(data.results);
        updateLoadingBar(data.count, results.length);
    }
    
    return results;
};

const formatKey = (key) => {
    let normalised = key.charAt(0).toUpperCase() + key.substring(1);
    normalised = normalised.replace(/_/g, " ");
    return normalised;
};

const formatData = (data) => {
    console.log(typeof data);
    return data;
};

const displayItems = (items) => {
    removeLoading();
    const grid = document.getElementById("grid");
    clearContent(grid);
    let div;
    for (let item of items) {
        div = document.createElement("div");
        div.classList.add("gridItem");
        for (let property in item) {
            if (div.childNodes.length !== 0) {
                div.appendChild(document.createElement("br"));
            }
            div.appendChild(document.createTextNode(`${formatKey(property)}: ${formatData(item[property])}`));
        }
        grid.appendChild(div);
    }
};

const clickOption = (event) => {
    setActiveCategory(event.target.textContent);
    toggleOptions();
    
};

/**
 * This function is the main setup function of the page, using the helper functions defined above to achieve this.
 * @param {URL} root 
 */

const setupPage = async (root) => {
    let response = await fetch(root);
    let data = await response.json();
    populateSearchCategories(await data);
    setDefaultCategory();
    items = await getContentData(new URL(activeCategory, root));
    displayItems(items);
    console.log(items);
};


setupPage(apiRoot);
