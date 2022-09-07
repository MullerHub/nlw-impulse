import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(  
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type é requerido')
    }

    if (!comment) {
      throw new Error('Type é requerido')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Formato invalido de screenshot')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join('\n')
    })
}
}