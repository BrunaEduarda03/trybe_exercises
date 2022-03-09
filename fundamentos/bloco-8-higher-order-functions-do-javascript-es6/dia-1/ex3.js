const CORRECT_ANSWERS = ['C','A','D','B','E'];

const STUDENTS_ANSWERS = ['C','A','D','B','A'];

const compareAnswers = (correctAnswers,studentAnswers)  => {
    if(correctAnswers === studentAnswers)
        return 1;
    if(studentAnswers === 'N.A')
        return 0;

    return -0.5;
};


const countPoints = (correctAnswers,studentAnswers,callback) =>{
    cont = 0;
    for (let i = 0; i < correctAnswers.length; i += 1) {
        const compare = callback(correctAnswers[i],studentAnswers[i]);
        cont += compare;
    }
    return `Resultado final: ${cont} pontos `
}

console.log(countPoints(CORRECT_ANSWERS,STUDENTS_ANSWERS,compareAnswers));