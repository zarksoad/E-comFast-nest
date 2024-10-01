const defaultPort:string = '3000'

export default ()=> ({
    port: parseInt(process.env.PORT ?? defaultPort,10),
    database:{
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT ?? defaultPort,10) || 5432
    }
})