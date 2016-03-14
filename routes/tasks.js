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
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .post((req, res) => {
            // "/tasks": Insert a new task 
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
    app.route("/tasks/:id")
        .all((req, res, next) => {
            // same porpuse.
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            Tasks.findOne({where: req.params})
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .put((req, res) => {
            Tasks.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .delete((req, res) => {
            Tasks.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(erro => {
                    res.status(412).json({msg: error.message}) ;
                });
        });
};
