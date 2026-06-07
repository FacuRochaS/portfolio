import { Injectable, signal, computed } from '@angular/core';
import { es } from '../i18n/es';
import { en } from '../i18n/en';

export type Language = 'es' | 'en';

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  es,
  en
};

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  readonly currentLang = signal<Language>('es');

  // Computed function generator to safely bind in templates
  readonly translations = computed(() => TRANSLATIONS[this.currentLang()]);

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
  }
}
