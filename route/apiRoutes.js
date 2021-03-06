const Workout = require('../Models/workout')

//If the user wanted to find their past workouts, thhis is how it's searched for
module.exports = function(app){
    app.get('/api/workouts',function(req,res){
        console.log("hit")
        Workout.find()
        .then(data =>{
            console.log(data)
            res.json(data)
        })
        .catch(err=>{
            console.log("err")
            res.json(err)
        })
    });

    app.post('/api/workouts', function(req,res){
        Workout.create({})
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    app.get('/api/workouts/range', function(req,res){
        Workout.find().limit(7)
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    });


    app.put('/api/workouts/:id', ({body,params},res)=>{
        Workout.findByIdAndUpdate(
            params.id,
            {$push:{exercises:body} },
            {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    })
}