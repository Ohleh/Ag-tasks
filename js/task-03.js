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

const LbDisc = initialValue.filter((el) => el.type === "lb");

// convert to kg and add value to object
const LbDiscInKg = LbDisc.map((el) => {
  const convert = el.weight * 0.4535923;
  return (el.weightInKg = convert);
});

const KgDisc = initialValue.filter((el) => el.type === "kg");

console.log(KgDisc);
console.log(LbDisc);
