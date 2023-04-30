let greet = (name: string, age: number) =>{
    console.log("deneme");
    console.log(`your age: ${age}`);
    console.log("name: " + name);

    return age;
}

let result = greet("afsf", 23);

const sum = (a: number, b: number, c: number | string = '10') => {
    console.log("func!!");
}

sum(4, 6);