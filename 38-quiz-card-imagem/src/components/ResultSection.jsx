export function ResultSection({
  correctAnswers,
  handleTryAgainButton,
  questionsLength,
}) {
  return (
    <div>
      <h1 className="text-2xl leading-[28.8px] font-bold text-center mb-[69px] max-w-[413px] mx-auto">
        Resultado
      </h1>
      <p className="text-base text-center mb-[69px] max-w-[413px] mx-auto">
        Você acertou <span className="font-bold">{correctAnswers}</span> de{' '}
        <span className="font-bold">{questionsLength}</span> questões
      </p>
      <button
        onClick={handleTryAgainButton}
        className="flex items-center justify-center bg-gray-4 px-5 py-3 gap-[6px] rounded-lg border border-gray-3 mx-auto hover:bg-gray-3 ease-in-out duration-300"
      >
        Tentar novamente
      </button>
    </div>
  );
}
