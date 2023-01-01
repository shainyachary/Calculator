var inputBox = document.querySelector('.inputBox');
var inputEq = document.querySelector('.inputEq');
var historyDiv = document.querySelector('.history-div');
let menu = document.querySelector('.fa-ellipsis-h');
let history = document.querySelector('.history');
var answers = [];
var equations = [];

function setVal(num)
{
    if(inputBox.value == 0)
        inputBox.value = num;
    else
        inputBox.value += num;
}

function clearInput()
{
    inputBox.value = 0;
    inputEq.value = '';
}

function getAns()
{
    equation = inputBox.value + '=';
    equations.push(equation);
    answers.push(eval(inputBox.value));
    inputEq.value = equation;
    inputBox.value = eval(inputBox.value);
}

function showHistory()
{
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        history.classList.toggle('open');
        
    historyDiv.innerHTML = "";
    
    for(let i=0;i<answers.length;i++)
    {
        historyDiv.innerHTML += '<div class="section"><h6>'+equations[i]+'</h6><h3>'+answers[i]+'</h3></div>'
    }
    }
}

function removeHistory()
{
    var status = confirm('Are you sure want to delete history ???');
    if(status)
    {
        historyDiv.innerHTML = "";
        answers = [];
        equations = [];
    }
}

const backButton = document.getElementById("back-button");

backButton.addEventListener("click", function() {
  let inputString = document.getElementById("input").value;
  inputString = inputString.substring(0, inputString.length - 1);
  document.getElementById("input").value = inputString;
});




