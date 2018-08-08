// code from email.js for sending email from site
function sendMail(contactForm) {
    emailjs.send("gmail", "housing_crisis_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "info_detail": contactForm.info_query.value
    })
    .then (
        /*
        custom alert methods called to indicate success/failure to send email
        page reload following successful email (and click 'ok' on alert to wipe 
        details from email form
        */
        function(response) {
            alert("Thank you for contacting the campaign. Hopefully we can work together!", response);
            window.location.reload();
            
        },
        function(error) {
            alert("Your email failed to send. Please try again. If the problem persists, contact info@pprproject.org.", error);
       }
    );
    return false; /*prevent new page loading*/
}