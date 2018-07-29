// Lecture Type Conversion

    let val;
    let _number;
    // Number to string.
        val=String(5);
    // Bool to string
        val=String(true);
    // Date to string
        val = String(new Date());
    // Array to string
        val = String([1,2,3,4]);
    
    // toString()
        val = (10).toString();
        val = (true).toString();

    // String to number
        _number =Number('23.010101');
        _number =Number(true);
        _number =Number(false);
        _number =Number(null);
        _number =Number('Hello');
        _number =Number([1,2,3]);

        _number = parseInt('100');
        _number = parseFloat('100.45');

        var addition1 = String(5);
        var addition2 = 6;
        var sum = addition1 + addition2;
        
    //Output
        console.log(val);
        console.log(typeof val);
        console.log(val.length);
        console.log(typeof _number);
        console.log(_number); // _number.tofixed(2) two digits after dot.
        console.log(sum);

//End Of The Lecture.