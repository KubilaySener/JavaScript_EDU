// Lecture Using The Console.

        /*
        // alert("ALert");
        console.log("Logged Some Data");
        console.log(123);
        console.log(true);
        var greeting = 'Hello';
        console.log(greeting);
        console.log([1,2,3,4]);
        console.log({a:1, b:2});
        console.table({a:1,b:2});

        console.error('Surprise Mother Fucker');

        console.warn('Watch out mother fucker.');
        console.time('Time');
            console.log('So fast, look at the time we have been spend!!');
        console.timeEnd('Time');
        console.clear();

        */
// End Of The Lecture.

//Lecture Variables - var, let & const

        /* 
        var name = 'John Wick';
        console.log(name);
        name = 'Baba Yaga';
        console.log(name); 
        */
    //init var
        /* var greeting;
        console.log(greeting);
        greeting = 'Hello';
        console.log(greeting); */
    // LET
        /* let isim = 'John Wick';
        console.log(isim);
        isim = 'Baba Yaga';
        console.log(isim); */

    // CONST 
        /* const _name = 'John Wick';
        console.log(_name);
        You can't re-assing _name.
        const Name = {
            firstname :'John',
            secondname :'Wick',
        }
        console.log(Name);
        Name.firstname = 'Baba';
        Name.secondname = 'Yaga';
        console.log(Name) */
    //But YOU CAN re-assing inside of an object.
        /* 
        const numbers = [1,2,3,4,5];
        numbers.push(6);
        console.log(numbers); */

// End Of The Lecture.

// Data types in JAVASCRIPT
    //Primitive
        //String
        /* const name = 'John Wick';
        console.log(typeof name); */
        //Number
        /* const age = 27;
        console.log(typeof age); */
        //Boolean
        /* const hasKids = true;
        console.log(typeof hasKids); */
        //Null
        /* const car = null;
        console.log(typeof car); */
        //Undefined
        /* let test;
        console.log(typeof test); */
        //Reference Types - Objects
        //Array
        /* const Hobbies = ['Movies', 'Gaming'];
        console.log(typeof Hobbies); */
        //Object Literal
        /* const address={
            city:'İzmir',
            state:'Republic'
        }
        console.log(typeof address);
        const today = new Date();
        console.log(typeof today);  */
// End Of The Lecture.

// Lecture Type Conversion

    /* let val;
    let _number; */
    // Number to string.
        /* val=String(5); */
    // Bool to string
        /* val=String(true); */
    // Date to string
        /* val = String(new Date()); */
    // Array to string
       /*  val = String([1,2,3,4]); */
    
    // toString()
        /* val = (10).toString();
        val = (true).toString(); */

    // String to number
       /*  _number =Number('23.010101');
        _number =Number(true);
        _number =Number(false);
        _number =Number(null);
        _number =Number('Hello');
        _number =Number([1,2,3]);

        _number = parseInt('100');
        _number = parseFloat('100.45');

        var addition1 = String(5);
        var addition2 = 6;
        var sum = addition1 + addition2; */
        
    //Output
       /*  console.log(val);
        console.log(typeof val);
        console.log(val.length);
        console.log(typeof _number);
        console.log(_number); // _number.tofixed(2) two digits after dot.
        console.log(sum); */

//End Of The Lecture.

//Numbers & Math Object

