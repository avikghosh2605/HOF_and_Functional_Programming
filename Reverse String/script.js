let input = "Hello World";
function reverseString (input) {
    return input.split(" ").reverse().join(" ");
}
setTimeout(()=> {
    let newString = reverseString(input);
    console.log(newString);},2000);