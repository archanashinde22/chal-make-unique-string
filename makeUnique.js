// Write your solution below:
const makeUnique =(string) =>{
    let newArr =[];
    for(let i=0; i<string.length; i++)
    {
        if(!newArr.includes(string[i])){
            newArr.push(string[i])
        }
    }
    return console.log(newArr.join(""))
}
makeUnique('iwanttoclimbamountain')
makeUnique('helloworld')

const makeUnique1 =(str) => console.log( [...new Set(str.split(""))].join(""))

makeUnique1('helloworld')