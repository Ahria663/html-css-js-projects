 function doAdd(){
    let sum;
    let input1;
    let input2;
    input1 = document.getElementById("box1").value;
    console.log(input1);
    input1 = Number(input1);
    input2 = document.getElementById("box2").value;
    console.log(input2);
    input2 = Number(input2);
    sum = input1 + input2;
    console.log(sum);
    document.getElementById("box3").value = sum;

}

    function doSubtract(){
    let difference;
    let input1;
    let input2;
    input1 = document.getElementById("box1").value;
    console.log(input1);
    input1 = Number(input1);
    input2 = document.getElementById("box2").value;
    console.log(input2);
    input2 = Number(input2);
    difference = input1 - input2;
    console.log(difference);
    document.getElementById("box3").value = difference;
}
    function doMultiply(){
    let multiply;
    let input1;
    let input2;
    input1 = document.getElementById("box1").value;
    console.log(input1);
    input1 = Number(input1);
    input2 = document.getElementById("box2").value;
    console.log(input2);
    input2 = Number(input2);
    multiply = input1 * input2;
    console.log(multiply);
    document.getElementById("box3").value = multiply;
}
    function doDivide(){
    let quotient;
    let input1;
    let input2;
    input1 = document.getElementById("box1").value;
    console.log(input1);
    input1 = Number(input1);
    input2 = document.getElementById("box2").value;
    console.log(input2);
    input2 = Number(input2);
    quotient = input1 / input2;
    console.log(quotient);
    document.getElementById("box3").value = quotient;
}
    function doPower(){
    let power;
    let input1;
    let input2;
    input1 = document.getElementById("box1").value;
    console.log(input1);
    input1 = Number(input1);
    input2 = document.getElementById("box2").value;
    console.log(input2);
    power = Number(input2);
    power = Math.pow(input1, input2);
    console.log(power);
    document.getElementById("box3").value = power;
}
    function doClear(){
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    document.getElementById("box3").value = "";
}


