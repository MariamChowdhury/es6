const students=[
  {id:20,name:'mari'},
  {id:21,name:'mary'},
  {id:22,name:'max'},
  {id:23,name:'may'}
];
let names=students.map(s=>s.name);
const ids=students.map(x=>x.id);
console.log(ids);
console.log(names);