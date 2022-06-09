const add = (a,b) => {
    return a+b;
} 

const name1 = "Talha";

const sub = (a,b) => {
    return a-b;
}

const multi = (a,b) => {
    return a*b;
}

// module.exports.multi = multi
// module.exports.sub = sub;
// module.exports.add = add;

module.exports = {add,sub,multi,name1};