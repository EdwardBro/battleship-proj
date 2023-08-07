const getHardModeSearchMatrix = (n = 4) => {
    switch (n) {
      case 2:
        return [
          [1, 0],
          [0, 1],
        ];
      case 3:
        return [
          [0, 0, 1],
          [0, 1, 0],
          [1, 0, 0],
        ].reverse();
  
      default:
        return [
          [0, 0, 0, 1],
          [0, 0, 1, 0],
          [0, 1, 0, 0],
          [1, 0, 0, 0],
        ];
    }
  };
  
  const getSearchMatrix = (n = 4, isHardMode) =>
    isHardMode
      ? getHardModeSearchMatrix(n)
      : new Array(n)
          .fill(null)
          .map((x, z) => {
            let a = new Array(n).fill(0);
            a[z] = 1;
            return a;
          })
          .sort(() => Math.random() - 0.5);
  
  const getSearchCoords = (n = 4, isHardMode) => {
    let arr = [];
    const searchArr = getSearchMatrix(n, isHardMode);
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (searchArr[y % n][x % n] == 1) arr.push([x, y]);
      }
    }
  
    return arr;
  };
  
  console.log(getSearchCoords(2, true).length);
  