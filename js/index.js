const sentenceInput = document.querySelector('.input');

const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');

function getLength(input) {
    return input.length;
}
function getNumberOfWords(word) {
    return word.split(/\S+/).length -1;
}
function getNumberOfSentece(sentences) {
    const spliters = /[.!?]+/;
    return sentences.split(spliters).length - 1;
}
function getNumberOfNumbers(numbers) {
    const spliters = /[1234567890]/;
    return numbers.split(spliters).length - 1;
}

sentenceInput.addEventListener('input', () => {
    const value = sentenceInput.value;

    answer1.textContent = getLength(value);
    answer2.textContent = getNumberOfWords(value);
    answer3.textContent = getNumberOfSentece(value);
    answer4.textContent = getNumberOfNumbers(value);
});