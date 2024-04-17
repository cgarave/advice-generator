let displayAdvice = document.getElementById('text-container');
let displayAdviceID = document.getElementById('adviceID');
let randomBtn = document.getElementById('randomize').onclick = () => {
    document.getElementById('dice').classList.add('animate-spin')
    setTimeout(() => location.reload(), 500)};

// fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json())
//     .then(data => {displayAdvice.innerHTML = data.slip.advice
//                     displayAdviceID.innerHTML = `ADVICE # ${data.slip.id}`})
//     .catch(error => console.error(error));

async function fetchData(){
    
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        
        if(!response.ok){
            throw new Error("Error");
        }

        displayAdvice.innerHTML = data.slip.advice;
        displayAdviceID.innerHTML = `ADVICE # ${data.slip.id}`
    }
    catch(error) {
        console.log(error);
    }

}
fetchData()