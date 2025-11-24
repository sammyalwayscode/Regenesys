// console.log("Error Handling");

try {
  let result = riskOperation();
  //   let result = 54
  console.log(result);
} catch (error) {
  console.log("An Error Occoured", error.message);
} finally {
  console.log("Operation Compcted");
}
