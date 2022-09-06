import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de uma barata'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma ferramenta adicional'
    }
  }
}

export type FeedBackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
   

      {!feedbackType ? (
       <FeedbackTypeStep onFeedbackChanged={setFeedbackType} />
      ) : (
         <FeedbackContentStep 
         restartFeedbackRequested={handleRestartFeedback}
         feedbackType={feedbackType} />
      )}

      <footer>
        Feito com 💛 pelo
        <a
          className="underline underline-offset-2"
          href="https://github.com/mullerhub"
        >
          MullerHub
        </a>
      </footer>
    </div>
  )
}
