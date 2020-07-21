import { Connection, stageClient } from '../../db/connection';
export default class SampleDAO {
    public static async getAllSamples() {
        let connection = await Connection.getOpenConnection(stageClient);
        return await connection.query('select * from sample');
    }
}