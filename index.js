// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let timeToWord;
  const hourWords = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

  let hour = parseInt(time.split(":")[0]);
  let minute = parseInt(time.split(":")[1]);

  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  if (minute === 0) {
    timeToWord = `${hourWords[hour % 12]} o'clock`;
  } else if (minute === 30) {
    timeToWord = `half past ${hourWords[hour]}`;
  } else if (minute === 45) {
    timeToWord = `quarter to ${hourWords[(hour + 1) % 12]}`;
  } else if (minute === 15) {
    timeToWord = `quarter past ${hourWords[hour]}`;
  } else if (minute < 30) {
    const minuteWord = getMinuteWord(minute);
    timeToWord = `${minuteWord} past ${hourWords[hour]}`;
  } else {
    const remainingMin = 60 - minute;
    const minuteWord = getMinuteWord(remainingMin);
    timeToWord = `${minuteWord} to ${hourWords[(hour + 1) % 12]}`;
  }

  return timeToWord;
}

function getMinuteWord(minute) {
  const minuteWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine"
  };

  return minuteWords[minute];
}

module.exports = { convertTimeToWords };