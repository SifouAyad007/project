// script.js

function setnamebot(){

    const chatbot_name = document.getElementById('bo') ; 
    const bot_placer = document.getElementById('botname') ; 

    bot_placer.innerHTML = chatbot_name.value ; 
}
    





document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
    });
  

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('active');
      }
    });
  });


function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    const isOpen = panel.style.display === "block";
  

    document.querySelectorAll(".panel-content").forEach((content) => {
      content.style.display = "none";
    });
  

    if (!isOpen) {
      panel.style.display = "block";
    }
  }






  function displaywelcommessage() {


    const welcom_message = document.getElementById('welc').value ; 

    let content_mes = document.getElementById('msg-cont') ; 

    content_mes.innerHTML = welcom_message ; 
  }

  let i = 0



  

  function duplicateContainer() {


    
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

}
  

  function deleteQuestion(button) {
    
    const questionBox = button.closest('.question-box');
    questionBox.remove();
  }


// responces 

function restoques(){


    const usertext = document.getElementById('user-text').value ; 
    
    const jsonPath = '../data/data.json' ; 

    var messages = document.getElementById("botres");
 


    fetchQuestionsAndResponses(jsonPath)
    .then(result => {
        const questions = result.questions; // Access questions
        const responses = result.responses; // Access responses

        console.log("Questions:", questions);
        console.log("Responses:", responses);

        bot_answer = getResponseForQuestion(usertext, questions, responses);

        console.log(getResponseForQuestion(usertext, questions , usertext)) ; 

        var clonedmessages = messages.cloneNode(true);

        clonedmessages.lastElementChild.innerHTML = "<span id='msg-cont'>"+ bot_answer +"</span>"
        
        clonedmessages.id = "message" + i ; 

        document.getElementById("CB").appendChild(clonedmessages);

        let container = document.getElementById("qusbx");

        let clonedContainer = container.cloneNode(true);

        clonedContainer.id = "qusbx";  

        document.getElementById("welcome-message").appendChild(clonedContainer);

    })
    .catch(error => {
        console.error("Error:", error);
    });

 


    
   // const bot_answer = checkQuestionIndex() ; 

   // 
    
  //  clonedmessages.lastElementChild.innerHTML = "<span id='msg-cont'>"+ bot_answer +"</span>"

  //  alert(clonedmessages.lastElementChild.innerHTML) ; 

  //  clonedmessages.id = "message" + i ; 

  //  document.getElementById("CB").appendChild(clonedmessages);

   // let container = document.getElementById("qusbx");
    
  //  let clonedContainer = container.cloneNode(true);
    
   // clonedContainer.id = "qusbx";  

//document.getElementById("welcome-message").appendChild(clonedContainer);

    

    
}




function fetchQuestionsAndResponses(jsonPath) {

    return fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load JSON file: ${response.status}`);
            }
            return response.json(); // Parse the JSON content
        })
        .then(data => {
            // Assuming the JSON data is an array of objects with "question" and "answer" properties
            const questions = [];
            const responses = [];

            // Iterate through the data and extract questions and responses
            for (const item of data) {
                if (item.question && item.answer) {
                    questions.push(item.question);
                    responses.push(item.answer);
                }
            }

            // Return both arrays
            return { questions, responses };
        })
        .catch(error => {
            console.error("Error:", error);
            return { questions: [], responses: [] }; // Return empty arrays in case of error
        });
}



function getResponseForQuestion(question, questions, responses) {
 
    const index = questions.indexOf(question);

 
    if (index !== -1) {
        return responses[index];
    }


    return "Question not found.";
}


