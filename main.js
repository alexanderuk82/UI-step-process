'use restrict';
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const steps = document.querySelectorAll('.side__steps');

let stepActive = 1;

function sgt() {
  stepActive++;
  if (stepActive > steps.length) {
    stepActive = steps.length;
  }
  stepUpdate();
  console.log(stepActive);
}
function ant() {
  stepActive--;
  if (stepActive < 1) {
    stepActive = 1;
  }
  stepUpdate();
  console.log(stepActive);
}

function stepUpdate() {
  steps.forEach((step, inx) => {
    if (inx < stepActive) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.height =
    ((actives.length - 1) / (steps.length - 1)) * 80 + '%';

  if (stepActive === 1) {
    prev.disabled = true;
  } else if (stepActive === steps.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

next.addEventListener('click', sgt);
prev.addEventListener('click', ant);
