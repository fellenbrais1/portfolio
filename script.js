/////////////////////////////////////////////////////////////////////////////////////////
// CODE START

"use strict";
console.log(`script.js is running`);

/////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES

/* Image modal elements */
const imageModal = document.querySelector(".image_modal");
const blocker = document.querySelector(".blocker");

/* Sound elements */
const clickSound = document.getElementById("button_click_sound");

/* Image elements */
const benfordsPage1Image = document.querySelector(".benfords_page1");
const benfordsPage2Image = document.querySelector(".benfords_page2");

const datawizardPage1Image = document.querySelector(".datawizard_page1");
const datawizardPage2Image = document.querySelector(".datawizard_page2");

const clsPage1Image = document.querySelector(".cls_page1");
const clsPage2Image = document.querySelector(".cls_page2");

const backgammonPage1Image = document.querySelector(".backgammon_page1");
const backgammonPage2Image = document.querySelector(".backgammon_page2");

const benfordsAppPage1Image = document.querySelector(".benfords_app_page1");
const benfordsAppPage2Image = document.querySelector(".benfords_app_page2");

const omnifoodPage1Image = document.querySelector(".omnifood_page1");
const omnifoodPage2Image = document.querySelector(".omnifood_page2");

const murderMansionPage1Image = document.querySelector(".murder_mansion_page1");
const murderMansionPage2Image = document.querySelector(".murder_mansion_page2");

/* Toggle elements */
const benfordsSpecToggle = document.querySelector(".benfords_page_spec");
const benfordsAchToggle = document.querySelector(".benfords_page_ach");
const benfordsChalToggle = document.querySelector(".benfords_page_chal");

const datawizardSpecToggle = document.querySelector(".datawizard_page_spec");
const datawizardAchToggle = document.querySelector(".datawizard_page_ach");
const datawizardChalToggle = document.querySelector(".datawizard_page_chal");

const clsSpecToggle = document.querySelector(".cls_page_spec");
const clsAchToggle = document.querySelector(".cls_page_ach");
const clsChalToggle = document.querySelector(".cls_page_chal");

const backgammonSpecToggle = document.querySelector(".backgammon_page_spec");
const backgammonAchToggle = document.querySelector(".backgammon_page_ach");
const backgammonChalToggle = document.querySelector(".backgammon_page_chal");

const benfordsAppSpecToggle = document.querySelector(".benfords_app_page_spec");
const benfordsAppAchToggle = document.querySelector(".benfords_app_page_ach");
const benfordsAppChalToggle = document.querySelector(".benfords_app_page_chal");

const omnifoodSpecToggle = document.querySelector(".omnifood_page_spec");
const omnifoodAchToggle = document.querySelector(".omnifood_page_ach");
const omnifoodChalToggle = document.querySelector(".omnifood_page_chal");

const murderMansionSpecToggle = document.querySelector(
  ".murder_mansion_page_spec"
);
const murderMansionAchToggle = document.querySelector(
  ".murder_mansion_page_ach"
);
const murderMansionChalToggle = document.querySelector(
  ".murder_mansion_page_chal"
);

const allToggles = [
  benfordsSpecToggle,
  benfordsAchToggle,
  benfordsChalToggle,
  datawizardSpecToggle,
  datawizardAchToggle,
  datawizardChalToggle,
  clsSpecToggle,
  clsAchToggle,
  clsChalToggle,
  backgammonSpecToggle,
  backgammonAchToggle,
  backgammonChalToggle,
  benfordsAppSpecToggle,
  benfordsAppAchToggle,
  benfordsAppChalToggle,
  omnifoodSpecToggle,
  omnifoodAchToggle,
  omnifoodChalToggle,
  murderMansionSpecToggle,
  murderMansionAchToggle,
  murderMansionChalToggle,
];

/* Dropdown list elements */
const benfordsSpecList = document.querySelector(".benfords_page_spec_list");
const benfordsAchList = document.querySelector(".benfords_page_ach_list");
const benfordsChalList = document.querySelector(".benfords_page_chal_list");

const datawizardSpecList = document.querySelector(".datawizard_page_spec_list");
const datawizardAchList = document.querySelector(".datawizard_page_ach_list");
const datawizardChalList = document.querySelector(".datawizard_page_chal_list");

