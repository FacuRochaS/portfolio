import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Matter from 'matter-js';
import { I18nService } from '../../core/services/i18n.service';

// Definimos nuestro árbol de tecnologías
// Tamaño original de tus archivos PNG (ej: 128x128)
const BASE_IMG_SIZE = 128;

export const TECH_EVOLUTION = [
  { level: 0, name: 'HTML', radius: 12, icon: 'assets/games/html.png' },
  { level: 1, name: 'CSS', radius: 18, icon: 'assets/games/css.png' },
  { level: 2, name: 'JavaScript', radius: 26, icon: 'assets/games/js.png' },
  { level: 3, name: 'TypeScript', radius: 36, icon: 'assets/games/ts.png' },
  { level: 4, name: 'Python', radius: 48, icon: 'assets/games/python.png' },
  { level: 5, name: 'Java', radius: 60, icon: 'assets/games/java.png' },
  { level: 6, name: 'Spring', radius: 75, icon: 'assets/games/spring.png' },
  { level: 7, name: 'Angular', radius: 90, icon: 'assets/games/angular.png' },
  { level: 8, name: 'Docker', radius: 110, icon: 'assets/games/docker.png' }
];

@Component({
  selector: 'app-suika-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suika-game.component.html',
  styleUrl: './suika-game.component.css'
})
export class SuikaGameComponent implements AfterViewInit, OnDestroy {
  @ViewChild('gameContainer', { static: true }) gameContainer!: ElementRef;
  i18n = inject(I18nService);

  private engine!: Matter.Engine;
  private render!: Matter.Render;
  private runner!: Matter.Runner;

  score = 0;
  nextTechLevel = 0; // Para mostrar qué va a caer (0 = HTML, 1 = CSS)

  ngAfterViewInit() {
    this.initMatterJS();
  }

  ngOnDestroy() {
    // Limpieza de memoria al cerrar la app
    if (this.render) {
      Matter.Render.stop(this.render);
      this.render.canvas.remove();
    }
    if (this.runner) Matter.Runner.stop(this.runner);
    if (this.engine) Matter.Engine.clear(this.engine);
  }

  private initMatterJS() {
    const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

    this.engine = Engine.create();

// 2. DIMENSIONES MUCHO MÁS COMPACTAS (300x420)
    const width = 280;
    const height = 400;

    this.render = Render.create({
      element: this.gameContainer.nativeElement,
      engine: this.engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent' // Lo hacemos transparente para poner el fondo con CSS
      }
    });

    // Ajustamos la pared del piso para las nuevas dimensiones
    const wallOptions = {
      isStatic: true,
      render: { fillStyle: '#4a4e69', strokeStyle: '#22223b', lineWidth: 4 } // Paredes con mejor estilo
    };

    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions);

    Composite.add(this.engine.world, [ground, leftWall, rightWall]);

    // 4. Lógica de Colisión (Fusión / Merge)
    Events.on(this.engine, 'collisionStart', (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA as any;
        const bodyB = pair.bodyB as any;

        // Si chocan dos tecnologías del mismo nivel
        if (bodyA.label === 'tech' && bodyB.label === 'tech' && bodyA.level === bodyB.level) {

          const currentLevel = bodyA.level;
          const nextLevel = currentLevel + 1;

          // Si no hemos llegado al límite (Docker)
          if (nextLevel < TECH_EVOLUTION.length) {

            // Eliminar las dos piezas viejas
            Composite.remove(this.engine.world, [bodyA, bodyB]);

            // Calcular el punto medio para spawnear la nueva pieza
            const midX = (bodyA.position.x + bodyB.position.x) / 2;
            const midY = (bodyA.position.y + bodyB.position.y) / 2;

            const newTech = TECH_EVOLUTION[nextLevel];
            const scale = (newTech.radius * 2) / BASE_IMG_SIZE;

            // Crear la nueva pieza evolucionada
            const newBody = Bodies.circle(midX, midY, newTech.radius, {
              label: 'tech',
              restitution: 0.3, // Rebote
              friction: 0.1,
              // Propiedad custom para nuestro juego
              plugin: { level: nextLevel },
              render: {
                sprite: {
                  texture: newTech.icon,
                  xScale: scale,
                  yScale: scale
                }
              }
            });
            // Hack de TypeScript para MatterJS
            (newBody as any).level = nextLevel;

            Composite.add(this.engine.world, newBody);

            // Sumar puntos
            this.score += (nextLevel * 10);
          }
        }
      });
    });

    // 5. Iniciar el motor
    Render.run(this.render);
    this.runner = Runner.create();
    Runner.run(this.runner, this.engine);
  }

  dropTech(event: MouseEvent) {
    const { Bodies, Composite } = Matter;

    const rect = this.gameContainer.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const safeX = Math.max(15, Math.min(x, 265));

    const currentTech = TECH_EVOLUTION[this.nextTechLevel];

    // Calculamos la escala para la pieza que cae
    const scale = (currentTech.radius * 2) / BASE_IMG_SIZE;

    const body = Bodies.circle(safeX, 30, currentTech.radius, {
      label: 'tech',
      restitution: 0.3,
      // ACÁ CARGAMOS LA IMAGEN DE LA PIEZA NUEVA
      render: {
        sprite: {
          texture: currentTech.icon,
          xScale: scale,
          yScale: scale
        }
      }
    });

    (body as any).level = this.nextTechLevel;

    Composite.add(this.engine.world, body);

    this.nextTechLevel = Math.floor(Math.random() * 3);
  }
  getTechIcon(level: number): string {
    const tech = TECH_EVOLUTION.find(t => t.level === level);
    return tech ? tech.icon : '';
  }

  // Devuelve el nombre de la tecnología basándose en su nivel
  getTechName(level: number): string {
    const tech = TECH_EVOLUTION.find(t => t.level === level);
    return tech ? tech.name : 'Unknown';
  }
}
