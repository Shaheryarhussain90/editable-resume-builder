var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Type assertion
    var nameElement = document.getElementById('Name');
    var emailElement = document.getElementById('Email');
    var phoneElement = document.getElementById('Phone');
    var ReligionElement = document.getElementById('Religion');
    var cnicElement = document.getElementById('cnic');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('Experience');
    var skillElement = document.getElementById('Skill');
    // Check if all elements are valid
    if (nameElement && emailElement && phoneElement && ReligionElement && cnicElement && educationElement && experienceElement && skillElement) {
        // Get values from the form
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var cnic = cnicElement.value;
        var Religion = ReligionElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // Create resume output
        var resumeOutput = "\n        <h2><b>Editable Resume</b></h2>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\"> ").concat(email, " </span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\"> ").concat(phone, " </span></p>\n        <p><strong>CNIC:</strong> <span contenteditable=\"true\"> ").concat(cnic, " </span></p>\n        <p><strong>Religion:</strong> <span contenteditable=\"true\"> ").concat(Religion, " </span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skill, "</p>\n        ");
        // Output the resume to the page
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume output element is missing.');
        }
    }
    else {
        console.error('One or more form elements are missing.');
    }
});
