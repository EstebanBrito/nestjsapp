// Should export a factory function that return a JSON obj.
// () => ({}) Return {} because () it's an expression
export default () => ({
    port: parseInt(process.env.PORT, 10),
    db: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    jwt_secret: process.env.JWT_SECRET,
    aws: {
        access_key: process.env.AWS_ACCESS_KEY,
        secret_access_key: process.env.SECRET_ACCESS_KEY
    }
});