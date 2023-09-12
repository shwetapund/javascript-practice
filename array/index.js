//join()

const arr = ["shital","shweta","shravani"]
console.log(arr.join())

const arr1 = ["A","B","C","D"]
console.log(arr1.join("*"))

//reverse()

const arrReverse = ["shital","shweta","shravani"]
console.log(arrReverse.reverse())

const arrreverse = ["5","4","13"]
console.log(arrreverse.reverse())


//indexOf()

const arrindex= ["abc","def","ghi"]
console.log(arrindex.indexOf("ghi"))

const arrindex1= ["a","b","c"]
console.log(arrindex1.indexOf("a"))

//splice()

const students1 = ["shweta","shital","kartik","datta"]
console.log(students1);
students1.splice(1, 2, "yogita", "achal");
console.log(students1);

const students = ["A","B","C","D","E","F"]
console.log(students)
students.splice(1, 2,"W","Q")
console.log(students1)

const alphabets=['a','b','c','d','e'];
console.log(alphabets);
alphabets.splice(2,2,"r","u")
console.log(alphabets);

//sort

const abc = ["s","d","f","t"]
console.log(abc);
abc.sort()
console.log(abc);

const abe = [1,0,40,3]
console.log(abe);
abe.sort();
console.log(abe);