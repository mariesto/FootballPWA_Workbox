var webPush = require('web-push');

var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/cQI27B2-_q8:APA91bG_IJAKmZrPVCC0C6v-yR27mM0usg8Hshj2d1hcLj2-OaJOdsglCmTk6i6bE1MqJIddNXQxWPAgJnredt3PMkbm8fOZxH1cTvyxFdiSAexIMDNJAQts_vX0risqL7b6UcAyClJF",
    "keys": {
        "p256dh": "BKQ8kQvE16Rrac19xmZw3zOyal4wDnKrhfqr22dquk5Oxg4vyo+Ccit1HujYWatJV7Gcl4nbvkBiBjqjjbbkde8=",
        "auth": "hn1YzeKOwdlgguK9Fga0bQ=="
    }
};

var payload = 'Here is a payload!';

var options = {
    gcmAPIKey: 'AAAALQFKLqM:APA91bGP5tplF1g87qOik1pd4BVCdw_jnDs1PdqIN74rV7zzCCUjfvEg0VD9Qyy6sEzu3Lcz5YpUhQejHpjy1xSn2Pewmspz352NDYlWjsMV3Nmb5_ZSqfd2quXqfj8jOFbhK1yCymq5',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);