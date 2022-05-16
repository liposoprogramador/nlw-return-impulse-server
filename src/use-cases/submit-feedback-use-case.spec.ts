import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";


const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => { //Cria um switc de testes
    it('should be able to submit a feedback', async () => {
       await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,987qeqwe46qwdq498e7',
        })).resolves.not.toThrow();
        
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });



    it('should not be able to submit feedback wifthout type', async () => {
       await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,987qeqwe46qwdq498e7',
        })).rejects.toThrow();
    });



    it('should not be able to submit feedback wifthout Comment', async () => {
       await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,987qeqwe46qwdq498e7',
        })).rejects.toThrow();
    });



    it('should not be able to submit feedback wifthout Comment', async () => {
       await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    });
});