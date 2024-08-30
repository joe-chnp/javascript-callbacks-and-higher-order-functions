//Exercise #2: At Least Five Function

function atLeastFive(array, operation, roomNumber) {
  // Start coding here
  if(operation(array)>=5){
    return `นักเรียนห้องที่ ${roomNumber} ผ่านเกณฑ์ ✅`
  } else {
    return `นักเรียนห้องที่ ${roomNumber} ไม่ผ่านเกณฑ์ ❌`
  };
};

function evaluation(array){
  let evaluated = []
  for(let score of array){
    if(score>70){
      evaluated.push(score);
    };
  };
  return evaluated.length;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, evaluation, 1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, evaluation, 2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, evaluation, 3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);



