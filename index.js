const apiRoot = new URL("https://swapi.co/api/");
const searchCategories = {};
const options = document.getElementById("options");
let activeCategoryNode = document.getElementById("activeCategory");
let activeCategory;
let categoriesVisible = false;

const setActiveCategory = (category) => {
    const lastIndex = activeCategoryNode.childNodes.length - 1
    if (activeCategoryNode.childNodes[lastIndex].nodeType === Node.TEXT_NODE) {
        activeCategoryNode.childNodes[lastIndex].nodeValue = ` ${category}`;
    } else {
        activeCategoryNode.appendChild(document.createTextNode(` ${category}`));
    }
    activeCategory = category;
};

const populateSearchCategories = (data) => {
    Object.assign(searchCategories, data);
};

const toggleOptions = () => {
    const chevron = document.getElementById("chevron");
    if (options.style.display === "none") {
        options.style.display = "block";
        chevron.className = "fas fa-chevron-down";
    } else {
        options.style.display = "none";
        chevron.className = "fas fa-chevron-right";
    }
}

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

const clickOption = (event) => {
    console.log("Clicked node", event.target.textContent);
}

const setupCategoryMenu = () => {
    for (category in searchCategories) {
        if (category !== activeCategory) {
            let node = document.createElement("div");
            node.classList.add("option", "hide");
            node.appendChild(document.createTextNode(category));
            node.addEventListener("click", clickOption);
            options.appendChild(node);
        }
    }
}

const setupPage = async (root) => {
    const response = await fetch(root);
    const data = await response.json()
    populateSearchCategories(data);
    setDefaultCategory();

    setupCategoryMenu();
};


setupPage(apiRoot);
