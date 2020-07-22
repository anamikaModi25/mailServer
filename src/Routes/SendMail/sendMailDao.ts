import { Connection, severusClient } from '../../db/connection';

export default class sendMailDao {
    public static async sendMails(recepent: any, subject: any, content: any) {
       console.log(recepent, subject, content, "recepent");
    }
}