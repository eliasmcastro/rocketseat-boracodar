export function Option({
  index,
  answer,
  handleOptionClick,
  isSelected,
  src,
  optionText,
}) {
  const cardClassName =
    isSelected && answer
      ? 'border-green-light'
      : isSelected && !answer
      ? 'border-red-light'
      : 'border-gray-3';

  let svg = 'empty-circle';

  if (isSelected && answer) {
    svg = 'correct-answer';
  } else if (isSelected && !answer) {
    svg = 'wrong-answer';
  }

  return (
    <li
      onClick={() => handleOptionClick(index)}
      className={`${cardClassName} flex flex-col px-8 py-[46px] bg-gray-5  rounded-lg w-[250px] border-x-[3.194px] border-t-[3.194px] border-b-[6.387px] ease-in-out duration-300 cursor-pointer hover:bg-gray-4`}
    >
      <img
        className="self-end translate-x-[19px] -translate-y-[33px]"
        src={`./src/assets/${svg}.svg`}
        alt=""
      />
      <img className="w-full" src={`./src/assets/${src}.svg`} alt="" />
      <span className="text-center text-base font-normal leading-[17.6px] mt-6">
        {optionText}
      </span>
    </li>
  );
}
