import { CloseButton } from '../../CloseButton'
import img from '../../../assets/accomplish.svg'

interface FeedbackSuccessStepProps {
  restartFeedbackRequested: () => void
}

export function FeedbackSuccessStep({
  restartFeedbackRequested
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img className="w-16 h-16" src={img} />

        <span className="text-xl mt-2"> Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={restartFeedbackRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
