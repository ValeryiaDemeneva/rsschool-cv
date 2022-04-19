import { createImage, createInput, createTag } from "../../helper/helper";

const main = document.querySelector(".main");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo");
const underline = document.querySelector(".underline");
const underlinePets = document.querySelector(".underline_pets");
const underlineHelp = document.querySelector(".underline_help");
const underlineContacts = document.querySelector(".underline_contacts");
const menuLink = document.querySelector(".menu__link");
const linkShelter = document.querySelector("._first");
const getToKnow = document.querySelector(".button_last");
const logo = document.querySelector(".header__logo");
const listOfLinks = document.querySelectorAll(".menu__link");
const linkPets = document.querySelector("._second");
const ContactsLink = document.querySelector("._fourth");
const helpLink = document.querySelector("._third");
const br = document.getElementById("br");
const br1 = document.getElementById("br1");
console.log(screen.width);

const petsWrapper = createTag("div", "pets_wrapper", "");
const petsTittle = createTag("div", "pets_tittle", "");
const petsIcons1 = createTag("div", "pets_icons1", "");
const petsIcons2 = createTag("div", "pets_icons2", "");
const petsArrows = createTag("div", "pets_arrows", "");
const iconKatrine = createTag("div", "icon_Katrine", "");
const iconJennifer = createTag("div", "icon_Jennifer", "");
const iconWoody = createTag("div", "icon_Woody", "");
const iconSophia = createTag("div", "icon_Sophia", "");
const iconTimmy = createTag("div", "icon_Timmy", "");
const iconCharly = createTag("div", "icon_Charly", "");
const iconScarlett = createTag("div", "icon_Scarlett", "");
const iconFreddie = createTag("div", "icon_Freddie", "");
const petsArrow1 = createTag("div", "style_arrows_before", "<<");
const petsArrow2 = createTag("div", "style_arrows_before", "<");
const petsArrow3 = createTag("div", "style_arrows_active", "1");
const petsArrow4 = createTag("div", "style_arrows_after", ">");
const petsArrow5 = createTag("div", "style_arrows_after", ">>");
const petsH2 = createTag(
  "h2",
  "",
  "Our friends who <br>are looking for a house"
);
const imgKatrine = createImage("img", "./shelter/assets/images/Katrine.png");
const imgJennifer = createImage("img", "./shelter/assets/images/Jennifer.png");
const imgWoody = createImage("img", "./shelter/assets/images/Woody.png");
const imgSophia = createImage("img", "./shelter/assets/images/Sophia.png");
const imgTimmy = createImage("img", "./shelter/assets/images/Timmy.png");
const imgCharly = createImage("img", "./shelter/assets/images/Charly.png");
const imgScarlett = createImage("img", "./shelter/assets/images/Scarlett.png");
const imgFreddie = createImage("img", "./shelter/assets/images/Freddie.png");
const nameKatrine = createTag("h3", "", "Katrine");
const nameJennifer = createTag("h3", "", "Jennifer");
const nameWoody = createTag("h3", "", "Woody");
const nameSophia = createTag("h3", "", "Sophia");
const nameTimmy = createTag("h3", "", "Timmy");
const nameCharly = createTag("h3", "", "Charly");
const nameScarlett = createTag("h3", "", "Scarlett");
const nameFreddie = createTag("h3", "", "Freddie");
const buttonKatrine = createInput("input", "button", "Learn more");
const buttonJennifer = createInput("input", "button", "Learn more");
const buttonWoody = createInput("input", "button", "Learn more");
const buttonSophia = createInput("input", "button", "Learn more");
const buttonTimmy = createInput("input", "button", "Learn more");
const buttonCharly = createInput("input", "button", "Learn more");
const buttonScarlett = createInput("input", "button", "Learn more");
const buttonFreddie = createInput("input", "button", "Learn more");

main.after(petsWrapper);
petsArrow1.dataset.disabled;
petsArrow2.dataset.disabled;
petsWrapper.id = "ourpets";

petsWrapper.append(petsTittle);
petsWrapper.append(petsIcons1);
petsWrapper.append(petsIcons2);
petsWrapper.append(petsArrows);
petsTittle.append(petsH2);
petsIcons1.append(iconKatrine);
petsIcons1.append(iconJennifer);
petsIcons1.append(iconWoody);
petsIcons1.append(iconSophia);
petsIcons2.append(iconTimmy);
petsIcons2.append(iconCharly);
petsIcons2.append(iconScarlett);
petsIcons2.append(iconFreddie);
petsArrows.append(petsArrow1);
petsArrows.append(petsArrow2);
petsArrows.append(petsArrow3);
petsArrows.append(petsArrow4);
petsArrows.append(petsArrow5);
iconKatrine.append(imgKatrine);
iconJennifer.append(imgJennifer);
iconWoody.append(imgWoody);
iconSophia.append(imgSophia);
iconTimmy.append(imgTimmy);
iconCharly.append(imgCharly);
iconScarlett.append(imgScarlett);
iconFreddie.append(imgFreddie);
iconKatrine.append(nameKatrine);
iconJennifer.append(nameJennifer);
iconWoody.append(nameWoody);
iconSophia.append(nameSophia);
iconTimmy.append(nameTimmy);
iconCharly.append(nameCharly);
iconScarlett.append(nameScarlett);
iconFreddie.append(nameFreddie);
iconKatrine.append(buttonKatrine);
iconJennifer.append(buttonJennifer);
iconWoody.append(buttonWoody);
iconSophia.append(buttonSophia);
iconTimmy.append(buttonTimmy);
iconCharly.append(buttonCharly);
iconScarlett.append(buttonScarlett);
iconFreddie.append(buttonFreddie);

