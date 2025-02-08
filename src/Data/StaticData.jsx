export const HeroData = {
    Title: {
        title: "Hi, I'm Akash"
    },
    Desc: {
        description: "I'm a Java Full-Stack Developer with over 2 years of experience using Java on the Backend and React.js on the Frontend."
    },
    Buttons :{
        Contact_Me : "Contact Me",
        View_Resume : "View Resume",
        My_Resume : "My Resume",
        Download_Resume : "Download Resume",
        Resume_Preview : "Resume Preview",
        Akash_Resume : "AkashBodke_Resume.pdf",
        Close : "Close"
    },
    MailTo :{
        mailto : "mailto:akashbodke0211@gmail.com"
    },
    path : {
        imgUrl : "hero/heroImage.png",
        resumeUrl : "/resume.pdf",
    }
};

export const AboutData = [
    {
        Designation: "Backend Developer",
        Role: "I have experience developing fast and optimized back-end systems and APIs.",
        iconSrc: "about/serverIcon.png"
    },
    {
        Designation: "FrontEnd Developer",
        Role: "I'm a frontend developer with experience in building responsive and optimized sites.",
        iconSrc: "about/uiIcon.png"
    },
    {
        Designation: "SAP Techno-Functional",
        Role: "I have experience in SAP (Supply Chain Management) in APO and Logistics Module.",
        iconSrc: "about/sap.png"
    }
];

export const AboutImgData = {
    Title : {
        title: "About"
    },
    aboutImgSrc : {
        srcImg : "about/aboutImage.png"
    }
}

export const ContactData = {
    Title : {
        title : "Contact",
        desc : "Feel free to reach out!"
    },
    ImageSrc : {
        mailImg : "contact/emailIcon.png",
        linkedinImg : "contact/linkedinIcon.png",
        gitImg : "contact/githubIcon.png"
    },
    Urls : {
      mailtTo : "mailto:myemail@email.com",
      mail : "akashbodke0211@email.com",
      linkedinUrl : "https://www.linkedin.com/in/akash-bodke-52b075170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedinDesc : "linkedin.com/Akash-Bodke",
      giturl : "https://github.com/AkashBodke112233/Portfolio",
      gitDesc : "github.com/AkashBodke"
    }
}

export const NavData = {
    path : {
        closeIcon : "nav/closeIcon.png",
        menuIcon : "nav/menuIcon.png",
    },
    Title : {
       title : "Portfolio",
    },
    Pages : {
        About : "About",
        Experience : "Experience",
        Projects : "Projects",
        Contact : "Contact"
    },
    href : {
        home : "/",
        about : "#about",
        exp : "#experience",
        project : "#projects",
        contact : "#contact"
    },
    id : {
        about : "about",
        experience : "experience",
        project : "projects",
        contact : "contact"
    }
}

export const projects = [
    {
      image: "slides/slide2.png",
      heading: "Self Portfolio",
      desc: "This is prortfolio built in reactjs + HTML + Javascript + CSS. This portfolio is provide all the iformatio regarding me in detailed also you can contact me through it. ",
      skills: ["Reactjs", "JavaScript", "HTML", "CSS", "Bootstrap"]
    },
      {
        image: "slides/slide1.png",
        heading: "Employee Managment Dashboard",
        desc: "This Project is Employee Managment Dashboard where HR can manulate the Employees data for their daily activities like onboard Employee or deactivate the Employee after they resigned.",
        skills: ["Java", "SpringBoot", "MySql","Github","Hibarnate","Reactjs","JavaScript","HTML","CSS","Bootstrap"]
      },
     
      {
        image: "slides/slide3.png",
        heading: "Self Portfolio",
        desc: "This is prortfolio built in reactjs + HTML + Javascript + CSS. This portfolio is provide all the iformatio regarding me in detailed also you can contact me through it. ",
        skills: ["Reactjs", "JavaScript", "HTML", "CSS", "Bootstrap"]
      }
    ]


    export const history = [
        {
          role: "Associate IT Engineer (Java-Azure Dev.)",
          organisation: "Kaiser Permenante",
          startDate: "Feb, 2024",
          endDate: "Present",
          experiences: ["Worked in MPC Application", "Designed the user Friendly UI Screens for multiple Applications"],
          imageSrc: "history/kaiserpermenante.png"
        },
        {
          role: "Assistant Manager",
          organisation: "Jio Platforms Ltd",
          startDate: "July, 2022",
          endDate: "Dec, 2023",
          experiences: [
            "Worked as Techno-Function in SAP",
            "Worked in Java Backend Development"
          ],
          imageSrc: "history/Jio.png"
        }
      ]

      export const skills = [
        {
          title: "HTML",
          imageSrc: "skills/html.png"
        },
        {
          title: "CSS",
          imageSrc: "skills/css.png"
        },
        {
          title: "React",
          imageSrc: "skills/react.png"
        },
        {
            title: "Angular",
            imageSrc: "skills/angular.png"
        },
        {
          title: "Node",
          imageSrc: "skills/node.png"
        },
        {
          title: "Java",
          imageSrc: "skills/java.png"
        },
        {
            title: "SpringBoot",
            imageSrc: "skills/springboot.png"
        },
        {
          title: "MongoDB",
          imageSrc: "skills/mongodb.png"
        },
        {
          title: "MySql",
          imageSrc: "skills/mysql.png"
        }
      ]

      export const errorBoundary = {
        message : {
          exceptionMessage : "ErrorBoundary caught an error",
          errorMessage : "Something went wrong."
        }
      }

