    const name = 'John';
    const age = 27;
    const job = 'Horse Whisperer';
    const city = 'Wakanda';
    let html;

    function hello(){
        return 'Hello';
    }
//Witout template strings(es5)
    html  = '<ul>' +
            '<li>Name: ' + name + 
            '</li><li>Age: '+ age + 
            '</li><li>Job: ' +job + 
            '</li><li>City: '+ city + 
            '</li>'+
            '</ul>';



//With template strings(es6)
    html = `
     <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city} </li>
        <li>${hello()}</li>
        <li>${35+5}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
    `;

document.body.innerHTML = html;
