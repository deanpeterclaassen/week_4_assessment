// 
const goalContainer = document.querySelector("#info")
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortunes")
const form = document.querySelector("form")

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

const addGoal = body =>{
    axios.post("http://localhost:4000/api/goals/",body).then(res => {
        createGoal(res.data)
    })
}



function addGoals(e) {
    e.preventDefault()

    let Name = document.querySelector('#Name')
    let Manifest = document.querySelector('#Manifest')
    let status = document.querySelector("#status")
    

    let bodyObj = {
        Name: Name.value,
        Manifest: Manifest.value, 
        status: status.value
        
    }

    addGoal(bodyObj)

    Name.value = ''
    Manifest.value = ''
    status.value = ''
    
}

function createGoal(data){
    {
        goalContainer.innerHTML = ''
        const infoCard = document.createElement('div')
        infoCard.classList.add('info-card')
    
        infoCard.innerHTML = `<p class="Name">Name: ${data.Name}</p>
        <p class="Manifest">Goal: ${data.Manifest}</p>
        <p class= "status">Status:${data.status}`
        goalContainer.appendChild(infoCard)
    }
}
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener("submit", addGoals)