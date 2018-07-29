// Lecture String Method & Concatenation
        const firstname= 'William';
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
        console.log(val);
//End Of The Lecture.