const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const creditTotal = document.getElementById("credits");
const cardContainer = document.getElementById("display-courses");

courses.forEach(createCourseCard);

function createCourseCard(course, index) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course");

    if (course.completed === true) {
        const courseName = document.createElement("h3");
        courseName.textContent = "\u2713 " + course.subject + " " + course.number;
        courseCard.appendChild(courseName);
        courseCard.classList.add("complete");
    } else {
        const courseName = document.createElement("h3");
        courseName.textContent = course.subject + " " + course.number;
        courseCard.appendChild(courseName);
    }

    cardContainer.appendChild(courseCard);
    let totalCredits = courses.reduce((accumulator, course) => {
        return accumulator + course.credits;
    }, 0);
    creditTotal.textContent = totalCredits;
}

function getWDDCourses(course, index) {
    return course.subject === "WDD";
}

function getCSECourses(course, index) {
    return course.subject === "CSE";
}

const allCoursesButton = document.querySelector("#all-courses");
const wddCoursesButton = document.querySelector("#wdd-courses");
const cseCoursesButton = document.querySelector("#cse-courses");

allCoursesButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    courses.forEach(createCourseCard);
    let totalCredits = courses.reduce((accumulator, course) => {
        return accumulator + course.credits;
    }, 0);
    creditTotal.textContent = totalCredits;
})

wddCoursesButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    const wddCourses = courses.filter(getWDDCourses);
    wddCourses.forEach(createCourseCard);
    let totalCredits = courses.reduce((accumulator, course) => {
        if (course.subject === "WDD") {
            return accumulator + course.credits;
        }
        else {
            return accumulator;
        }
    }, 0);
    creditTotal.textContent = totalCredits;
});

cseCoursesButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    const cseCourses = courses.filter(getCSECourses);
    cseCourses.forEach(createCourseCard);
let totalCredits = courses.reduce((accumulator, course) => {
        if (course.subject === "CSE") {
            return accumulator + course.credits;
        }
        else {
            return accumulator;
        }
    }, 0);
    creditTotal.textContent = totalCredits;
});

