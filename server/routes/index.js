const express = require("express");
const router = express.Router();
const categoriesData = require("../assets/categories.json");

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/categories", (req, res) => {
  console.log("getting categories");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(categoriesData).status(200);
});

router.get("/initializeBoard", (req, res) => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  const MAX_BOARD_TILES = 25;

  let categoriesArr = categoriesData[0].categories;
  const colorsEnum = {
    black: {
      value: "dark",
      count: 0,
    },
    blue: {
      value: "primary",
      count: 0,
    },
    red: {
      value: "danger",
      count: 0,
    },
    yellow: {
      value: "warning",
      count: 0,
    },
  };

  let pickRandomSet = new Set();
  let categoriesArrLen = categoriesArr.length;
  let arrayIdx;
  let color;
  let outputJsonArray = [];

  while (pickRandomSet.size != MAX_BOARD_TILES) {
    arrayIdx = Math.floor(Math.random() * categoriesArrLen);

    if (!pickRandomSet.has(categoriesArr[arrayIdx])) {
      pickRandomSet.add(categoriesArr[arrayIdx]);
    }
  }
  let pickRandomArray = [...pickRandomSet];

  for (let i = 0; i < pickRandomArray.length; i++) {
    let pickAnotherColor = true;
    let boardCell_json = {clicked:false};
    while (pickAnotherColor) {
      color = Object.keys(colorsEnum)[
        Math.floor(Math.random() * Object.keys(colorsEnum).length)
      ];
      switch (color) {
        case "black":
          if (colorsEnum.black.count >= 1) {
            continue;
          } else {
            boardCell_json["word"] = pickRandomArray[i];
            boardCell_json["color"] = colorsEnum[color].value;
            outputJsonArray.push(boardCell_json);
            colorsEnum.black.count++;
            pickAnotherColor = false;
            break;
          }
        case "blue":
          if (colorsEnum.blue.count >= 8) {
            continue;
          } else {
            boardCell_json["word"] = pickRandomArray[i];
            boardCell_json["color"] = colorsEnum[color].value;
            outputJsonArray.push(boardCell_json);
            colorsEnum.blue.count++;
            pickAnotherColor = false;
            break;
          }
        case "red":
          if (colorsEnum.red.count >= 8) {
            continue;
          } else {
            boardCell_json["word"] = pickRandomArray[i];
            boardCell_json["color"] = colorsEnum[color].value;
            outputJsonArray.push(boardCell_json);
            colorsEnum.red.count++;
            pickAnotherColor = false;
            break;
          }
        case "yellow":
          if (colorsEnum.yellow.count >= 8) {
            continue;
          } else {
            boardCell_json["word"] = pickRandomArray[i];
            boardCell_json["color"] = colorsEnum[color].value;
            outputJsonArray.push(boardCell_json);
            colorsEnum.yellow.count++;
            pickAnotherColor = false;
            break;
          }

        default:
          break;
      }
    }
  }
  // console.log(pickRandom);
  res.json(shuffleArray(outputJsonArray));
});

module.exports = router;
