


// Sample data for questions and answers

function storeinjson(){

       
const jsonPath = '../data/data.json' ; 

const question = document.getElementById('ques').value ; 
const answer = document.getElementById('answer').value ; 


var messages = document.getElementById("botres");

var clonedmessages = messages.cloneNode(true);

clonedmessages.lastElementChild.innerHTML = "<span id='msg-cont'>"+ answer +"</span>"

clonedmessages.id = "message" + i ; 

document.getElementById("CB").appendChild(clonedmessages);

var container = document.getElementById("qusbx");

var clonedContainer = container.cloneNode(true);

clonedContainer.id = "qusbx";  

document.getElementById("welcome-message").appendChild(clonedContainer);

const qaData = [
    { "question":  question , "answer": answer}

];

// Write the data to a JSON file
fs.writeFile(jsonPath, JSON.stringify(qaData, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data successfully saved to questions_and_answers.json');
    }
});

}