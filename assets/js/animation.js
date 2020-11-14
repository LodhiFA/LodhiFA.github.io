
var bottleIndex = 0;
var machineIndex = 0;
var vialIndex = 0;

$(function () {
  showBottles();
  showMachines();
  showVials();
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
    slides[machineIndex - 1].style.display = 'block';
    setTimeout(showMachines, 6000);
}

function showVials() {
    var i;
    var slides = document.getElementsByClassName('vials');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    vialIndex++;
    if (vialIndex > slides.length) {
      vialIndex = 1;
    }
    slides[vialIndex - 1].style.display = 'block';
    setTimeout(showVials, 6000);
}