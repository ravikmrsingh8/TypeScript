namespace BasicTypes {
    export function typeAssertion(){
        let name:any = "Lotus";
        let size = (name as string).length;
        console.log(name + " length is " + size);
    }
}

BasicTypes.typeAssertion();