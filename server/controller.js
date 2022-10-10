
// let mans =[]
let mf = require("./mf.json")
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
   deletegoal: (req, res) => {
    let index = mf.findIndex(elem => elem.id === +req.params.Name)
    mf.splice(index, 1)
    res.status(200).send(mf)
},
   addGoal: (req,res) => {
    let {Name, Manifest, statuss} = req.body;
    let manifestation = {
       
        Name,
        Manifest,
        statuss
    }
    mf.push(manifestation)
    let manReturn = {...manifestation}
    res.status(200).send(manReturn)
     




   }

}