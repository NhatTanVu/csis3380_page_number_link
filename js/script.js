const PAGE_SIZE = 10;

function setupPagination() {
    const pageContainer = document.querySelector(".page");
    pageContainer.insertAdjacentHTML("beforeend", "<ul class=\"pagination\"></ul>");

    const createPagignationLink = (number) => `<li><a onClick="showPage(${number}); return false;">${number}</a></li> `;
    let numOfContacts = document.querySelectorAll(".contact-item").length;
    console.log(`numOfContacts=${numOfContacts}`);
    let numOfPages = Math.floor(numOfContacts / PAGE_SIZE) + 1;
    const pageListContainer = document.querySelector(".pagination");
    for (let i = 1; i <= numOfPages; i++) {
        pageListContainer.insertAdjacentHTML("beforeend", createPagignationLink(i));
    }
}

function showPage(number) {
    let allContacts = document.querySelectorAll(".contact-item");
    let startContact = (number - 1) * PAGE_SIZE;
    let endContact = Math.min(number * PAGE_SIZE - 1, allContacts.length);
    for (let i = 0; i < allContacts.length; i++) {
        if (i >= startContact && i <= endContact)
            allContacts[i].style.display = "block";
        else
            allContacts[i].style.display = "none";
    }
    document.querySelectorAll(".pagination li a").forEach(page => {
        page.classList.remove("active");
    });
    document.querySelector(`.pagination li:nth-of-type(${number}) a`).classList.add("active");
}

setupPagination();
showPage(1);