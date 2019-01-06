namespace Variable.Declaration {
    function passArray([one, two,three]:[string, string, string]): void {
        console.log(one, two, three);
    }
    export function arrayDestructuring(){
        let [first_name, last_name] = ["Json", "stathon"];
        console.log(first_name, last_name);

        let [a, , ,d] = [65,66,67,68];
        console.log(a,d);
        passArray(["one", "two", "three"])
    }
}

Variable.Declaration.arrayDestructuring();