// import "./component";
let schedule = {
  period: 7,
  lessonsum: 6,
  lesson: [
    {
      name: "Data Structure",
      teacher: "Guohui Li",
      time: [1, 2], //day index
      duration: 1,
    },
    {
      name: "C++",
      teacher: "++ Ma",
      time: [1, 5],
      duration: 1,
    },
    {
      name: "English",
      teacher: "Jack Ma",
      time: [4, 2],
      duration: 2,
    },
    {
      name: "Physics",
      teacher: "ZJW",
      time: [5, 1],
      duration: 6,
    },
  ],
};

LoadNodes(schedule);

let item = document.getElementsByClassName("item");
for (let index = 0; index < item.length; index++) {
  item[index].id
    ? item[index].addEventListener("click", DetailInformation)
    : null;
}
