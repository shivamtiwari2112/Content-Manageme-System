///

const Config = {
  logoAlt: 'Content Management Tool',
  imageBaseUrl: "/",
  menu: {
    // [menu, path, firebase-collection-name]
    menu1: ["Menu", "/", 'beginner'],
    menu2: ["Advance", "/advanced", 'advanced'],
    menu3: ["Django", "/django", 'django'],
    menu5: ["Python English", "/python-tutorials", 'english'],
    menu6: ["Blog", "ext", "http://thinkdiff.net"],
    menu7: ["Mobile Apps", "ext", "http://ithinkdiff.net"],
  },
  social: {
    facebook: "",
    twitter:  "",
    github:   "",
    linkedin: "",
    youtube:  "",
  },
  author: {
    name: "Shivam Kumar"
  }
}

export default Config;

const Cards = [
  {
    title_english: "JavaScript Tutorial",
    title_other: "JavaScript Tutorial",
    short_desc: "This tutorial is written to give you the basic idea of javascript language and its use cases",
    image: "py-beg.png",
    title_other_css_class: 'color1'
  },
  {
    title_english: "Linux",
    title_other: "Linux CLI command",
    short_desc: "This article contains list of important tools you can use daily in your life as linux system administrator",
    image: "py-adv.png",
    title_other_css_class: 'color2'
  },
  {
    title_english: "DevOps",
    title_other: "Intro to DevOps",
    short_desc: "DevOps has become a trending profession, many experienced developers and fresher are switching their career field into this area.",
    image: "py-django.png",
    title_other_css_class: 'color3'
  },
  {
    title_english: "Python English",
    title_other: "Python Tutorials",
    short_desc: "Some of my English Python programming video tutorials are listed here.",
    image: "py-english.png",
    title_other_css_class: 'color5',
  }
];

export {Cards};