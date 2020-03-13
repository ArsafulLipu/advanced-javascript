const student = [
    { id:32, name:"bultumia" },
    { id:52, name:"saltu" },
    { id:35, name:"fauphotographi" },
    { id:23, name:"abul" },

]

const output = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const name = element.name
    output.push(name);
    
}
const ids = student.map(s => s.id)
const bigger = student.filter(s => s.id > 30);

console.log(output);
console.log(ids);
console.log(bigger);


