function simulateDataCall(mockData) {
  console.log('THE GOODIES:', mockData);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 200, mockData);
  });
}

export default simulateDataCall;