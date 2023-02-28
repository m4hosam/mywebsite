import React from "react";
import Sketch from "react-p5";


class ParticleSystem extends React.Component {
    constructor(props) {
        super(props);
        this.particles = [];
    }

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, 200).parent(canvasParentRef);

        // Create particles
        for (let i = 0; i < 40; i++) {
            const radius = p5.random(1) + 1;
            const x = p5.random(p5.width - radius * 2) + radius;
            const y = p5.random(p5.height - radius * 2) + radius;
            const velocity = p5.createVector(p5.random(-.5, .5), p5.random(-.5, .5));
            this.particles.push(new Particle(x, y, radius, velocity));
        }
    };

    draw = (p5) => {
        p5.clear();

        // Draw particles
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(p5);
            this.particles[i].update(p5);

            // Draw connecting lines
            for (let j = i + 1; j < this.particles.length; j++) {
                const distance = p5.dist(
                    this.particles[i].x,
                    this.particles[i].y,
                    this.particles[j].x,
                    this.particles[j].y
                );

                if (distance < 200) {
                    p5.stroke(55, 55, 55, 280 - (distance / 100) * 255);
                    p5.line(
                        this.particles[i].x,
                        this.particles[i].y,
                        this.particles[j].x,
                        this.particles[j].y
                    );
                }
            }
        }
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />;
    }
}

class Particle {
    constructor(x, y, radius, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = [90, 90, 90];
        this.velocity = velocity;
    }

    // Draw particle
    draw(p5) {
        p5.fill(this.color);
        p5.noStroke();
        p5.circle(this.x, this.y, this.radius * 2);
    }

    // Update particle position
    update(p5) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bounce particles off edges
        if (this.x + this.radius > p5.width || this.x - this.radius < 0) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y + this.radius > p5.height || this.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
        }
    }
}

export default ParticleSystem;