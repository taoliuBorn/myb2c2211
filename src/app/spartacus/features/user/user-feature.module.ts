import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";
import { userAccountTranslationChunksConfig, userAccountTranslations } from "@spartacus/user/account/assets";
import { UserAccountRootModule, USER_ACCOUNT_FEATURE } from "@spartacus/user/account/root";
import { userProfileTranslationChunksConfig, userProfileTranslations } from "@spartacus/user/profile/assets";
import { UserProfileRootModule, USER_PROFILE_FEATURE } from "@spartacus/user/profile/root";

@NgModule({
  declarations: [],
  imports: [
    UserAccountRootModule,
    UserProfileRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [USER_ACCOUNT_FEATURE]: {
        module: () =>
          import('./user-account-wrapper.module').then((m) => m.UserAccountWrapperModule),
      },
    }
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: userAccountTranslations,
      chunks: userAccountTranslationChunksConfig,
    },
  }),
  provideConfig(<CmsConfig>{
    featureModules: {
      [USER_PROFILE_FEATURE]: {
        module: () =>
          import('./user-profile-wrapper.module').then((m) => m.UserProfileWrapperModule),
      },
    }
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: userProfileTranslations,
      chunks: userProfileTranslationChunksConfig,
    },
  })
  ]
})
export class UserFeatureModule { }
