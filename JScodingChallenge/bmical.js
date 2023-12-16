function bmiCal(weight, height) {
  const Weight = weight;
  const Height = height * height;
  const bmiWeight = Weight / Height;
  return bmiWeight;
}

const bmi = bmiCal(90, 1.7272);
console.log(bmi);
