const fs = require("fs");
const nanoid = require("nanoid");

const races = require("./races");
const { maleNames, femaleNames } = require("./names");
const owners = require("./owners");

const FEMALE = "fêmea";
const MALE = "macho";
const AMOUNT = 1000;

function generateRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

phoneNumbers = {};

generatePhoneNumber = () => {
  const start = Math.random() >= 0.5 ? 980000000 : 990000000;
  const phoneNumber =
    51000000000 + Math.floor(start + Math.random() * 10000000);
  if (!!phoneNumbers[phoneNumber]) {
    const NewPhoneNumber = generatePhoneNumber();
    return NewPhoneNumber;
  } else {
    phoneNumbers[phoneNumber] = true;
    return phoneNumber;
  }
};

generateDog = () => {
  const dateOfBirth = generateRandomDate(new Date(2011, 0, 1), new Date());

  const { name: raceName, picture } = races[
    Math.floor(Math.random() * races.length)
  ];

  const defaultInfo = {
    id: nanoid(),
    race: raceName,
    picture,
    dateOfBirth,
    owner: {
      name: owners[Math.floor(Math.random() * owners.length)],
      phoneNumber: generatePhoneNumber()
    },
    dateOfLastService: generateRandomDate(dateOfBirth, new Date()),
    castrated: Math.random() >= 0.42
  };
  if (Math.random() >= 0.5)
    return {
      ...defaultInfo,
      gender: FEMALE,
      name: femaleNames[Math.floor(Math.random() * femaleNames.length)]
    };
  else
    return {
      ...defaultInfo,
      gender: MALE,
      name: maleNames[Math.floor(Math.random() * maleNames.length)]
    };
};

const orderDate = (prev, next) =>
  prev.dateOfLastService.getTime() > next.dateOfLastService.getTime() ? -1 : 1;

fs.writeFile(
  "dogs.json",
  JSON.stringify(
    new Array(AMOUNT)
      .fill(0)
      .map(generateDog)
      .sort(orderDate)
  ),
  function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  }
);
