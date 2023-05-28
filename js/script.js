const btn = document.querySelector('button');
const question = document.querySelector('.equation');
const hard = document.querySelector('.harder');
let multipli = hard.value;

function randomNum(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function generateQuestion() {
    const y = randomNum(-multipli * 3, multipli * 3);
    const kx = randomNum(-multipli * 3, multipli * 3);
    // const answer = (y - c) / kx;
    const answer = randomNum(-multipli * 3, multipli * 3);
    const c = -(answer * kx - y);

    return [kx, c, y, answer]
}

// let answer = 0;

let i;

function returnAnswer() {
    i = generateQuestion();
    if (i[1] === 0) {
        question.textContent = i[0] + 'x' + ' = ' + i[2];
    } else if (i[1] < 0) {
        question.textContent = i[0] + 'x - ' + -i[1] + ' = ' + i[2];
    }
    else {
        question.textContent = i[0] + 'x + ' + i[1] + ' = ' + i[2];
    }
}

returnAnswer()

btn.onclick = () => {
    if (document.querySelector('.question__input').value == i[3]) console.log(true)
    else console.log(false);
    multipli = hard.value;
    returnAnswer();
}

// answer = (y - c) / kx

