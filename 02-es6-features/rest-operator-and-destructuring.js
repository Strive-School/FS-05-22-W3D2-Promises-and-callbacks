// ...

const array = ["🍎", "🍊", "🍓"];

/* const [apple,orange,strawberry] = array;
console.log({
    apple,
    orange,
    strawberry
})
 */

// when you destructure something , ...rest must be at the end
//const [apple,orange,...rest] = array;

/* console.log({
    apple,
    orange,
    reset
})
 */

// destructuring an object

const person = {
  name: "ubeyt",
  age: 29,
  location: "Koh Lipe",
};

/* const {name,...rest} = person;
console.log({
    name,
    rest,
}) */

// you can use destruct without spread operator (rest operator)

const { name } = person;

// with rest (spread) operator you can copy things, exclude things.

const rgb = ["red", "blue", "green"];
const bw = ["black", "white"];

const [red, ...nonRed] = rgb;
const allColors = [...nonRed, ...bw];

/* console.log({rgb})
console.log({bw})
console.log({allColors}) */

/* console.log(rgb)
console.log(bw)
console.log(allColors) */

// with rest operator you can copy attributes

const ubeyt = {
  name: "ubeyt",
  age: 29,
};

let riccardo = {
  name: "riccardo",
  age: 45,
};

//const { age, ...rest } = ubeyt;

/* riccardo = {
  ...riccardo,
  ...rest,
};
 */
//console.log(riccardo)

// nested destruct

const address = {
  city: "Burton",
  state: "Michigan",
  zip: 48509,
  phone: "(810) 515-1535",
  country: "US",
  geoLocation: {
    lat: 43.013976,
    long: -83.59579,
  },
};


//const { city, state, zip, phone, country, geoLocation:{lat,long} } = address;
/* 
console.log({
  city,
  state,
  zip,
  phone,
  country,
  lat,
  long
});
 */

//  renaming during destructuring

const { city, state, zip:zipCode, phone, country, geoLocation:{lat,long} } = address;

/* console.log({
    zipCode
}) */

// you can destructure function parameters too

function logGeoLocation({geoLocation:{lat,long}}){
    console.log({lat,long})
}



//logGeoLocation(address)

/* 
const numbers = [0,1,3,4]

const [zero,one,three,...four] = numbers;

console.log({
    zero,
    one,
    three,
    four
})
 */

const getRandomNumber = () => Math.ceil(Math.random()*100)

const randomNumbersArray = Array.from({length:2}).map((el,i)=>getRandomNumber())

const [firstRandomNumber,secondRandomNumber,thirdRandomNumber,fourthOne,...rest] = randomNumbersArray;

console.log({
    randomNumbersArray,
    firstRandomNumber,
    secondRandomNumber,
    thirdRandomNumber, // this will be undefined
    fourthOne,  // this will be undefined
    rest // this will be empty
})

// you can get letters array out of string with spread operator


const nameOfUbeyt = "ubeyt"
const lastNameOfUbeyt="demir"

const lettersOfUbeyt = [...nameOfUbeyt]
const lettersOfLastName = [...lastNameOfUbeyt]

const fullNameLetters = lettersOfUbeyt.concat(lettersOfLastName)

