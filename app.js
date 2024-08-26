// const blogTitles = document.getElementsByTagName('h1');
// for(const title of blogTitles){
//     // console.log(title.innerText);
//     // title.innerText = "Amar sunar bangla"
//     title.style.background = "red"
// }


// const blogDetails = document.getElementsByTagName('p');
// for(const details of blogDetails){
//     details.style.backgroundColor = "green"
// }


const thirdTitle = document.getElementById("third-title");
thirdTitle.style.border = "1px solid black"
// thirdTitle.style.border = "1px dotted black"
thirdTitle.style.padding = "25px"


const article = document.createElement('article');
article.classList.add('blog-main')

const h3 = document.createElement('h3')
h3.innerText = "my new awesome blog-5"

const p = document.createElement('p')
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil nulla voluptatum? Facere deleniti architecto dolorum, eveniet blanditiis, sunt quae dicta, ducimus recusandae amet expedita non ipsa. Deserunt, eum cupiditate quo commodi aliquam, cumque odit quibusdam temporibus impedit praesentium dolore!"

article.appendChild(h3)
article.appendChild(p)
// document.body.appendChild(article)
const div = document.getElementById("articale-main")
div.appendChild(article)


const blogs = document.getElementsByClassName("blog-main");

for(const blog of blogs){
    blog.style.border = "2px solid green"
    blog.style.margin = "16px"
    blog.style.padding = "10px"
}

