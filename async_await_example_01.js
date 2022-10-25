async function requestHandler(req, res){
    try{
        const user = await User.findById(req.userId)
        const task = await Task.findById(user.taskId)
        task.completed = true
        await task.save()

        res.send('task completed')
    }catch(err){
        res.send(err)
    }
}