import { Pool } from 'pg';

const stageParams = {
    user: 'deadpool',
    password: 'mikealph@',
    host: 'riverusappidentifier.craz02prps3z.ap-south-1.rds.amazonaws.com',
    port: 5432,
    database: 'stage',
    ssl: true
}

const severusParams = {
    user: 'deadpool',
    password: 'mikealph@',
    host: 'riverus-useractivity.craz02prps3z.ap-south-1.rds.amazonaws.com',
    port: 5432,
    database: 'severus',
    ssl: true
}

export let stageClient = new Pool({
    user: stageParams.user,
    host: stageParams.host,
    database: stageParams.database,
    password: stageParams.password,
    port: stageParams.port
});


export let severusClient = new Pool({
    user: severusParams.user,
    host: severusParams.host,
    database: severusParams.database,
    password: severusParams.password,
    port: severusParams.port
});

export class Connection {
    private static instance: any = null;
    public static async getOpenConnection(client: Pool): Promise<Pool> {
        if (this.instance !== null) {
            return client;
        } else {
            this.instance = await client.connect();
            return this.instance;
        }
    }
}