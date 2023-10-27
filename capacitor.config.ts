import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter.testnnclsecond',
  appName: 'test-notifications-salesforce-mkcloud',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  cordova: {
    preferences: {
      "com.salesforce.marketingcloud.app_id":"",
      "com.salesforce.marketingcloud.access_token":"",
      "com.salesforce.marketingcloud.tenant_specific_endpoint":"",
      "com.salesforce.marketingcloud.analytics": "false",
      "salesforce.marketingcloud.delay_registration_until_contact_key_is_set": "false",
      "com.salesforce.marketingcloud.notification_small_icon": "ic_launcher_foreground"        
    }
  }
};

export default config;
