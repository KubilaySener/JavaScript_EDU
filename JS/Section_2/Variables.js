//Lecture Variables - var, let & const

        
        var name = 'John Wick';
        console.log(name);
        name = 'Baba Yaga';
        console.log(name); 
       
    //init var
        var greeting;
        console.log(greeting);
        greeting = 'Hello';
        console.log(greeting);
    // LET
        let isim = 'John Wick';
        console.log(isim);
        isim = 'Baba Yaga';
        console.log(isim);

    // CONST 
        const _name = 'John Wick';
        console.log(_name);
    //You can't re-assing _name.
        const Name = {
            firstname :'John',
            secondname :'Wick',
        }
        console.log(Name);
        Name.firstname = 'Baba';
        Name.secondname = 'Yaga';
        console.log(Name)
    //But YOU CAN re-assing inside of an object.
        
        const numbers = [1,2,3,4,5];
        numbers.push(6);
        console.log(numbers);

// End Of The Lecture.