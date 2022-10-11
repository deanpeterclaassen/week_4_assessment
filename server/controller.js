const goals = [
    {id: 13, goal: "see more birds" }
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
   getFortune: (req,res) => {
    const fortunes = ["You will have a bird friend very soon","A bird in the hand is better than not having one in your hand","A pleasant suprise is waiting for you... it's a pheasant", "Dont just think about petting birds, pet those birds","Dont be like a Mockigbird, be like the Scrub Jay"];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune)
   },

   addGoal: (req,res)=> {
    console.log(req.body);
    const addGoals = {
        name: req.body.id,
        goal: req.body.goal
    }
    goals.push(addGoals);
    res.status(200).json({message: "added succesfully"})
   },
//    editGoal: (req,res)=>{
//         const { id } = req.params;
//         const goalEdit = goals.find((goal_obj) =>  goal_obj.id === parseInt(id))
//         goalEdit.goal = req.body.goal;
//         res.status(200).json({message: "success", goals})},

   deleteGoal: (req,res)=> {
    goals.pop();
    res.status(200).json({message: "deleted goal"})
 
   },

   getGoals: (req,res) => {

    res.status(200).send(goals)
   },

}   

