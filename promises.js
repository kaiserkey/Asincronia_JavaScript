function requestHandler(req, res){
    User.findById(req.userId)
                            .then(function(user){
                                return Task.findById(user.tasksId)
                            })
                            .then(function(task){
                                task.completed = true
                                return task.save()
                            })
                            .then(function(){
                                res.sent('task completed')
                            })
                            .catch(function(err){
                                res.send(err)
                            })
}