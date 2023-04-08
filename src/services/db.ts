import * as db from 'mssql';

const config = {
    user: `${process.env.USERNAME}`,
    password: `${process.env.PASS}`,
    server: `${process.env.SERVER}`,
    database: `${process.env.DATABASE}`,
    port: Number(process.env.PORT),
    options: {
      instanceName: 'SQLEXPRESS',
      trustedConnection: true,
      trustServerCertificate: true
    }
}

export default async function ExcuteQuery(query: string, options = {}) {
    try {
        const conn = new db.ConnectionPool(config);
        conn.connect((err) => {
            if(err) {
                console.log(err);
                return;
            }
        });

        let datas = await conn.request().query(query);
        return datas.recordsets;
    }
    catch (err: any) {
        console.log(err);
    }
}