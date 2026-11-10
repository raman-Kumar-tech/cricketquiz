const questions = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Rohit Sharma"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "How many players are there in a cricket tea m?",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        question: "How many overs are there in a standard T20 innings?",
        options: ["10", "20", "30", "50"],
        answer: "20"
    },
    {
        question: "Who won the ICC Cricket World Cup 2011?",
        options: ["Australia", "India", "Sri Lanka", "England"],
        answer: "India"
    },
    {
        question: "Which Indian cricketer is known as 'Captain Cool'?",
        options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Kapil Dev"],
        answer: "MS Dhoni"
    },
    {
        question: "How many runs are awarded for a six in cricket?",
        options: ["4", "5", "6", "8"],
        answer: "6"
    },
    {
        question: "Which country has won the most ODI World Cups?",
        options: ["India", "Australia", "England", "West Indies"],
        answer: "Australia"
    },
    {
        question: "Who was the captain of India when they won the 1983 World Cup?",
        options: ["Sunil Gavaskar", "Kapil Dev", "Ravi Shastri", "Mohinder Amarnath"],
        answer: "Kapil Dev"
    },
    {
        question: "Which Indian player is famous for the nickname 'Hitman'?",
        options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Shikhar Dhawan"],
        answer: "Rohit Sharma"
    },
    {
        question: "How many stumps are there at one end of a cricket pitch?",
        options: ["2", "3", "4", "6"],
        answer: "3"
    },
    {
        question: "Who has scored 100 international centuries?",
        options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Brian Lara"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which format of cricket is played for 50 overs per side?",
        options: ["Test", "ODI", "T20", "The Hundred"],
        answer: "ODI"
    },
    {
        question: "Which Indian bowler is known as the 'Yorker King'?",
        options: ["Jasprit Bumrah", "Mohammed Shami", "Ravichandran Ashwin", "Bhuvneshwar Kumar"],
        answer: "Jasprit Bumrah"
    },
    {
        question: "What is the maximum number of runs a batter can normally score by hitting the ball over the boundary without running?",
        options: ["4", "5", "6", "8"],
        answer: "6"
    },
    {
        question: "Which team is associated with the IPL abbreviation CSK?",
        options: [
            "Chennai Super Kings",
            "Chandigarh Super Kings",
            "Central Super Kings",
            "Chennai Sports Kings"
        ],
        answer: "Chennai Super Kings"
    },
    {
        question: "How many balls are there in one standard over?",
        options: ["4", "5", "6", "8"],
        answer: "6"
    },
    {
        question: "Which country hosted the first Cricket World Cup in 1975?",
        options: ["India", "Australia", "England", "West Indies"],
        answer: "England"
    },
    {
        question: "Who is known as the 'Little Master' in Indian cricket?",
        options: ["Sunil Gavaskar", "Sachin Tendulkar", "Rahul Dravid", "Kapil Dev"],
        answer: "Sunil Gavaskar"
    },
    {
        question: "What does LBW stand for in cricket?",
        options: [
            "Leg Before Wicket",
            "Leg Behind Wicket",
            "Left Bat Wicket",
            "Long Ball Wicket"
        ],
        answer: "Leg Before Wicket"
    },
    {
        question: "Which Indian player is popularly known as 'The Wall'?",
        options: ["Rahul Dravid", "VVS Laxman", "Sourav Ganguly", "Virender Sehwag"],
        answer: "Rahul Dravid"
    }
];


// ab mujhe 20 questions me se randomly 5 question select karne hain 

// questions hova ge jo unko array ke andhar daal dunga 5 ko 
let arr = [];
let n = questions.length;
function fun(){
for(let i=0; i<5; i++){
    let index = Math.floor(Math.random()*n);
    arr.push(questions[index]);
    let num = questions[n-1];
    questions[n-1] = questions[index];
    questions[index] = num;
    n--;
}
return arr;
}
// ab jo 5 question aiye hain unko array ke andhar daal dete hain mtlb question ka data store toh object 
// me hi hoga fir sara object  array ke anhar jese 20 questions store kiye hain vese 5 ko store krenge

// it contain 5 questions , selectedquestion is an array 
let selectedquestion = fun();

const form  = document.createElement('form');
const cricketquiz = document.getElementById('cricketquiz');
cricketquiz.append(form);

let obj1 = {};
selectedquestion.forEach((value,index)=>{
    // value question ke data ko point kar rahi hain include question,options,answer
    
    //  div,paragraph, input, label,break tag har question me chahiye  

    // fill the obj1 for check the submitted data
obj1[`Ansofq${index+1}`]= value.answer;
const divelement = document.createElement('div');
divelement.id = 'question';
form.append(divelement);

// create a paragraph
const para = document.createElement('p');
para.innerText = `${index+1}. ${value.question}`;
divelement.append(para);




value.options.forEach((option)=>{
// ek question me 4 input aur 4 label ayenge 
// create input 
const input = document.createElement('input');
input.type = "radio";
input.name = `Ansofq${index+1}`;
input.value = option;
divelement.append(input);

const label = document.createElement('label');
label.innerText = option;
divelement.append(label);

const breakelement = document.createElement('br');
divelement.append(breakelement);
})


const breakelement = document.createElement('br');
form.append(breakelement);
})

const button = document.createElement('button');
button.innerText = "Submit";
form.append(button);


// check the filled data
form.addEventListener('submit',(event)=>{

    event.preventDefault();
    // jo m data fill krunga usko FormData ki help se access kar skte hain 
    const formdata = new FormData(form);
  let ans = 0 ;
    for(let [key,value] of formdata.entries()){
        if(value === obj1[key]){
            ans++;
        }
    }
    // jab formsubmit hoga tab ye aa jayega 
const lastelement = document.createElement('div');
lastelement.innerText = `${ans} Out of 5 is Correct `;
form.append(lastelement);

form.reset();
})


