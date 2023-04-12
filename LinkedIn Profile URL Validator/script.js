const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
function validateLinkedinUrl(url) {
    if (linkedinRegex.test(url)) {
      console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
      console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
  }