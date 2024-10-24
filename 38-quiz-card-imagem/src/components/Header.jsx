import logo from './../assets/logo.svg';
import greenCheck from './../assets/green-check.svg';

export function Header({ correctAnswers }) {
  return (
    <header className="flex items-center justify-between w-full">
      <img src={logo} alt="Logo QuizTime" />

      <div className="flex items-center justify-center bg-gray-4 px-5 py-3 gap-[6px] rounded-lg border border-green-light">
        <img src={greenCheck} alt="" />
        <span className="text-xl font-bold leading-5 text-green-light">
          {correctAnswers}
        </span>
      </div>
    </header>
  );
}
