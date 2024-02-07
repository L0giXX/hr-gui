import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  Briefcase,
  LucideAngularModule,
  Users,
  Contact,
  Network,
  HandCoins,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Briefcase,
        Users,
        Contact,
        Network,
        HandCoins,
      })
    ),
  ],
};
