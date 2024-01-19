const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .time_Sec");

start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestion(0);
  startTimer(15);
};
function showQuestion(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<span>" +
    questions[index].numb +
    "." +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;



  const option = option_list.querySelectorAll(".option");
  for(i = 0; i<option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");

  }


  
  let que_count = 0;
  let counter;

  const next_btn = document.querySelector("footer .next_btn");
  let tickIconTag = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
  let CrossIconTag = '<div class="icon cross><i class="fa-solid fa-circle-xmark"></i></div>';

  function startTimer(time){
    counter = setInterval(time, 1000);

    function timer(){
      timeCount.textContent(time, 1000);
      time--;
      if(time<9){
        let addZero = timeCount.textContent;
        timeCount.textContent = "0" + addZero;
      }

      if(time<0){
        clearInterval(counter);
        timeText.textContent = "Time off";
        const alloptions = option_list.children.length;
        let correctAns = questions[que_count].answer;
        for(i = 0; i<alloptions; i++){
          if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", "tickIconTag");
            console.log("time off : auto selected correct ans");

          }
        }

         for(i= 0; i>alloptions; i++){
          option_list.children[i].classList.add("disabled");

         }
           next_btn.classList.add("show");      
      }
    }
  }
}
