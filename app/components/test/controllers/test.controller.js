'use strict';

angular.module('flexion.test').controller('TestCtrl', TestCtrl);

function TestCtrl(TestService, $location) {
    var test = this;

    test.testservice = TestService;
    test.currentQuestionID = 1;
    test.currentQuestion = {};
    test.questionResult = '';
    test.question = getQuestion;
    test.answer = getAnswer;
    test.next = nextQuestion;
    test.answered = false;
    test.results = false;
    test.correct = 0;

    init();

    function init() {
        return test.question();
    }

    function getQuestion() {
        for (var i=0; i < test.testservice.questions.length; i++) {
            if (test.testservice.questions[i].id === test.currentQuestionID) {
                test.currentQuestion = test.testservice.questions[i];
            }
        }
    }

    function getAnswer(bool) {
        for (var i=0; i < test.testservice.answers.length; i++) {
            if (test.testservice.answers[i].id === test.currentQuestionID) {
                test.testservice.answers[i].answer = bool;
                var answer = test.testservice.answers[i];
                console.log(answer);
            }
        }

        test.answered = true;
        test.questionResult = (answer.selected === bool) ? 'correct' : 'incorrect';
    }

    function nextQuestion() {
        test.answered = false;

        if (test.currentQuestionID < test.testservice.questions.length)
        {
            test.currentQuestionID++;
            test.question();
        } else {
            test.results = true;
            numberCorrect();
        }
    }

    function numberCorrect() {
        for (var i=0; i < test.testservice.answers.length; i++) {
            if (test.testservice.answers[i].selected === test.testservice.answers[i].answer) {
                test.correct++;
            }
        }
    }
}
