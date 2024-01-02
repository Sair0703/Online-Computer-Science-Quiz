const express = require('express');
const app = express();

app.get('/quizResults', (req,res) => {
    const quizResults = getResults();
    res.json(quizResults);
});

function getResults() {
    const quizResults = [
    {   quiz: 'CS Quiz Question 1' , description: 'HTML stands for Hyper Text Markup Language. It is not a processor', score: '0/1'},
    {   quiz: 'CS Quiz Question 2', description: ' CSS stands for Cascading Style Sheet, not Colorful Style Sheet, which means the answer is correct', score: '1/1'},
    {   quiz: 'CS Quiz Question 3', description: 'PHP stands for Hypertext Preprocessor, so your answer is correct', score: '1/1'},
    {   quiz: 'CS Quiz Question 4', description: ' The S in SQL stands for Stucture, it is not a stylesheet.', score: '0/1'},
    {   quiz: 'CS Quiz Question 5', description: 'XML stands for exenstible and markup, it is not an executuble multiple language because it is a markup.', score: '0/1'},
    {   quiz: 'CS Quiz  ', description: 'Total Score.', score: '2/5'},
    ];
    return quizResults;
}

app.listen(3000, () => console.log('Listening on port 3000'));