class Timer {
  constructor(id,date) {
    this.element = document.getElementById(id);
    this.date = new Date(date);
  }

  initTimer(){

    let time = (this.date - new Date())/1000;

    let minutes = time/60;
    let hours = minutes/60;
    minutes = (hours - Math.floor(hours)) * 60;
    hours = Math.floor(hours);
    let seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
    minutes = Math.floor(minutes);
    this.element.innerHTML =  "  h:" + hours + "  m:" + minutes + "  s:" + seconds;

    if(time <= 300){
      this.element.style.color = "red";
       }
      if (time <= 0){
        this.end();
      }
  }

  start(){
    this.timer = setInterval(() => this.initTimer(),1000);
  }

  end(){
    this.element.innerHTML ="The end";
    clearInterval(this.timer);
  }
}
const timer1 = new Timer("timer1","June 25, 2020 17:51:00");
const timer2 = new Timer("timer2","June 19, 2020 19:00:00");
const timer3 = new Timer("timer3","June 20, 2020 19:00:00");
timer1.start();
timer2.start();
timer3.start();
