// 0.4535923
// const initialValuesKg = [
//   {
//     disckg1: 0.5,
//     disckg2: 1,
//     disckg3: 2.5,
//     disckg4: 5,
//     disckg5: 10,
//     disckg6: 15,
//     disckg7: 20,
//     disckg8: 25,
//   },
// ];

// const initialValueslb = [
//   {
//     disclb1: 10,
//     disclb2: 25,
//     disclb3: 35,
//     disclb4: 45,
//   },
// ];

const initialValue = [
  {
    id: "kg0",
    type: "grif",
    weight: 20,
  },
  {
    id: "kg1",
    type: "kg",
    weight: 0.5,
  },
  {
    id: "kg2",
    type: "kg",
    weight: 1,
  },
  {
    id: "kg3",
    type: "kg",
    weight: 2.5,
  },
  {
    id: "kg4",
    type: "kg",
    weight: 5,
  },
  {
    id: "kg5",
    type: "kg",
    weight: 10,
  },
  {
    id: "kg6",
    type: "kg",
    weight: 15,
  },
  {
    id: "kg7",
    type: "kg",
    weight: 20,
  },
  {
    id: "kg8",
    type: "kg",
    weight: 25,
  },
  {
    id: "lb1",
    type: "lb",
    weight: 10,
  },
  {
    id: "lb2",
    type: "lb",
    weight: 25,
  },
  {
    id: "lb3",
    type: "lb",
    weight: 35,
  },
  {
    id: "lb4",
    type: "lb",
    weight: 45,
  },
];

const grif = initialValue
  .filter((el) => el.type === "grif")
  .map((el) => el.weight)
  .join();
const KgDisc = initialValue.filter((el) => el.type === "kg");
const LbDisc = initialValue.filter((el) => el.type === "lb");

// convert lb to kg and add value to object
const LbDiscInKg = LbDisc.map((el) => {
  const convert = el.weight * 0.4535923;
  return (el.weightInKg = convert);
});

console.log(KgDisc);
console.log(LbDisc);

const arrKg = KgDisc.map((el) => el.weight); // [0.5, 1, 2.5, 5, 10, 15, 20, 25]
const arrLbKg = LbDisc.map((el) => el.weightInKg); // [4.535923, 11.339807500000001, 15.8757305, 20.4116535]

//
const mainArr = arrKg.concat(arrLbKg);
// console.log(mainArr);
const sort = [...mainArr].sort((a, b) => a - b);
console.log(sort);
console.log("grif", grif);

const summ = mainArr.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log("summ all numbers", summ);

const findWeight = function (x) {
  console.log("input record", x);
  const OneDics = (x - grif) / 2;
  console.log("Two sides", OneDics * 2);
  console.log("One side", OneDics);
  return OneDics;
};

findWeight(30);
