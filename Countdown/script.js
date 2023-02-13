window.onload = function() {
    let invoker = document.getElementById('invoker');
    let listener = invoker.addEventListener('click', init);
   }
   
   function init(){
    let invoker = document.getElementById('invoker');
    invoker.removeEventListener('click',init);
    invoke();
   }
   
   function invoke(){
    let audio = new Audio(''); //Audio file to start playing
    let target = document.getElementById('entry');
    fader(entry, true, 150);
    audio.play();
   }
   
   function fader(target, fade, delay){
    let interval = setInterval(function(){
     if (!target.style.opacity) {
      target.style.opacity = 1;
     }
     let condition = fade ? (target.style.opacity > 0) : (target.style.opacity < 1);
     if (condition) {
       target.style.opacity -= fade ? 0.1 : -0.1;
     } else {
       clearInterval(interval);
       if(fade){
           target.remove();
           countdown();
       }
     }
    }, 150);
   }
   
   Number.prototype.pad = Number.prototype.pad || function(base){
     var nr = this, len = (String(base).length - String(nr).length) + 1;
     return len > 0 ? new Array(len).join('0') + nr : nr;
   };
   

  function countdown(){
	var date = new Date("12/31/2023 00:00:00");
	var target = date.getTime();
    document.getElementById('main').classList.toggle('scale');
    main.style.opacity = 0;
    fader(main, false, 150);
    setInterval(function(){
     var dif = target - Date.now();
     var delta = dif > 0 ? dif : 0;
     var days = Math.floor(delta / 86400000);
     delta -= days * 86400000;
     var hours = Math.floor(delta / 3600000) % 24;
     delta -= hours * 3600000;
     var minutes = Math.floor(delta / 60000) % 60
     delta -= minutes * 60000;
     var seconds = Math.floor(delta / 1000) % 60;
     delta -= seconds * 1000;
     let remaining = [
      days.pad(10),
      hours.pad(10),
      minutes.pad(10), 
      seconds.pad(10),
      delta.pad(100)
     ];
     document.getElementById('main').innerHTML = remaining.join(':');
    }, 0);
   }