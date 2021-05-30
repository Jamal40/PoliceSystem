//The Citizem Search (Modal part)
const showInfoButton = document.querySelector(".show-info");

const bankStatementTableBody = document.querySelector(".bank-statement tbody");
let bankeStatements = [
  { number: 1, objectName: "Transaction", time: Date.now() },
  { number: 2, objectName: "Withdrawal", time: Date.now() },
  { number: 3, objectName: "Deposit", time: Date.now() },
];

const vehiclesTableBody = document.querySelector(".vehicles-table tbody");
let vehicles = [
  {
    plate: "xyz 123",
    buyingTime: Date.now(),
    model: "Mercedes",
    img: "https://picsum.photos/500",
  },
  {
    plate: "abc 456",
    buyingTime: Date.now(),
    model: "BMW",
    img: "https://picsum.photos/400",
  },
  {
    plate: "tyx 532",
    buyingTime: Date.now(),
    model: "Brelliance",
    img: "https://picsum.photos/300",
  },
  {
    plate: "ceg 745",
    buyingTime: Date.now(),
    model: "Audi",
    img: "https://picsum.photos/200",
  },
];

const housesTableBody = document.querySelector(".houses-table tbody");
let houses = [
  { type: "Villa", buyingTime: Date.now() },
  { type: "Appartment", buyingTime: Date.now() },
  { type: "Appartment", buyingTime: Date.now() - 31540000000 },
];

const criminalRecordTableBody = document.querySelector(
  ".criminal-record tbody"
);
let criminalRecords = [
  {
    name: "John",
    Chrgees: "Stealing",
    arrestedTime: Date.now() - 63080000000,
    jailTime: 1,
    police: "Scott",
  },
  {
    name: "John",
    chrgees: "Harassment",
    arrestedTime: Date.now() - 93080000594,
    jailTime: 2,
    police: "Sara",
  },
];
const fillBankStatementTable = () => {
  bankStatementTableBody.innerHTML = "";
  for (let proccess of bankeStatements) {
    numberCell = document.createElement("td");
    numberCell.textContent = proccess.number;

    nameCell = document.createElement("td");
    nameCell.textContent = proccess.objectName;

    timeCell = document.createElement("td");
    timeCell.textContent = new Date(proccess.time).toISOString();

    tableRow = document.createElement("tr");
    tableRow.append(numberCell);
    tableRow.append(nameCell);
    tableRow.append(timeCell);

    bankStatementTableBody.append(tableRow);
  }
};

const fillVehiclesTable = () => {
  vehiclesTableBody.innerHTML = "";

  for (let vehicle of vehicles) {
    let plateCell = document.createElement("td");
    plateCell.textContent = vehicle.plate;

    let buyingDateCell = document.createElement("td");
    buyingDateCell.textContent = new Date(vehicle.buyingTime).toISOString();

    let modelCell = document.createElement("td");
    modelCell.textContent = vehicle.model;

    let photoCell = document.createElement("td");
    let modelPhoto = document.createElement("img");
    modelPhoto.src = vehicle.img;
    photoCell.append(modelPhoto);

    let tableRow = document.createElement("tr");
    tableRow.append(plateCell);
    tableRow.append(buyingDateCell);
    tableRow.append(modelCell);
    tableRow.append(photoCell);

    vehiclesTableBody.append(tableRow);
  }
};

const fillHousesTable = () => {
  housesTableBody.innerHTML = "";

  for (let house of houses) {
    let houseTypeCell = document.createElement("td");
    houseTypeCell.textContent = house.type;

    let houseBuyingTimeCell = document.createElement("td");
    houseBuyingTimeCell.textContent = new Date(house.buyingTime).toISOString();

    let tableRow = document.createElement("tr");
    tableRow.append(houseTypeCell);
    tableRow.append(houseBuyingTimeCell);

    housesTableBody.append(tableRow);
  }
};

