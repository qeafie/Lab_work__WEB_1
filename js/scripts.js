// Task 0 and 0*
if(localStorage.getItem("name")===null){
    let div_header = document.querySelector(".right_div_header");

    let header = document.getElementById("header_welcome");
    header.style.display = 'none';


    let div = document.createElement('div');
    div.className = "header_welcome_before";

    let h1 = document.createElement('h1');
    h1.className = "welcome_p_before";
    h1.innerText = "Как вас зовут?";

    let input = document.createElement("input");
    input.className = "welcome_name_before";
    input.placeholder = "Введите имя";

    let button = document.createElement("button");
    button.className = "welcome_button_before";
    button.innerText = "Запомнить";

    div.append(h1,input, button);

    div_header.append(div);

    button.onclick = function (){

       if(input.value===''){
        alert("Введите не пустое значение!");
       }
       else {
           localStorage.setItem("name",input.value);
           document.querySelector(".welcome_name").innerHTML = ", " + localStorage.getItem("name");
           header.style.display = 'flex';
           div.style.display = 'none';
       }
    }
}
else {
    document.querySelector(".welcome_name").innerHTML = ", " + localStorage.getItem("name");
}


//task 1 find area of a triangle by base and height

let input_1_1 = document.querySelector("#input_1_1");
let input_1_2 = document.querySelector("#input_1_2");

input_1_1.oninput= function (){
    calcAreaTriangle(input_1_1.value,input_1_2.value);
    isInputEmpty(input_1_1.value,input_1_2.value);
}

input_1_2.oninput= function (){
    calcAreaTriangle(input_1_1.value,input_1_2.value);
    isInputEmpty(input_1_1.value,input_1_2.value);
}
function isInputEmpty(value1,value2){
    if (value1===''|| value2===''){
        document.querySelector("#triangle_answer").innerHTML = '';
    }
}
function calcAreaTriangle(value1,value2){

    let answer = document.querySelector("#triangle_answer")
    answer.style.color = "red";
    if (Number.isInteger(Number(value1)) || Number.isInteger(Number(value2))){
        if (value1 > 0 && value2 > 0){
            answer.innerHTML = (String)(0.5*value1*value2);
            answer.style.color = "green";
        }else{
            answer.innerHTML = "Числа должны быть больше 0";
        }
    }
    else{
        answer.innerHTML = "Введите числа!";
    }
}


//task 3