iconKatrine.classList.add("style_icons");
iconJennifer.classList.add("style_icons");
iconWoody.classList.add("style_icons");
iconSophia.classList.add("style_icons");
iconTimmy.classList.add("style_icons");
iconCharly.classList.add("style_icons");
iconScarlett.classList.add("style_icons");
iconFreddie.classList.add("style_icons");
petsWrapper.classList.add("display_none");
underlinePets.classList.add("display_none");
underlineHelp.classList.add("display_none");
underlineContacts.classList.add("display_none");
const footerPets = document.querySelector(".footer__content");
console.log(footerPets);

linkShelter.addEventListener("click", (event) => {
  event.preventDefault();
  footerPets.classList.remove("footerPets");
  header.classList.remove("pets_header");
  headerLogo.classList.remove("pets_header__logo");
  wrapper.classList.remove("background_none");
  main.classList.remove("display_none");
  petsWrapper.classList.add("display_none");
  underlinePets.classList.add("display_none");
  underline.classList.remove("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.add("display_none");
  menuLink.classList.remove("menu_link_pets");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});

linkPets.addEventListener("click", (event) => {
  event.preventDefault();
  footerPets.classList.add("footerPets");
  menuLink.classList.add("menu_link_pets");
  header.classList.add("pets_header");
  headerLogo.classList.add("pets_header__logo");
  wrapper.classList.add("background_none");
  main.classList.add("display_none");
  petsWrapper.classList.remove("display_none");
  underline.classList.add("display_none");
  underlinePets.classList.remove("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.add("display_none");
  listOfLinks.forEach((item) => {
    item.classList.add("menu_link_pets");
  });
  linkPets.classList.add("main_link_color_pets");
});

helpLink.addEventListener("click", (event) => {
  footerPets.classList.remove("footerPets");
  header.classList.remove("pets_header");
  headerLogo.classList.remove("pets_header__logo");
  wrapper.classList.remove("background_none");
  main.classList.remove("display_none");
  petsWrapper.classList.add("display_none");
  underlinePets.classList.add("display_none");
  underline.classList.add("display_none");
  underlineHelp.classList.remove("display_none");
  underlineContacts.classList.add("display_none");
  menuLink.classList.remove("menu_link_pets");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});

ContactsLink.addEventListener("click", (event) => {
  footerPets.classList.remove("footerPets");
  header.classList.remove("pets_header");
  headerLogo.classList.remove("pets_header__logo");
  wrapper.classList.remove("background_none");
  main.classList.remove("display_none");
  petsWrapper.classList.add("display_none");
  underlinePets.classList.add("display_none");
  underline.classList.add("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.remove("display_none");
  menuLink.classList.remove("menu_link_pets");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});

getToKnow.addEventListener("click", () => {
  footerPets.classList.remove("footerPets");
  main.classList.add("display_none");
  underline.classList.add("display_none");
  underlinePets.classList.remove("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.add("display_none");
  petsWrapper.classList.remove("display_none");
  menuLink.classList.add("menu_link_pets");
  header.classList.add("pets_header");
  headerLogo.classList.add("pets_header__logo");
  wrapper.classList.add("background_none");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});

logo.addEventListener("click", (event) => {
  event.preventDefault();
  footerPets.classList.remove("footerPets");
  header.classList.remove("pets_header");
  headerLogo.classList.remove("pets_header__logo");
  wrapper.classList.remove("background_none");
  main.classList.remove("display_none");
  petsWrapper.classList.add("display_none");
  underlinePets.classList.add("display_none");
  underline.classList.remove("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.add("display_none");
  menuLink.classList.remove("menu_link_pets");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});

const burgerShelter = document.querySelector(".menu_active");
burgerShelter.addEventListener("click", (event) => {
  event.preventDefault();
  footerPets.classList.remove("footerPets");
  header.classList.remove("pets_header");
  headerLogo.classList.remove("pets_header__logo");
  wrapper.classList.remove("background_none");
  main.classList.remove("display_none");
  petsWrapper.classList.add("display_none");
  underlinePets.classList.add("display_none");
  underline.classList.remove("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.add("display_none");
  menuLink.classList.remove("menu_link_pets");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});
const burgerOurPets = document.querySelector(".menu_our");
console.log(burgerOurPets);
burgerOurPets.addEventListener("click", (event) => {
  event.preventDefault();
  footerPets.classList.add("footerPets");
  menuLink.classList.add("menu_link_pets");
  header.classList.add("pets_header");
  headerLogo.classList.add("pets_header__logo");
  wrapper.classList.add("background_none");
  main.classList.add("display_none");
  petsWrapper.classList.remove("display_none");
  underline.classList.add("display_none");
  underlinePets.classList.remove("display_none");
  underlineHelp.classList.add("display_none");
  underlineContacts.classList.add("display_none");
  listOfLinks.forEach((item) => {
    item.classList.add("menu_link_pets");
  });
  linkPets.classList.add("main_link_color_pets");
});

helpLink.addEventListener("click", (event) => {
  footerPets.classList.remove("footerPets");
  header.classList.remove("pets_header");
  headerLogo.classList.remove("pets_header__logo");
  wrapper.classList.remove("background_none");
  main.classList.remove("display_none");
  petsWrapper.classList.add("display_none");
  underlinePets.classList.add("display_none");
  underline.classList.add("display_none");
  underlineHelp.classList.remove("display_none");
  underlineContacts.classList.add("display_none");
  menuLink.classList.remove("menu_link_pets");
  listOfLinks.forEach((item) => {
    item.classList.remove("menu_link_pets");
  });
  linkPets.classList.remove("main_link_color_pets");
});



