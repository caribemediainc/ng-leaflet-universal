import {
  ApplicationConfig,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';

export const config: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideExperimentalCheckNoChangesForDebug({ interval: 10000, useNgZoneOnStable: false, exhaustive: true }),
  ],
};
