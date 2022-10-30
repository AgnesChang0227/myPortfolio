export const projects = [
    {
        title: "Owl School",
        description: ["An Udemy like online learning website.",
            "Including role: visitor, student, teacher, admin.",
            "Functions : Authentication, Send Email, Create / Edit / Enroll Courses, Upload Image/ Video , Edit Profile..."
        ],
        url: {
            PPT: "https://docs.google.com/presentation/d/1_ZMCcE3xZAcvHe5PYwRL_0gxGhtc8H-4/edit?usp=sharing&ouid=103558104135438308829&rtpof=true&sd=true",
        },
        captureFolder: "images/owlSchool/",//it is a folder
        language: ["NodeJS", "ExpressJS", "ReactJS", "MongoDB"],
        finishedDate: new Date("2022-10-21")
    },
    {
        title: "Idea Note",
        description: ["Using template engine EJS and Bootstrap to handle pages' appearance.",
            "Using session and cookie to handle the Authentication.",
            "Function:Register, Login, Logout, Add / Edit Note, Upload / Delete Profile Image."
        ],
        captureFolder: "images/ideaNote",//it is a folder
        language: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
        finishedDate: new Date("2022-9-27")
    },
    {
        title: "Photo Website",
        description: ["Show pages with React component and Bootstrap CSS.",
            "Fetch external API to get photos.",
            "Show quantity of related photos which depends on the pagination and LoadMore button.",
            "Functions: Show Featured Image, Search and show related photos, Load more related photos."
        ],
        captureFolder: "images/photoWebsite",//it is a folder
        language: ["ReactJS"],
        finishedDate: new Date("2022-9-24")
    },
    {
        title: "Learning System",
        description: ["Show pages with React component and Bootstrap CSS.",
            "Authentication using passport-jwt and passport-local",
            "Function: Register, Login, Logout, Search courses by title, enroll Course, Create course"
        ],
        captureFolder: "images/learningSystem",//it is a folder
        language: ["NodeJS", "ExpressJS", "ReactJS", "MongoDB"],
        finishedDate: new Date("2022-9-28")
    },
    {
        title: "Google and Local Login System",
        description: ["Show pages with React component and Bootstrap CSS.",
            "Authentication using passport-jwt and passport-local",
            "Function: Register, Login, Logout, Search courses by title, enroll Course, Create course"
        ],
        captureFolder: "images/googleLogin",//it is a folder
        language: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
        finishedDate: new Date("2022-9-23")
    },

];