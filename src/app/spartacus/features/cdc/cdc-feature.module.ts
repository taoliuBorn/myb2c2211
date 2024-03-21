import { NgModule } from '@angular/core';
import { cdcTranslationChunksConfig, cdcTranslations } from "@spartacus/cdc/assets";
import { CdcConfig, CdcRootModule, CDC_FEATURE } from "@spartacus/cdc/root";
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";

@NgModule({
  declarations: [],
  imports: [
    CdcRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [CDC_FEATURE]: {
        module: () =>
          import('@spartacus/cdc').then((m) => m.CdcModule),
      },
    }
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: cdcTranslations,
      chunks: cdcTranslationChunksConfig,
    },
  }),
  provideConfig(<CdcConfig>{
    cdc: [
      {
        baseSite: 'BASE_SITE_PLACEHOLDER',
        javascriptUrl: 'JS_SDK_URL_PLACEHOLDER',
        sessionExpiration: 3600
      },
    ],
  })
  ]
})
export class CdcFeatureModule { }
