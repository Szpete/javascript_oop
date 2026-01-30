const muvelet = (a, b, callback) => {
    const result = callback(a, b);
   
    return {
        result
    };
};
const muveletLetrehoz = jel => { 
    return jel == '+' ? (a, b) => { return a + b } : (a, b) => { return a - b } 
};
const fv = muveletLetrehoz('+');
console.log(fv(1, 2));
 
export { muvelet, muveletLetrehoz }
