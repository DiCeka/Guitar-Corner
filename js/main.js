const burger = document.querySelector(".burger-button");
const nav = document.querySelector(".index-nav");

burger.addEventListener("click", function()
{
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
});