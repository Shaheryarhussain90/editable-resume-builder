document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Type assertion
    const nameElement = document.getElementById('Name') as HTMLInputElement;
    const emailElement = document.getElementById('Email') as HTMLInputElement;
    const phoneElement = document.getElementById('Phone') as HTMLInputElement;
    const ReligionElement = document.getElementById('Religion') as HTMLInputElement;
    const cnicElement = document.getElementById('cnic') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('Experience') as HTMLTextAreaElement;
    const skillElement = document.getElementById('Skill') as HTMLTextAreaElement;
    
    

    // Check if all elements are valid
    if (nameElement && emailElement && phoneElement && ReligionElement && cnicElement && educationElement && experienceElement && skillElement) {
        // Get values from the form
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const cnic = cnicElement.value;
        const Religion = ReligionElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;

        // Create resume output
        const resumeOutput = `
        <h2><b>Editable Resume</b></h2>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true"> ${email} </span></p>
        <p><strong>Phone:</strong> <span contenteditable="true"> ${phone} </span></p>
        <p><strong>CNIC:</strong> <span contenteditable="true"> ${cnic} </span></p>
        <p><strong>Religion:</strong> <span contenteditable="true"> ${Religion} </span></p>
        
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skill}</p>
        `;

        // Output the resume to the page
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('Resume output element is missing.');
        }
    } else {
        console.error('One or more form elements are missing.');
    }
});
