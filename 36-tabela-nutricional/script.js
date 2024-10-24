const details = document.querySelector('.details');

let isDragging = false;
let startY = 0;
let lastY = 0;
let animationID = null;

const startDrag = function (event) {
  isDragging = true;
  startY = event.clientY || event.touches[0].clientY;
  lastY =
    parseFloat(
      details.style.transform.replace('translateY(', '').replace('px)', '')
    ) || 0;
  details.style.userSelect = 'none';

  cancelAnimationFrame(animationID);
};

const moveDrag = function (event) {
  if (isDragging) {
    const clientY = event.clientY || event.touches[0].clientY;
    const deltaY = clientY - startY;
    const newTransform = Math.min(500, Math.max(40, lastY + deltaY));

    if (newTransform >= 470) {
      details.classList.remove('open');
      details.classList.add('closed');
      details.style.transform = 'translateY(40px)';
    } else {
      details.classList.add('open');
      details.classList.remove('closed');
      details.style.transform = `translateY(${newTransform}px)`;
    }
  }
};

const endDrag = function (event) {
  isDragging = false;
  details.style.userSelect = 'auto';

  const finalTransform = parseFloat(
    details.style.transform.replace('translateY(', '').replace('px)', '')
  );

  animateToFinalPosition(finalTransform);
};

function animateToFinalPosition(finalTransform) {
  let start = null;
  const duration = 300;

  const step = function (timestamp) {
    if (!start) start = timestamp;

    const progress = timestamp - start;
    const progressRatio = Math.min(progress / duration, 1);
    const currentTransform =
      finalTransform +
      (parseFloat(
        details.style.transform.replace('translateY(', '').replace('px)', '')
      ) -
        finalTransform) *
        progressRatio;
    details.style.transform = `translateY(${currentTransform}px)`;

    if (progress < duration) animationID = requestAnimationFrame(step);
  };

  animationID = requestAnimationFrame(step);
}

details.addEventListener('mousedown', startDrag);
details.addEventListener('touchstart', startDrag);

document.addEventListener('mousemove', moveDrag);
document.addEventListener('touchmove', moveDrag);

document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

function handleSeeDetails() {
  details.classList.add('open');
  details.classList.remove('closed');
}

function handleCloseDetails() {
  details.classList.add('closed');
  details.classList.remove('open');
}

function handleToggleFavorite(element) {
  const isFavorited = element.dataset.favorited === 'true';

  const iconClass = isFavorited ? 'ph ph-heart' : 'ph-fill ph-heart';
  element.dataset.favorited = !isFavorited;

  const icon = element.querySelector('i');
  icon.className = iconClass;
}
