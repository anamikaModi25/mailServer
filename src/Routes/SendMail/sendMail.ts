import * as express from 'express';
export var sendMailRouter = express.Router();
import sendMailDao from './sendMailDao';
import MailUtils from '../../Utils/mailUtils';

sendMailRouter.post('/mail', (req, res) => {
    try {
        let recepent = req.body.recepent;
        let sub = req.body.subject as any;
        let content = req.body.content as any;
        MailUtils.sendMails(recepent, sub, content)
        // sendMailDao.sendMails(recepent, sub, content)
        res.status(200).send('send mail');
    } catch (error) {
        
    }   
});
