module.exports = app => {
    app.db.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log("ntask api - port", app.get("port"));
        });
    })
}