const clsSpecList = document.querySelector(".cls_page_spec_list");
const clsAchList = document.querySelector(".cls_page_ach_list");
const clsChalList = document.querySelector(".cls_page_chal_list");

const backgammonSpecList = document.querySelector(".backgammon_page_spec_list");
const backgammonAchList = document.querySelector(".backgammon_page_ach_list");
const backgammonChalList = document.querySelector(".backgammon_page_chal_list");

const benfordsAppSpecList = document.querySelector(
  ".benfords_app_page_spec_list"
);
const benfordsAppAchList = document.querySelector(
  ".benfords_app_page_ach_list"
);
const benfordsAppChalList = document.querySelector(
  ".benfords_app_page_chal_list"
);

const omnifoodSpecList = document.querySelector(".omnifood_page_spec_list");
const omnifoodAchList = document.querySelector(".omnifood_page_ach_list");
const omnifoodChalList = document.querySelector(".omnifood_page_chal_list");

const murderMansionSpecList = document.querySelector(
  ".murder_mansion_page_spec_list"
);
const murderMansionAchList = document.querySelector(
  ".murder_mansion_page_ach_list"
);
const murderMansionChalList = document.querySelector(
  ".murder_mansion_page_chal_list"
);

const allDropdowns = [
  benfordsSpecList,
  benfordsAchList,
  benfordsChalList,
  datawizardSpecList,
  datawizardAchList,
  datawizardChalList,
  clsSpecList,
  clsAchList,
  clsChalList,
  backgammonSpecList,
  backgammonAchList,
  backgammonChalList,
  benfordsAppSpecList,
  benfordsAppAchList,
  benfordsAppChalList,
  omnifoodSpecList,
  omnifoodAchList,
  omnifoodChalList,
  murderMansionSpecList,
  murderMansionAchList,
  murderMansionChalList,
];

/////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENERS

/* Dropdown Toggles */
benfordsSpecToggle.addEventListener("click", () => {
  showDropdown("benfordsSpec");
});

benfordsAchToggle.addEventListener("click", () => {
  showDropdown("benfordsAch");
});

benfordsChalToggle.addEventListener("click", () => {
  showDropdown("benfordsChal");
});

datawizardSpecToggle.addEventListener("click", () => {
  showDropdown("datawizardSpec");
});

datawizardAchToggle.addEventListener("click", () => {
  showDropdown("datawizardAch");
});

datawizardChalToggle.addEventListener("click", () => {
  showDropdown("datawizardChal");
});

clsSpecToggle.addEventListener("click", () => {
  showDropdown("clsSpec");
});

clsAchToggle.addEventListener("click", () => {
  showDropdown("clsAch");
});

clsChalToggle.addEventListener("click", () => {
  showDropdown("clsChal");
});

backgammonSpecToggle.addEventListener("click", () => {
  showDropdown("backgammonSpec");
});

backgammonAchToggle.addEventListener("click", () => {
  showDropdown("backgammonAch");
});

backgammonChalToggle.addEventListener("click", () => {
  showDropdown("backgammonChal");
});

benfordsAppSpecToggle.addEventListener("click", () => {
  showDropdown("benfordsAppSpec");
});

benfordsAppAchToggle.addEventListener("click", () => {
  showDropdown("benfordsAppAch");
});

benfordsAppChalToggle.addEventListener("click", () => {
  showDropdown("benfordsAppChal");
});

omnifoodSpecToggle.addEventListener("click", () => {
  showDropdown("omnifoodSpec");
});

omnifoodAchToggle.addEventListener("click", () => {
  showDropdown("omnifoodAch");
});

omnifoodChalToggle.addEventListener("click", () => {
  showDropdown("omnifoodChal");
});

murderMansionSpecToggle.addEventListener("click", () => {
  showDropdown("murderMansionSpec");
});

murderMansionAchToggle.addEventListener("click", () => {
  showDropdown("murderMansionAch");
});

murderMansionChalToggle.addEventListener("click", () => {
  showDropdown("murderMansionChal");
});

/* Background blocker */
blocker.addEventListener("click", () => {
  hideImageModal();
});

/* Image zoom toggles */
benfordsPage1Image.addEventListener("click", () => {
  const imageSrc = "images/benfords_page_1.png";
  showImageModal(imageSrc);
});

