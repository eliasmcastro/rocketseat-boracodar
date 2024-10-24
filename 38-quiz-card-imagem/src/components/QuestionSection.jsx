import { Option } from './Option';

export function QuestionSection({
  question,
  options,
  correctAnswer,
  selectAnswerIndex,
  handleOptionClick,
}) {
  return (
    <>
      <h1 className="text-2xl leading-[28.8px] font-bold text-center mb-[69px] max-w-[413px] mx-auto">
        {question}
      </h1>

      <ul className="flex w-full justify-between">
        {options.map((option, index) => {
          const answer = option.text === correctAnswer;

          return (
            <Option
              key={option.id}
              src={option.id}
              optionText={option.text}
              index={index}
              answer={answer}
              handleOptionClick={handleOptionClick}
              isSelected={index === selectAnswerIndex}
            />
          );
        })}
      </ul>
    </>
  );
}
