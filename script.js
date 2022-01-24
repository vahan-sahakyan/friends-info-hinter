let currentYear = 2021;
const birthYears = [];

const tableBody = document.querySelector('tbody');
let rowsCount = tableBody.childElementCount;
const enter = document.querySelector('.enter');
const inputCurrentYear = document.querySelector('.current-year-input');
const add = document.querySelector('.addRow');

const inputFirstName = document.querySelector('.first-name-input');
const inputLastName = document.querySelector('.last-name-input');
const inputBirthYear = document.querySelector('.birth-year-input');
const inputJob = document.querySelector('.job-input');
const inputBirthday = document.querySelector('.birthday-input');

//////////////////////////////////////
// START addRow
let firstName = inputFirstName.value;
let lastName = inputLastName.value;
let birthYear = inputBirthYear.value;
let job = inputJob.value;
let birthday = inputBirthday.value;

// FUNCTION START
const addRow = function () {
  firstName = inputFirstName.value;
  lastName = inputLastName.value;
  birthYear = inputBirthYear.value;
  job = inputJob.value;
  birthday = inputBirthday.value;

  if (
    firstName &&
    lastName &&
    birthYear &&
    true + true &&
    true &&
    job &&
    birthday
  ) {
    tableBody.innerHTML += `<tr class="row-${rowsCount}">
  <th class="id-${rowsCount}">${rowsCount}</th>
  <td class="first-name-${rowsCount}">${firstName}</td>
  <td class="last-name-${rowsCount}">${lastName}</td>
  <td class="birth-year-${rowsCount}">${birthYear}</td>
  <td class="age-${rowsCount}"></td>
  <td class="job-${rowsCount}">${job}</td>
  <td class="birthday-${rowsCount}">${birthday}</td>
</tr>`;
    rowsCount++;
    calcAge();
    adderInputs.map(i => (i.value = ''));
  }
};
// FUNCTION END
const adderInputs = [
  inputFirstName,
  inputLastName,
  inputBirthYear,
  inputJob,
  inputBirthday,
];
const addOnEnter = function (e) {
  e.key === 'Enter' && addRow();
};

adderInputs.forEach(selector => {
  selector.addEventListener('keydown', addOnEnter);
});
add.addEventListener('click', addRow);
// END addRow
//////////////////////////////////////

//////////////////////////////////////
//  START calcAge
const calcAge = function () {
  for (let i = 0; i < rowsCount; i++) {
    birthYears[i] = Number(
      document.querySelector(`.birth-year-${i}`).textContent
    );
    document.querySelector(`.age-${i}`).textContent =
      currentYear - birthYears[i];
  }
};
calcAge();
inputCurrentYear.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    currentYear = Number(inputCurrentYear.value);
    calcAge();
  }
});
enter.addEventListener('click', function () {
  currentYear = Number(inputCurrentYear.value);
  calcAge();
});
// END calcAge
//////////////////////////////////////
