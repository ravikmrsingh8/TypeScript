namespace BasicTypes {
    export function typesDemo(){
        //boolean
        let isDone:boolean = false;
        console.log(isDone);
        
        //numbers
        let decimal:number = 123;
        let hex:number = 0xFF;
        let octal:number =0o71;
        let binary:number = 0b101;
        console.log(decimal, binary, hex, octal)

        //String
        let name:string = "Ravi";
        console.log(`Hello! My name is ${name} `);

        //Array
        let names:string[] = ["Hari", "Sadhana", "Gokern", "Mohit"];
        names[6] = "Ravi"; 
        console.log(names);

        let list:Array<number> = [1,2,3,4];
        list[10] = 123;
        console.log(list);
        

        //Tuples
        let point:[number, number] = [1.3, 3.4];
        console.log(point);
        //point[3] =  8; // Type '8' is not assignable to type 'undefined  


        //Enums
        enum Color {RED, GREEN, BLUE};
        let color:Color = Color.RED;
        console.log("color :"+ color); 

    }    
}

BasicTypes.typesDemo();