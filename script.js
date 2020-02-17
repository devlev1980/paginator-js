let studentsDiv = document.getElementById('students');
let page_link = document.getElementsByTagName('a');
let studentsArr = [];
let currentPage = 1;
let per_page = 5;
let active = document.querySelector('a.active');
let ul;
let li;


function getStudents() {
    let url = './data/students.json';
    let myFetch = fetch(url);
    myFetch.then(function (response) {
        response.json().then(function (data) {
            showStudents(data.students)
        });
    });
}

getStudents();


function showStudents(students) {
    studentsArr.push(...students);
    ul = document.createElement('ul');
    ul.classList.add('students')

//     students.forEach(student => {
//         li = document.createElement('li');
//         li.innerHTML += `<span class="name">${student.name}:
// </span>
// <span class="language">${student.language}</span><br>
// `;
//         ul.appendChild(li);
//         studentsDiv.appendChild(ul)
//         // studentsDiv.innerHTML += student.name;
//     })

    // studentsDiv.innerHTML = output;
    // console.log(studentsDiv)

}

function pageClick(value, students, currentPage, per_page) {
    currentPage = +value
    let begin = ((currentPage - 1) * per_page);
    let end = begin + per_page;
    let paginatedStudents = students.slice(begin, end);
    console.log(paginatedStudents);
    ul = document.createElement('ul');
    ul.classList.add('students')
    paginatedStudents.forEach((student) => {
        li = document.createElement('li');
        li.innerHTML += `<span class="name">${student.name}:
</span>
<span class="language">${student.language}</span><br>`;
        ul.appendChild(li);

      let a =  document.getElementsByTagName('li');

    });
    if(studentsDiv.hasChildNodes()){
        while (studentsDiv.firstChild){
            studentsDiv.firstChild.remove();
        }
    }

    studentsDiv.appendChild(ul)

}

for (let page of page_link) {
    page.addEventListener('click', (event) => {
        if (document.querySelector('.pagination-wrapper>a.active') !== null) {
            document.querySelector('.pagination-wrapper>a.active').classList.remove('active')
        }
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active')
        }
        event.target.classList.add('active');
        console.log(+event.target.innerText);
        pageClick(+event.target.innerText, studentsArr, currentPage, per_page)
    })
}









