const logotext = "KACPER";
const meta = {
    title: "Kacper Wierzbicki",
    description: "I’m Kacper Wierzbicki computer engineer _ programmer, currently working in Warsaw",
};

const introdata = {
    title: "I’m Kacper Wierzbicki",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Computer Engineer with a passion for software development and finding crative solutions. I have experience in programming and qa testing.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Growth-oriented IT engineer with a strong commitment to learning and excelling in dynamic, challenging environments ",

};
const worktimeline = [{
        jobtitle: "QA Tester",
        where: "Qloc",
        date: "2024 - present",
    },
    {
        jobtitle: "IT Intern",
        where: "Ta-Gor",
        date: "2023-2024",
    },
];

const skills = [{
        name: "C++/C#",
        value: 90,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Python",
        value: 60,
    },
    {
        name: "Kotlin",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: require("./assets/images/MainPage.jpg"),
        description: "Html project",
        link: "/html_project",

    },
    {
         img: require("./assets/images/MainCat.jpg"),
        description: "Random Cats",
        link: "/cats_project",
    },
    {
        img: "https://picsum.photos/400/?",
        description: "Paint - placeholder",
        //link: "paint_project",
    },
    {
        img: "https://picsum.photos/400/600/?",
        description: "Vectors - placeholder",
        //link: "vectors_project",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Perfect circle maker - placeholder ",
        //link: "circle_project",
    },
      {
        img: "https://picsum.photos/400/800/?grayscale",
        description: " Vending and cash machine interface - placeholder ",
        //link: "vending_project",
    },
      {
        img: "https://picsum.photos/400/800/?grayscale",
        description: " Learning App - placeholder ",
        //link: "learning_project",
    },
    

];

const contactConfig = {
    YOUR_EMAIL: "kacperwierzbicki57@gmail.com",
    YOUR_FONE: "+48 728 621 907",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0wup3hj",
    YOUR_TEMPLATE_ID: "template_5dotvlh",
    YOUR_USER_ID: "tpeqmcsG2fT5-VcR6",
};

const socialprofils = {
     github: "https://github.com/kacperwierzbicki57?tab=repositories",
//     facebook: "https://facebook.com",
//     linkedin: "https://linkedin.com",
//     twitter: "https://twitter.com",
 };
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};