//criação da HOF doingThings

const wakeUp = () => 'Acordando!!!'

const coffe = () => 'Bora tomar café!!!'

const sleep = () => 'Partiu dormir!!!'

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
}

doingThings(wakeUp);
doingThings(coffe);
doingThings(sleep);