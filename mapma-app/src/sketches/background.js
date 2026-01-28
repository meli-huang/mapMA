export const backgroundSketch = (p) => {
  const trailDuration = 1200; // milliseconds (1.5 seconds)
  const brushSize = 20;
  let trail = [];
  let lastX = 0;
  let lastY = 0;

  p.setup = function() {
    const parent = p.canvas?.parentElement;
    const w = parent.offsetWidth;
    const h = parent.offsetHeight;

    p.createCanvas(w, h);
    p.clear();
  };

  p.draw = function() {

    p.clear();

    // Add current mouse position to trail
    const distance = p.dist(p.mouseX, p.mouseY, lastX, lastY);
    if (distance > 5) { // Only add if moved more than 5px
      trail.push({
        x: p.mouseX,
        y: p.mouseY,
        createdAt: p.millis()
      });
      lastX = p.mouseX;
      lastY = p.mouseY;
    }
    
    // Draw trail
    for (let i = trail.length - 1; i >= 0; i--) {
      const point = trail[i];
      const age = p.millis() - point.createdAt;
      
      // Remove old points
      if (age > trailDuration) {
        trail.splice(i, 1);
        continue;
      }
      
      // Calculate opacity based on age
      const opacity = p.map(age, 0, trailDuration, 200, 0);
      
      // Draw brushstroke
      p.noStroke();
      p.fill(46, 98, 255, opacity);
      p.ellipse(point.x, point.y, brushSize);
    }
  };

  p.windowResized = function() {
    const container = document.querySelector('.App');
    if (container) {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    }
  };
};
