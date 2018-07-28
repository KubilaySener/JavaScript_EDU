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
      /*   const num1 = 100;
        const num2 = 50;
        let val; */
        // Math Object
  /*       val = Math.PI;
        val = Math.E;
        val = Math.round(2.4);
        val = Math.ceil(2.4); // round upper
        val = Math.floor(2.8); // round lower
        val = Math.sqrt(64);
        val = Math.abs(-3);
        val = Math.pow(8, 2); // power of a number
        val = Math.min(2,35,48,78,5,1,25,-10);
        val = Math.max(2,35,48,78,5,1,25,-10);
        val = Math.random();

        val = Math.floor( Math.random()*20 + 1); // Generates number between 1 and 20 includes this numbers;
        console.log(val); */

//End Of The Lecture.

// Lecture String Method & Concatenation
      /*   const firstname= 'William';
        const lastname = 'Jhonson';
        const age = 27;
        const str = 'Hello my name is Erşan Kuneri. And I am not a Phornographer.'
        let val;
        val = firstname + lastname;
        
        // Concatenation
            val = firstname + ' ' + lastname;
        
        // Append
            val = 'Kubilay ';
            val +='Şener';

            val = "My name is " + val + ' and I m ' + age + ' years old.'
        // Escaping
            val = 'That\'s awesome, I can\'t wait';
        // Lengt
            val = firstname.length;
        // Concat
            val = firstname.concat(' ',lastname);
        // Change Case
            val = firstname.toLowerCase();
            val = firstname.toUpperCase();

            val = firstname[2];
        // indexOf()
            val = firstname.indexOf(1);
            val = firstname.lastIndexOf(1);
        // charAt();
            val = firstname.charAt(0);
        // Get last char.
            val = firstname.charAt(firstname.length-1);
        // substring()
            val = firstname.substring(0,3);
        // slice()
            val = firstname.slice(0,4);
            val = firstname.slice(-3);
        // split()
            val = str.split(' ');
        // replace()
            val = str.replace('Erşan','Kubilay');
        //includes()
            val = str.includes('Kuneri');
        console.log(val); */
//End Of The Lecture.

// Lecture Template Literals
        
