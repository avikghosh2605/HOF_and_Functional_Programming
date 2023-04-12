const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
const inputUrl = "https://www.google.com";

if (urlRegex.test(inputUrl)) {
    console.log("Input URL matches the conditions for a valid URL");
} else {
    console.log("Input URL does not match the conditions for a valid URL");
}