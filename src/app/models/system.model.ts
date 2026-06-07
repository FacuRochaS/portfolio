export type SystemPhase = 'login' | 'boot' | 'desktop';

export interface SystemState {
  phase: SystemPhase;
  language: string;
  theme: 'light' | 'dark';
}

export interface SystemData {
  time: Date;
  batteryLevel: number; // e.g., 404
  weather?: string;
}
