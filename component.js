//传入：该课程信息
function SingleLesson(lesson, id) {
  let singleLesson = "<span>" + lesson.name + "<span>";
  let lessonNode = document.createElement("div");
  lessonNode.innerHTML = singleLesson;
  lessonNode.classList.add("item");
  lessonNode.setAttribute("id", id);
  lessonNode.style.gridRow = "span " + lesson.duration;
  return lessonNode;
}

function EmptyNode() {
  let emptyNode = document.createElement("div");
  // let duration = 'item' + lesson.duration.toString();
  // emptyNode.classList.add(duration, 'empty');
  emptyNode.classList.add("item");
  return emptyNode;
}

function WeekdayNode(ordinal) {
  console.log(ordinal);
  let weekday = "<span>" + ordinal.toString() + "<span>";
  let weekdayNode = document.createElement("div");
  weekdayNode.innerHTML = weekday;
  weekdayNode.classList.add("item");
  return weekdayNode;
}

function LessonOrdinal(n) {
  let lessonOrdinal = [];
  for (let index = 0; index < n; index++) {
    let numberNode = document.createElement("div");
    let number = "<span>" + (index + 1).toString() + "</span>";
    numberNode.classList.add("item");
    numberNode.innerHTML = number;
    lessonOrdinal.push(numberNode);
  }
  return lessonOrdinal;
}

function AddNodes(schedule) {
  let nodeList = new Array();
  nodeList.push(EmptyNode());
  console.log(nodeList);
  let lessonOrdinal = LessonOrdinal(schedule.lessonsum);
  nodeList.push(...lessonOrdinal);

  let gridColumn = schedule.lessonsum + 1;
  let lessonNum = schedule.lesson.map((lesson) => {
    return gridColumn * (lesson.time[0] - 1) + 1 + lesson.time[1];
  });

  let allLesson = gridColumn * schedule.period;
  let lessonSection = 1;
  let weekday = 1;
  let lessonIndex = 0;
  while (lessonSection != allLesson + 1) {
    if (lessonSection % gridColumn == 1) {
      nodeList.push(WeekdayNode(weekday));
      weekday++;
      lessonSection++;
    } else if (lessonNum[lessonIndex] == lessonSection) {
      nodeList.push(SingleLesson(schedule.lesson[lessonIndex], lessonIndex));
      lessonSection += schedule.lesson[lessonIndex].duration;
      lessonIndex++;
    } else {
      nodeList.push(EmptyNode());
      lessonSection++;
    }
  }

  return nodeList;
}

function LoadNodes(schedule) {
  let main = document.getElementById("main");
  console.log(schedule.lessonsum);
  let r = schedule.lessonsum + 1;
  let p = schedule.period + 1;
  main.style.gridTemplateRows = "repeat(" + r + ",10vh)";
  main.style.gridTemplateColumns = "repeat(" + p + ",10vw)";

  let newChildNodes = AddNodes(schedule);
  newChildNodes.map((node) => {
    main.appendChild(node);
  });
}

function DetailInformation() {
  let detail = document.getElementById("detail");
  console.log(this.id);
  let id = this.id;
  let lesson = schedule.lesson[id];
  detail.innerHTML =
    "<p>" +
    lesson.name +
    "</p>" +
    "<p>" +
    lesson.teacher +
    "</p>" +
    '<div id="close">close</div>';
  document.getElementById("show").setAttribute("class", "shown");

  let closeButton = document.getElementById("close");
  closeButton.addEventListener("click", Hidden);
}

function Hidden() {
  let show = this.parentNode.parentNode;
  show.setAttribute("class", "hidden");
}
