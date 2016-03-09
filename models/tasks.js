module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Go Shopping"},
                {title: "Fix notebook"},
            ]);
        }
    };
};
