/* 
    un manejador de peticiones por lo general recibe una request,
    la informacion que recibe el usuario y una response, la
    informacion que le envia el servidor a los navegadores
*/
//callback hell
function requestHandler(req, res){
    User.findById(req.userId, function(err, user){
        if(err){
            res.send(err)
        }else{
            Task.findById(user.tasksId, function (err, tasks){
                if(err){
                    return res.send()
                }else{
                    tasks.completed = true
                    tasks.save(function(err){
                        if(err){
                            return res.send(err)
                        }else{
                            res.send('task completed')
                        }
                    })
                }
            })
        }
    })
}

