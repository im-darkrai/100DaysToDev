const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    // input ko read karna 
    

    let input1 = document.getElementById("first");
    let number1 = Number(input1.value);

    let input2 = document.getElementById("second");
    let number2 = Number(input2.value);

    
    // output show karna 

    const result = number1+number2;

    let ans = document.getElementById("result");
    ans.textContent = result;
})