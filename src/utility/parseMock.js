function simulateDataCall(mockData) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, mockData);
  });
}

export default simulateDataCall;