benfordsPage2Image.addEventListener("click", () => {
  const imageSrc = "images/benfords_page_2.png";
  showImageModal(imageSrc);
});

datawizardPage1Image.addEventListener("click", () => {
  const imageSrc = "images/datawizard_page1.png";
  showImageModal(imageSrc);
});

datawizardPage2Image.addEventListener("click", () => {
  const imageSrc = "images/datawizard_page2.png";
  showImageModal(imageSrc);
});

clsPage1Image.addEventListener("click", () => {
  const imageSrc = "images/cls_page1.png";
  showImageModal(imageSrc);
});

clsPage2Image.addEventListener("click", () => {
  const imageSrc = "images/cls_page2.png";
  showImageModal(imageSrc);
});

backgammonPage1Image.addEventListener("click", () => {
  const imageSrc = "images/backgammon_page1.png";
  showImageModal(imageSrc);
});

backgammonPage2Image.addEventListener("click", () => {
  const imageSrc = "images/backgammon_page2.png";
  showImageModal(imageSrc);
});

benfordsAppPage1Image.addEventListener("click", () => {
  const imageSrc = "images/benfords_app_page1.png";
  showImageModal(imageSrc);
});

benfordsAppPage2Image.addEventListener("click", () => {
  const imageSrc = "images/benfords_app_page2.png";
  showImageModal(imageSrc);
});

omnifoodPage1Image.addEventListener("click", () => {
  const imageSrc = "images/omnifood_page1.png";
  showImageModal(imageSrc);
});

omnifoodPage2Image.addEventListener("click", () => {
  const imageSrc = "images/omnifood_page2.png";
  showImageModal(imageSrc);
});

murderMansionPage1Image.addEventListener("click", () => {
  const imageSrc = "images/murder_mansion_page1.png";
  showImageModal(imageSrc);
});

murderMansionPage2Image.addEventListener("click", () => {
  const imageSrc = "images/murder_mansion_page2.png";
  showImageModal(imageSrc);
});

/////////////////////////////////////////////////////////////////////////////////////////
/* FUNCTIONS */

/* Sound function */
function playClickSound() {
  clickSound.play();
}

/*Image modal functions */
function showImageModal(imageSrc) {
  playClickSound();
  imageModal.classList.remove("hidden");
  blocker.classList.remove("hidden");
  imageModal.innerHTML = `<img id="image_showcase"
                    src=${imageSrc}
                  />`;
}

function hideImageModal() {
  console.log(`Running...`);
  playClickSound();
  imageModal.classList.add("hidden");
  blocker.classList.add("hidden");
}

