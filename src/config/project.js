export const projects = [
    {
        title: "Owl School",
        value: "owlSchool",
        description: ["An Udemy like online learning website.",
            "Including role: visitor, student, teacher, admin.",
            "Functions : Authentication, Send Email, Create / Edit / Enroll Courses, Upload Image/ Video , Edit Profile..."
        ],
        url: {
            PPT: "https://docs.google.com/presentation/d/1_ZMCcE3xZAcvHe5PYwRL_0gxGhtc8H-4/edit?usp=sharing&ouid=103558104135438308829&rtpof=true&sd=true",
        },
        capture: ['./404Page.png', './Admin_coursePage.png', './Admin_courses.png',
            './Admin_users.png', './CoursePage.png', './Course_lesson.png',
            './ForgotPassword_email.png', './ForgotPassword_password.png',
            './ForgotPassword_verify.png', './Login.png', './Logout.png',
            './Search_filter&enrolledCorses.png', './SignUp.png',
            './SignUp_verifyCode.png', './Signup_email.png',
            './Student_becomeTeacher.png', './Student_myLearning.png',
            './Teacher-courseList.png', './Teacher_delete.png',
            './Teacher_pendingReview.png', './Teacher_rejectedCourse.png',
            './User_changePassword.png', './User_editProfile.png',
            './User_publicProfile.png', './User_verifyEmail_inpage.png',
            './homepage.png'],
        language: ["NodeJS", "ExpressJS", "ReactJS", "MongoDB"],
        finishedDate: new Date("2022-10-21")
    },
    {
        title: "Idea Note",
        value: "ideaNote",
        description: ["Using template engine EJS and Bootstrap to handle pages' appearance.",
            "Using session and cookie to handle the Authentication.",
            "Function:Register, Login, Logout, Add / Edit Note, Upload / Delete Profile Image."
        ],
        capture: ['./about.png', './addNote.png', './createNote.png', './editNote.png', './homepage.png', 
            './login.png', './logout.png', './register.png', './showNotes.png'],
        language: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
        finishedDate: new Date("2022-9-27")
    },
    {
        title: "Photo Website",
        value: "photoWebsite",
        description: ["Show pages with React component and Bootstrap CSS.",
            "Fetch external API to get photos.",
            "Show quantity of related photos which depends on the pagination and LoadMore button.",
            "Functions: Show Featured Image, Search and show related photos, Load more related photos."
        ],
        capture:['./homepage.png', './loadMore.png', './search.png'],
        language: ["ReactJS"],
        finishedDate: new Date("2022-9-24")
    },
    {
        title: "Learning System",
        value: "learningSystem",
        description: ["Show pages with React component and Bootstrap CSS.",
            "Authentication using passport-jwt and passport-local",
            "Function: Register, Login, Logout, Search courses by title, enroll Course, Create course"
        ],
        capture: ['./createCourse.png', './createdCourses.png', './enrolledCourses.png', './homepage.png',
            './login.png', './profile.png', './register.png', './search.png'],
        language: ["NodeJS", "ExpressJS", "ReactJS", "MongoDB"],
        finishedDate: new Date("2022-9-28")
    },
    {
        title: "Google and Local Login System",
        value: "googleLoginSystem",
        description: ["Show pages with React component and Bootstrap CSS.",
            "Authentication using passport-jwt and passport-local",
            "Function: Register, Login, Logout, Search courses by title, enroll Course, Create course"
        ],
        capture:['./createPost.png', './googleLogin.png', './homepage.png', './login.png', './profile.png',
            './register.png'],
        language: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
        finishedDate: new Date("2022-9-23")
    },

];