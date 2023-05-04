import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BarChartModule } from './app/bar-chart.module';


platformBrowserDynamic().bootstrapModule(BarChartModule)
  .catch(err => console.error(err));
