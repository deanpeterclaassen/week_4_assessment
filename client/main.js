// 

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortunes")
const form = document.querySelector("#addGoal")
const deletes = document.querySelector("#delete")
const allgoals = document.querySelector('#allgoals')

const getCompliment = () => {
    axios.get("/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("/api/fortune/")
        .then(res => {
            const data = res.data;
            alert.log(data)
        })


};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let goalId = document.querySelector("#id").value;
    let goalText = document.querySelector("#goalSubmit").value;
    let goals = {
        id: goalId,
        goal: goalText
    }
    axios.post("/api/goals", goals)
    .then(res => { console.log(res)})

    console.log(goals)
})

const deleteGoal = () =>{
    axios.delete("/api/goals").then(res=>{
        const data = res.data;
        console.log(data);
        
    })
}
const getGoals = () => {
    axios.get("/api/goals")
        .then(res => {
            const data = res.data;
            console.log(data)
        })
    }

;
allgoals.addEventListener("click", getGoals)
deletes.addEventListener("click", deleteGoal)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
    