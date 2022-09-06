import { FeedBackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

interface FeedbackTypeStepProps {
  onFeedbackChanged: (type: FeedBackType) => void
}

export function FeedbackTypeStep({ onFeedbackChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          console.log(key, value)
          return (
            <button
              key={key}
              className="bg-zinc-800 flex-1 flex flex-col items-center rounded-lg py-5 w-24 gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none "
              onClick={() => onFeedbackChanged(key as FeedBackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