/* Dropdown functions */
function showDropdown(elementClicked) {
  playClickSound();
  switch (elementClicked) {
    case "benfordsSpec":
      removeAllDropdowns(benfordsSpecList);
      removeAllHighlights(benfordsSpecToggle);
      benfordsSpecList.classList.toggle("hidden");
      benfordsSpecToggle.classList.toggle("highlight");
      break;
    case "benfordsAch":
      removeAllDropdowns(benfordsAchList);
      removeAllHighlights(benfordsAchToggle);
      benfordsAchList.classList.toggle("hidden");
      benfordsAchToggle.classList.toggle("highlight");
      break;
    case "benfordsChal":
      removeAllDropdowns(benfordsChalList);
      removeAllHighlights(benfordsChalToggle);
      benfordsChalList.classList.toggle("hidden");
      benfordsChalToggle.classList.toggle("highlight");
      break;
    case "datawizardSpec":
      removeAllDropdowns(datawizardSpecList);
      removeAllHighlights(datawizardSpecToggle);
      datawizardSpecList.classList.toggle("hidden");
      datawizardSpecToggle.classList.toggle("highlight");
      break;
    case "datawizardAch":
      removeAllDropdowns(datawizardAchList);
      removeAllHighlights(datawizardAchToggle);
      datawizardAchList.classList.toggle("hidden");
      datawizardAchToggle.classList.toggle("highlight");
      break;
    case "datawizardChal":
      removeAllDropdowns(datawizardChalList);
      removeAllHighlights(datawizardChalToggle);
      datawizardChalList.classList.toggle("hidden");
      datawizardChalToggle.classList.toggle("highlight");
      break;
    case "clsSpec":
      removeAllDropdowns(clsSpecList);
      removeAllHighlights(clsSpecToggle);
      clsSpecList.classList.toggle("hidden");
      clsSpecToggle.classList.toggle("highlight");
      break;
    case "clsAch":
      removeAllDropdowns(clsAchList);
      removeAllHighlights(clsAchToggle);
      clsAchList.classList.toggle("hidden");
      clsAchToggle.classList.toggle("highlight");
      break;
    case "clsChal":
      removeAllDropdowns(clsChalList);
      removeAllHighlights(clsChalToggle);
      clsChalList.classList.toggle("hidden");
      clsChalToggle.classList.toggle("highlight");
      break;
    case "backgammonSpec":
      removeAllDropdowns(backgammonSpecList);
      removeAllHighlights(backgammonSpecToggle);
      backgammonSpecList.classList.toggle("hidden");
      backgammonSpecToggle.classList.toggle("highlight");
      break;
    case "backgammonAch":
      removeAllDropdowns(backgammonAchList);
      removeAllHighlights(backgammonAchToggle);
      backgammonAchList.classList.toggle("hidden");
      backgammonAchToggle.classList.toggle("highlight");
      break;
    case "backgammonChal":
      removeAllDropdowns(backgammonChalList);
      removeAllHighlights(backgammonChalToggle);
      backgammonChalList.classList.toggle("hidden");
      backgammonChalToggle.classList.toggle("highlight");
      break;
    case "benfordsAppSpec":
      removeAllDropdowns(benfordsAppSpecList);
      removeAllHighlights(benfordsAppSpecToggle);
      benfordsAppSpecList.classList.toggle("hidden");
      benfordsAppSpecToggle.classList.toggle("highlight");
      break;
    case "benfordsAppAch":
      removeAllDropdowns(benfordsAppAchList);
      removeAllHighlights(benfordsAppAchToggle);
      benfordsAppAchList.classList.toggle("hidden");
      benfordsAppAchToggle.classList.toggle("highlight");
      break;
    case "benfordsAppChal":
      removeAllDropdowns(benfordsAppChalList);
      removeAllHighlights(benfordsAppChalToggle);
      benfordsAppChalList.classList.toggle("hidden");
      benfordsAppChalToggle.classList.toggle("highlight");
      break;
    case "omnifoodSpec":
      removeAllDropdowns(omnifoodSpecList);
      removeAllHighlights(omnifoodSpecToggle);
      omnifoodSpecList.classList.toggle("hidden");
      omnifoodSpecToggle.classList.toggle("highlight");
      break;
    case "omnifoodAch":
      removeAllDropdowns(omnifoodAchList);
      removeAllHighlights(omnifoodAchToggle);
      omnifoodAchList.classList.toggle("hidden");
      omnifoodAchToggle.classList.toggle("highlight");
      break;
    case "omnifoodChal":
      removeAllDropdowns(omnifoodChalList);
      removeAllHighlights(omnifoodChalToggle);
      omnifoodChalList.classList.toggle("hidden");
      omnifoodChalToggle.classList.toggle("highlight");
      break;
    case "murderMansionSpec":
      removeAllDropdowns(murderMansionSpecList);
      removeAllHighlights(murderMansionSpecToggle);
      murderMansionSpecList.classList.toggle("hidden");
      murderMansionSpecToggle.classList.toggle("highlight");
      break;
    case "murderMansionAch":
      removeAllDropdowns(murderMansionAchList);
      removeAllHighlights(murderMansionAchToggle);
      murderMansionAchList.classList.toggle("hidden");
      murderMansionAchToggle.classList.toggle("highlight");
      break;
    case "murderMansionChal":
      removeAllDropdowns(murderMansionChalList);
      removeAllHighlights(murderMansionChalToggle);
      murderMansionChalList.classList.toggle("hidden");
      murderMansionChalToggle.classList.toggle("highlight");
      break;
  }
}

function removeAllDropdowns(currentlySelected) {
  allDropdowns.forEach((element) => {
    if (element === currentlySelected) {
      console.log(`Same class as one clicked on`);
    } else {
      element.classList.add("hidden");
    }
  });
}

function removeAllHighlights(currentlySelected) {
  allToggles.forEach((element) => {
    if (element === currentlySelected) {
      console.log(`Same class as clicked on`);
    } else {
      element.classList.remove("highlight");
    }
  });
}

/////////////////////////////////////////////////////////////////////////////////////////
// CODE END