const fillCriminalRecordTable = () => {
  criminalRecordTableBody.innerHTML = "";
  for (let record of criminalRecords) {
    let nameCell = document.createElement("td");
    nameCell.textContent = record.name;

    let chargeCell = document.createElement("td");
    chargeCell.textContent = record.charges;

    let arrestedTimeCell = document.createElement("td");
    arrestedTimeCell.textContent = new Date(record.arrestedTime).toISOString();

    let jailTimeCell = document.createElement("td");
    jailTimeCell.textContent = record.jailTime;

    let policeCell = document.createElement("td");
    policeCell.textContent = record.police;

    let tableRow = document.createElement("tr");
    tableRow.append(nameCell);
    tableRow.append(chargeCell);
    tableRow.append(arrestedTimeCell);
    tableRow.append(jailTimeCell);
    tableRow.append(policeCell);

    criminalRecordTableBody.append(tableRow);
  }
};

showInfoButton.addEventListener("click", () => {
  $(".ui.modal.citizen-info").modal("show");
  fillBankStatementTable();
  fillVehiclesTable();
  fillHousesTable();
  fillCriminalRecordTable();
});

//The Vehicle Search
let resultVehicle = {
  img: "https://picsum.photos/500",
  owner: "John",
  model: "BMW",
};

document
  .querySelector(".plate-inquiry i.search.icon")
  .addEventListener("click", () => {
    const ownerElement = document.querySelector(
      ".plate-inquiry span.vehicle-owner"
    );
    ownerElement.textContent = resultVehicle.owner;

    const modelElement = document.querySelector(
      ".plate-inquiry span.vehicle-model"
    );
    modelElement.textContent = resultVehicle.model;

    const imgElement = document.querySelector(".plate-inquiry img");
    imgElement.src = resultVehicle.img;

    const resultElement = document.querySelector(".plate-inquiry .inq-result");
    resultElement.style.height = "150px";
  });

//Duty List

let duties = [
  { officerName: "Michael", duty: "Yes", rank: 2, missionPassed: "No" },
  { officerName: "Sara", duty: "Yes", rank: 1, missionPassed: "No" },
  { officerName: "Justing", duty: "No", rank: 1, missionPassed: "No" },
];

const fillDutyListTable = () => {
  const dutyListTableBody = document.querySelector(".duty-list tbody");
  dutyListTableBody.innerHTML = "";

  for (duty of duties) {
    const officerNameCell = document.createElement("td");
    officerNameCell.textContent = duty.officerName;

    const dutyCell = document.createElement("td");
    dutyCell.textContent = duty.duty;

    const rankCell = document.createElement("td");
    rankCell.textContent = duty.rank;

    const missionPassedCell = document.createElement("td");
    missionPassedCell.textContent = duty.missionPassed;

    const tableRow = document.createElement("tr");
    tableRow.append(officerNameCell);
    tableRow.append(dutyCell);
    tableRow.append(rankCell);
    tableRow.append(missionPassedCell);

    if (duty.duty.toLowerCase() == "yes") {
      const locationCell = document.createElement("td");
      locationCell.innerHTML =
        '<a class="btn"><i class="fas fa-map-marked-alt"></i></a>';
      tableRow.append(locationCell);
    }

    dutyListTableBody.append(tableRow);
  }
};

fillDutyListTable();

// Crime Database
$(".ui.dropdown.crime-select").dropdown();

//Menu Code
const allMenuItems = document.querySelectorAll(".main-window > .menu .item");
console.log(allMenuItems);
let currentDest = "welcome";
for (const menuItem of allMenuItems) {
  menuItem.addEventListener("click", (event) => {
    let destination = event.target.getAttribute("data-nav-dest");
    let currentPage = document.querySelector(
      `[data-nav-name = "${currentDest}"]`
    );
    let destinationPage = document.querySelector(
      `[data-nav-name = "${destination}"]`
    );

    let currentTab = document.querySelector(
      `[data-nav-dest = "${currentDest}"]`
    );

    currentPage.style.display = "none";
    currentTab.classList.remove("active");

    destinationPage.style.display = "flex";
    menuItem.classList.add("active");

    currentDest = destination;
  });
}
