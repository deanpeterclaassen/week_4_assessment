// 
const goalContainer = document.querySelector("#goalinfo")
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortunes")
const form = document.querySelector("#goalss")
const deleteg = document.querySelector("#delete")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
        })


};
const deletegoal = Name => axios.delete(`http://localhost:4000/api/goals/${Name}`).then(res=> console.log(res.data))

const addGoal = body =>{
    axios.post("http://localhost:4000/api/goals/",body).then(res => {
        createGoal(res.data)
    })
}



function addGoals(e) {
    e.preventDefault()

    let Name = document.querySelector('#Name')
    let Manifest = document.querySelector('#Manifest')
    let statuss = document.querySelector("#statuss")
    

    let bodyObj = {
        Name: Name.value,
        Manifest: Manifest.value, 
        statuss: statuss.value
        
    }

    addGoal(bodyObj)

    Name.value = ''
    Manifest.value = ''
    statuss.value = ''
    
}

function createGoal(mf){
    {
        goalContainer.innerHTML = ''
        const goalCard = document.createElement('div')
        goalCard.classList.add('goal-card')
    
        goalCard.innerHTML = `<p class="Name">Name: ${mf.Name}</p>
        <p class="Manifest">Goal: ${mf.Manifest}</p>
        <p class= "statuss">Status:${mf.statuss}`
        goalContainer.appendChild(goalCard)
        console.log(mf)
    }
}
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener("submit", addGoals)
deleteg.addEventListener("submit",deletegoal)