module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "studentsmanagement",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};


// module.exports = {
//     HOST: "containers-us-west-59.railway.app",
//     USER: "root",
//     PASSWORD: "culXRaHy4OtFCYpZu0Ur",
//     DB: "railway",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };