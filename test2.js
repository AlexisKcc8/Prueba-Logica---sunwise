const test2 = (rangeYears) => {
  if (rangeYears === undefined || rangeYears === " ") {
    console.log("No ha ingresado datos");
    return;
  }
  //obtenemos la entrada y separamos ambos años
  let years = rangeYears.split("-");
  let data1 = years[0].trim();
  let data2 = years[1].trim();

  if (data1.length > 6 || data2.length > 6) {
    console.log("Los datos ingresados no son correctos");
    return;
  }
  //Obtenemos los años y las eras
  let year1 = parseInt(data1.slice(0, -2));
  let was1 = data1.slice(-2);
  let year2 = parseInt(data2.slice(0, -2));
  let was2 = data2.slice(-2);

  if ((was1 !== "AD" && was1 !== "BC") || (was2 !== "AD" && was2 !== "BC")) {
    console.log("las eras estan mal");
    return;
  }

  // validamos si las eras son ANTES o DESPUES de cristo
  let numRoman1 = isBeforeChrist(year1, was1);
  let numRoman2 = isBeforeChrist(year2, was2);

  //obtenemos la salida
  let salida = maxLetters(numRoman1, numRoman2);
  console.log("salida:", salida);
};

const isBeforeChrist = (year, was) => {
  if (was === "BC") {
    //BC - antes de cristo
    return 754 - year;
  } else {
    // AD - despues de cristo
    return 753 + year;
  }
};
// funcion para convertir de decimal a romano
const convertToRoman = (num) => {
  let NumbersRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let str = "";
  for (let i of Object.keys(NumbersRoman)) {
    let q = Math.floor(num / NumbersRoman[i]);
    num -= q * NumbersRoman[i];
    str += i.repeat(q);
  }
  return str;
};

const maxLetters = (year1, year2) => {
  let value = year1;
  let letters = "";
  let amount = 0;
  let max_value = 0;
  let myCountArray = [];

  do {
    letters = convertToRoman(value); //Se convierte el valor en letras romanas
    amount = letters.length; //Obtenego las letras romanas en su cantidad
    myCountArray.push(amount); //Se agrega el valor al array de las cantidades de letras
    value += 1;
  } while (value <= year2);
  // obtiene el numero mayor del array
  max_value = Math.max(...myCountArray);

  return max_value;
};

test2("1BC-1AD");
test2("753BC-747BC");
test2("2000AD-2012AD");
