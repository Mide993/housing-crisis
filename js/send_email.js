function sendMail(contactForm) {
    emailjs.send("gmail", "information_share", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_share": contactForm.info_query.value
})
.then (
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
   });
}