module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params : {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscored: true
        }

    },
    jwtSecret: "NtasK-API",
    jwtSession: {session: false}
};
