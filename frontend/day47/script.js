const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Software Engineer",
    description: "Passionate about building scalable web applications and exploring new technologies.",
    tags: ["JavaScript", "React", "Node.js"]
  },
  {
    fullName: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    description: "Designs intuitive user experiences with a focus on accessibility and aesthetics.",
    tags: ["Figma", "UX Research", "Design Systems"]
  },
  {
    fullName: "Rohan Kapoor",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    profession: "Digital Marketer",
    description: "Specializes in performance marketing and brand growth strategies.",
    tags: ["SEO", "Google Ads", "Content Marketing"]
  },
  {
    fullName: "Neha Verma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Data Scientist",
    description: "Loves turning data into actionable insights using machine learning.",
    tags: ["Python", "Machine Learning", "Data Analysis"]
  },
];

var sum='';

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src=${elem.image} alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})
var main = document.querySelector('main')
main.innerHTML = sum