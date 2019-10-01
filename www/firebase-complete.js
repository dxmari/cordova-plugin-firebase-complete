var exec = require('cordova/exec');
var cordova = require("cordova");

function FirebaseCompletePlugin() {
    console.log("FirebaseCompletePlugin is created");
}

// ****************************** NOTIFICATIONS MODULE STARTS ******************************

// CHECK FOR PERMISSION
FirebaseCompletePlugin.prototype.hasPermission = function (success, error) {
    if (cordova.platformId !== "ios") {
        success(true);
        return;
    }
    exec(success, error, "FirebaseComplete", "hasPermission", []);
};
// SUBSCRIBE TO TOPIC //
FirebaseCompletePlugin.prototype.subscribeToTopic = function (topic, success, error) {
    exec(success, error, "FirebaseComplete", 'subscribeToTopic', [topic]);
}
// UNSUBSCRIBE FROM TOPIC //
FirebaseCompletePlugin.prototype.unsubscribeFromTopic = function (topic, success, error) {
    exec(success, error, "FirebaseComplete", 'unsubscribeFromTopic', [topic]);
}
// NOTIFICATION CALLBACK //
FirebaseCompletePlugin.prototype.onNotification = function (callback, success, error) {
    FirebaseCompletePlugin.prototype.onNotificationReceived = callback;
    exec(success, error, "FirebaseComplete", 'registerNotification', []);
}
// TOKEN REFRESH CALLBACK //
FirebaseCompletePlugin.prototype.onTokenRefresh = function (callback) {
    FirebaseCompletePlugin.prototype.onTokenRefreshReceived = callback;
}
// GET TOKEN //
FirebaseCompletePlugin.prototype.getToken = function (success, error) {
    exec(success, error, "FirebaseComplete", 'getToken', []);
}

// DEFAULT NOTIFICATION CALLBACK //
FirebaseCompletePlugin.prototype.onNotificationReceived = function (payload) {
    console.log("Received push notification")
    console.log(payload)
}
// DEFAULT TOKEN REFRESH CALLBACK //
FirebaseCompletePlugin.prototype.onTokenRefreshReceived = function (token) {
    console.log("Received token refresh")
    console.log(token)
}

// ****************************** NOTIFICATIONS MODULE ENDS ******************************

// ****************************** ANALYTICS MODULE STARTS ******************************

FirebaseCompletePlugin.prototype.setAnalyticsCollectionEnabled = function (enable, success, error) {
    exec(success, error, "FirebaseComplete", "setAnalyticsCollectionEnabled", [enable]);
};
FirebaseCompletePlugin.prototype.logEvent = function (name, params, success, error) {
    exec(success, error, "FirebaseComplete", "logEvent", [name, params]);
};

FirebaseCompletePlugin.prototype.logError = function (message, success, error) {
    exec(success, error, "FirebaseComplete", "logError", [message]);
};

FirebaseCompletePlugin.prototype.setCrashlyticsUserId = function (userId, success, error) {
    exec(success, error, "FirebaseComplete", "setCrashlyticsUserId", [userId]);
};

FirebaseCompletePlugin.prototype.setScreenName = function (name, success, error) {
    exec(success, error, "FirebaseComplete", "setScreenName", [name]);
};

FirebaseCompletePlugin.prototype.setUserId = function (id, success, error) {
    exec(success, error, "FirebaseComplete", "setUserId", [id]);
};

FirebaseCompletePlugin.prototype.setUserProperty = function (name, value, success, error) {
    exec(success, error, "FirebaseComplete", "setUserProperty", [name, value]);
};
// ****************************** ANALYTICS MODULE ENDS ******************************

module.exports = new FirebaseCompletePlugin();