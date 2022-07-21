function compute()
{
    var principal = Number(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    
    if (!(Number.isInteger(principal) && principal > 0)){
        alert('Enter a positive number')
        document.getElementById("principal").focus()
        return
    }
    
    // Clear previous content (all element children) before updating
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    result.innerHTML += `
        <div class="result_msg">
            <div>If you deposit <div class='highlight'> ${principal} </div>, </div>
            <div>at an interest rate of <div class='highlight'> ${rate}% </div>.</div>
            <div>You will receive an amount of <div class='highlight'> ${Number(interest)} </div>, </div>
            <div>in the year <div class='highlight'> ${year} </div> </div>
        </div>
    `;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}

function validate_principal(){
    var principal = document.getElementById("principal").value;
}