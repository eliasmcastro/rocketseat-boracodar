import { useState } from 'react';
import { questions } from './data.js';

import { Header } from './components/Header';
import { QuestionSection } from './components/QuestionSection';
import { Footer } from './components/Footer.jsx';
import { ResultSection } from './components/ResultSection.jsx';

const INITIAL_SCORE = 0;

export function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [showResult, setShowResult] = useState(false);

  const { question, options, correctAnswer } = questions[currentQuestion];

  const handleOptionClick = (index) => {
    setSelectedAnswerIndex(index);
  };

  const handleNextButtonClick = () => {
    const isCorrectAnswer = options[selectedAnswerIndex].text === correctAnswer;

    setScore((currentState) =>
      isCorrectAnswer ? currentState + 1 : currentState
    );

    const totalNumberOfQuestions = questions.length - 1;

    if (currentQuestion !== totalNumberOfQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setSelectedAnswerIndex(null);
  };

  const handleTryAgainButton = () => {
    setScore(INITIAL_SCORE);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col h-full pt-[40px] max-w-[842px] m-auto gap-[20px]">
      <Header correctAnswers={score} />

      <main>
        {!showResult ? (
          <QuestionSection
            question={question}
            options={options}
            correctAnswer={correctAnswer}
            selectAnswerIndex={selectedAnswerIndex}
            handleOptionClick={handleOptionClick}
          />
        ) : (
          <ResultSection
            correctAnswers={score}
            handleTryAgainButton={handleTryAgainButton}
            questionsLength={questions.length}
          />
        )}
      </main>

      <Footer
        currentQuestion={currentQuestion}
        questionsLength={questions.length}
        handleNextButtonClick={handleNextButtonClick}
        selectedAnswerIndex={selectedAnswerIndex}
      />
    </div>
  );
}
