 const averageAge = (array) => {
     const sum = array.reduce((accum,b) => a.age + b.age) 
     return Math.floor(sum / array.length)
 }
 
/*((alumni){
//     // alumni.reduce(alumni.age) = alumniCum;
//     // (alumniCum / alumni.length) = aveYears;
//     // Math.Floor(aveYears) = average;
//     // return average;
// });*/

const bananaBread = array => {
    return array.map(alum => {
        return {...alum, bananaBread : `${alum.name} got bananaBread at ${alum.job}`}
    });
};
console.log(bananaBread(alumni));

const ninetiesBabies => ((alumni) {
    return alumni.age > 21
});

const addSchool => ((alumni){
    return alumni.filter(alumni.school === `The Marcy Lab School`)
});

const allUseJavaScript => ((alumni){
    if(alumni.language === `JavaScript`){
        return true
    }else{
        return false
    }
});

const noVowel => ((animals){
    animals.splice(animals.map(/[aeiou]/), )
});

const onlyVowelA(animals) =>{
    animals.filter((animals =>)
}





