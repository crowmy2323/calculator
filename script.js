let result = '';

function appendNumber(num) {
    result += num;
    document.getElementById('result').innerText = result;
}

function calculateResult() {
    try {
        result = eval(result)
        document.getElementById('result').innerHTML = result
    } catch(e){
        document.getElementById('اشتباه').innerHTML = result
    }
    }
function clearResult () {
    result = ''
    document.getElementById('result').innerText = result
}
