let directions = {
  IZQUIERDA: "L",
  DERECHA: "R",
  ARRIBA: "U",
  ABAJO: "D",
};
const test1 = (numberTestCase, ...gridsTestCase) => {
  // let myGrids = gridsTestCase;
  if (numberTestCase !== gridsTestCase.length) {
    console.error(
      "El número de casos de uso no coincide con el número esperado de grids, por favor reviselo"
    );
    return;
  }
  for (const cell in gridsTestCase) {
    let row = gridsTestCase[cell][0];
    let column = gridsTestCase[cell][1];
    console.log(getDirection(row, column));
  }
};
const getDirection = (row, column) => {
  let totalCells = row * column;
  let matriz = Array.from(Array(row), () => new Array(column).fill(0));
  let valueCell = 1;
  let rowStart = 0;
  let rowEnd = row - 1;
  let columnStart = 0;
  let columnEnd = column - 1;
  let resultInfo =
    row == column ? "Matriz Cuadrada de " : "Matriz Rectangular de ";
  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    //izquierda-derecha
    for (let col = columnStart; col <= columnEnd; col++) {
      matriz[rowStart][col] = valueCell++;
      if (matriz[rowStart][col] === totalCells) {
        return `${resultInfo} ${row} * ${column}: ${totalCells} celdas \n dirección: ${directions.DERECHA}`;
      }
    }
    //arriba-abajo
    for (let fila = rowStart + 1; fila <= rowEnd; fila++) {
      matriz[fila][columnEnd] = valueCell++;
      if (matriz[fila][columnEnd] === totalCells) {
        return `${resultInfo} ${row} * ${column}: ${totalCells} celdas \n dirección: ${directions.ABAJO}`;
      }
    }
    //derecha-izquierda
    for (let col = columnEnd - 1; col >= columnStart; col--) {
      matriz[rowEnd][col] = valueCell++;
      if (matriz[rowEnd][col] === totalCells) {
        return `${resultInfo} ${row} * ${column}: ${totalCells} celdas \n dirección: ${directions.IZQUIERDA}`;
      }
    }
    //abajo-arriba
    for (let fila = rowEnd - 1; fila >= rowStart + 1; fila--) {
      matriz[fila][columnStart] = valueCell++;
      if (matriz[fila][columnStart] === totalCells) {
        return `${resultInfo} ${row} * ${column}: ${totalCells} celdas \n dirección: ${directions.ARRIBA}`;
      }
    }

    rowStart++;
    rowEnd--;
    columnStart++;
    columnEnd--;
  }
};
test1(6, [1, 1], [2, 2], [3, 1], [3, 3], [4, 7], [8, 4]);
