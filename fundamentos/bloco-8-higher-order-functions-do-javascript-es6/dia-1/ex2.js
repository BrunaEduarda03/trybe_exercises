const numberCheck = (myNumber,number) => myNumber === number;

const lottery = (myNumber,callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    console.log(number);
    return callback(myNumber,number) ? `Parabéns você ganhou!`: `Tente novamente!`;

};

console.log(lottery(3,numberCheck));
