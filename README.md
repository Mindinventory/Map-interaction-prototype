# Map interaction prototype

Map interaction for a mobile app,
made this sample app with React Native.


Check it out on Dribbble (https://dribbble.com/shots/4984844-Map-interaction-prototype)


![image](/screenshot/preview.gif)


# Installation


Android: `react-native run-android`

iPhone: `react-native run-ios`




# Usage

  Create your project on google console ([Here](https://console.cloud.google.com/home/dashboard)).
  And enable below APIs
  
  * Google Map API
  * Directions API 
  

## Android

  Create API Key from credentials. and put it in code as below to access google map.
  
```js
Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>

```

## iOS

```js
dd to `ios/YOUR_PROJECT_NAME/AppDelegate.m:

+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
```



### Version: 1.0

  * Initial Build



# LICENSE!

Map interaction prototype is [MIT-licensed](https://github.com/Mindinventory/Map-interaction-prototype/blob/master/LICENSE).

# Let us know!
We’d be really happy if you send us links to your projects where you use our component. Just send an email to sales@mindinventory.com And do let us know if you have any questions or suggestion regarding our work.
