function sendMail(contactForm) {
    emailjs.send("gmail", "housing_crisis_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "info_detail": contactForm.info_query.value
    })
    .then (
        function(response) {
            alert("Thank you for contacting the campaign. Hopefully we can work together!", response);

        },
        function(error) {
            alert("Your email failed to send. Please try again. If the problem persists, contact info@pprproject.org.", error);
       }
    );
    return false; /*prevent new page loading*/
}