module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log("ntask api - port", app.get("port"));
        });
    })
}
