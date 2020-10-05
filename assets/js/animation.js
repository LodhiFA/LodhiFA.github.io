
var bottleIndex = 0;
var machineIndex = 0;

$(function () {
  showBottles();
  showMachines();
});

function showBottles() {
    var i;
    var slides = document.getElementsByClassName('bottles');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    bottleIndex++;
    if (bottleIndex > slides.length) {
      bottleIndex = 1;
    }
    slides[bottleIndex - 1].style.display = 'block';
    setTimeout(showBottles, 4000);
}

function showMachines() {
    var i;
    var slides = document.getElementsByClassName('machines');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    machineIndex++;
    if (machineIndex > slides.length) {
        machineIndex = 1;
    }
    slides[bottleIndex - 1].style.display = 'block';
    setTimeout(showMachines, 4000);
}