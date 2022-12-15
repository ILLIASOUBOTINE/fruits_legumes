

class Fruit {
  name;
  avril;
  mai;
  juin;
  juillet;
  constructor(name, avril = "", mai = "", juin = "", juillet = "") {
   
    this.avril = avril;
    this.mai = mai;
    this.juin = juin;
    this.juillet = juillet;
    this.name = name;
   
  }
}

function creatFruit(arr) {
  let fruit = new Fruit(arr[0]);
  //  console.dir(fruit);
    let i = 0;
    for (let prop in fruit) {
      fruit[prop] = arr[i];
      i++;
    }
  
  console.dir(fruit);
  return fruit;
}

let abricot = new Fruit("Abricot");
abricot.avril = 10;
abricot.juin = 5.78;
console.log(abricot);

let pomme = new Fruit("Pomme");
pomme.avril = 8.2;
pomme.juin = 3.54;
console.log(pomme);

let arrTotal = [pomme, abricot];
let addFruit = document.querySelector(".addFruit");

const myTable = document.querySelector(".myTable");
const addTable = document.querySelector(".addTable");
const aficherFruit = document.querySelector(".aficherFruit");

const body = document.querySelector("body");

function afishageTable(arr) {
  myTable.append(afishageTh(arr[0]));

  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");

    for (let prop in arr[i]) {
      let td = document.createElement("td");
      td.innerHTML = arr[i][prop];

      tr.append(td);
    }
    myTable.append(tr);
  }
  console.log(myTable);
  addTable.classList.add("visib");
}

function afishageTh(obj) {
  let tr = document.createElement("tr");

  for (let prop in obj) {
    let th = document.createElement("th");
    th.innerHTML = prop;
    // console.log(prop);
    tr.append(th);
  }

  console.log(tr);
  return tr;
}

let togleAfichFruit = false;

 let input1;
  let inputMois;
  let p1;
  let  strTotale;

aficherFruit.addEventListener("click", () => {
 



  if (togleAfichFruit) {
    let result = input1.value;
    let resultMois = inputMois.value;
    let objFruit = arrTotal.find((e)=>{
        return e.name === result;
    })

    

    for (let prop in objFruit) {
     
       
     if(prop === resultMois){
        strTotale = `${strTotale} ${objFruit[prop]} euros le kilo en ${prop}`;
      }else if (prop === "name") {
        strTotale = objFruit[prop] + " coutait";
      } 
    }
     p1.innerHTML = strTotale;
     input1.classList.add("visib");
     inputMois.classList.add("visib");
     
  }else {
     input1 = document.createElement("input");
     inputMois = document.createElement("input");
     p1 = document.createElement("p");
    //  p1.innerHTML = "";
    
    body.append(input1);
    body.append(inputMois);
    body.append(p1);
    input1.classList.remove("visib");
    inputMois.classList.remove("visib");
  }
 

 
  togleAfichFruit = !togleAfichFruit
})

function afishageTh(obj) {
  let tr = document.createElement("tr");

  for (let prop in obj) {
    let th = document.createElement("th");
    th.innerHTML = prop;
    // console.log(prop);
    tr.append(th);
  }

  console.log(tr);
  return tr;
}

let arrAddTable = [];
let arrInput;
let counter = false;

addFruit.addEventListener("click", () => {
  if (!counter) {
    addTable.append(afishageTh(arrTotal[0]));

    let tr = document.createElement("tr");
    for (let prop in arrTotal[0]) {
      let td = document.createElement("td");
      let input1 = document.createElement("input");
      td.append(input1);

      tr.append(td);
    }
    addTable.append(tr);
    console.dir(addTable);
    console.log(addTable.childNodes[1]);
    arrInput = addTable.childNodes[1];
    console.dir(arrInput);
    addTable.classList.remove("visib")
  } else {
    for (let i = 0; i < arrInput.childNodes.length; i++) {
      console.dir((arrAddTable[i] = arrInput.childNodes[i].firstChild.value));
    }

    arrTotal.push(creatFruit(arrAddTable));
    console.log(creatFruit(arrAddTable));
    console.log(arrTotal);

    cleenNode(myTable);
    afishageTable(arrTotal);
    console.log(arrAddTable);

    cleenNode(addTable);
    addTable.classList.add("visib")
  }

  counter = !counter;
});

function cleenNode(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// afishageTh(pomme);

afishageTable(arrTotal);
