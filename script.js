const weeks=[
["01","Java Basics & Installation","Language comparison, JDK configuration and Hello World execution.",["JDK","Java vs C/C++","Hello World"]],
["02","Basic Java Operations","Primitive types, arithmetic, casting, ASCII/Unicode, conditions and loops.",["Data Types","Type Casting","Control Flow"]],
["03","Classes & Objects","Class fundamentals, object declaration, arrays of objects, methods and rectangle operations.",["Classes","Objects","Methods"]],
["04","Constructors & Overloading","Constructors, constructor chaining, this keyword, method overloading and garbage collection.",["Constructors","Overloading","GC"]],
["05","Objects & Static Members","Objects as parameters/returns, BankAccount objects and static variables/methods.",["Objects","Static","Methods"]],
["06","Final & Inner Classes","Final keyword plus static and non-static inner class implementations.",["final","Inner Classes","Nested Classes"]],
["07","Strings & Inheritance","String utilities, StringBuffer, StringTokenizer and basic inheritance.",["String","StringBuffer","Inheritance"]],
["08","Advanced Inheritance","super, multilevel inheritance, overriding and dynamic method dispatch.",["super","Overriding","Polymorphism"]],
["09","Packages & Interfaces","Packages, access modifiers, CLASSPATH, interfaces and polymorphism.",["Packages","Interfaces","Polymorphism"]],
["10","Exceptions & Byte Streams","Exception handling, propagation, custom exceptions and byte-stream file I/O.",["Exceptions","File I/O","Streams"]],
["11","Character Streams & Threads","Reader/Writer, file copying, text counting and Java multithreading.",["FileReader","Thread","Runnable"]]
];
const grid=document.createElement("div");grid.className="grid";
weeks.forEach(w=>{
 const n=w[0],url=`https://prazodsai.github.io/java-lab-record/week-${n}.pdf`;
 const card=document.createElement("article");card.className="card";
 card.innerHTML=`<div class="num">WEEK ${n}</div><h3>${w[1]}</h3><p>${w[2]}</p><div class="tags">${w[3].map(x=>`<span class="tag">${x}</span>`).join("")}</div><div class="actions"><a class="open" href="${url}" target="_blank">Open Document</a><a class="download" href="${url}" download>Download PDF</a></div>`;
 grid.appendChild(card);
});
document.getElementById("weekGrid").appendChild(grid);
function toggleTheme(){document.body.classList.toggle("light")}
