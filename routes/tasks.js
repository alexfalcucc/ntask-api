module.exports = app => {
     const Tasks = app.db.models.Tasks;
     app.route("/tasks")
        .all((req, res) => {
        // Routes Middleware of pre-run 
            delete req.body.id;
            next();
        })
        .get((req, res) => {
        // "/tasks": task's list 
        })
        .post((req, res) => {
        // "/tasks": Insert a new task 
        })
    app.route("/tasks/:id")
        .all((req, res) => {
        // same porpuse.
            delete req.body.id;
            next();
        })
        .get((req, res) => {
        })
        .put((req, res) => {
        })
        .delete((req, res) => {
        });
};
