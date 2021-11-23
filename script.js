const compute = (num) => {
    const result = document.getElementById('input');
    result.value += num;
}
// computation 
const result = () => {
    const result = document.getElementById('input');
    result.value = eval(result.value);
}

// clear the screen
const clearResult = () => {
    const result = document.getElementById('input');
    result.value = '';
}

// delete button 

const del = () => {
    const result = document.getElementById('input');
    let remove  = result.value;
    remove = remove.slice(0, -1);
    result.value = remove;
}


