/*
‼️规则完全免费，仅供学习交流，🈲️商业用途 by 你有胸我有弟

[rewrite_local]
https:\/\/api\.revenuecat\.com\/v1\/subscribers\/cIrlSOwSOi-n-PD3j6DEh_EY url script-response-body GoodChatBot.js

[mitm] 
hostname = buy.itunes.apple.com

下载链接：https://apps.apple.com/cn/app/good-chatbot/id1667468949

版本号：1.5.40

技巧：
   需要注册登录后，点击Restore Purchase，在订阅信息的最上面图片的中间位置，有点模糊。
*/

var obj = JSON.parse($response.body);
obj = {
    "request_date_ms": 1680875165503, "request_date": "2023-04-07T13:46:05Z", "subscriber": {
        "last_seen": "2023-04-07T13:45:17Z",
        "first_seen": "2023-04-07T13:33:13Z",
        "original_application_version": "2",
        "non_subscriptions": {},
        "other_purchases": {},
        "management_url": "itms-apps://apps.apple.com/account/subscriptions",
        "subscriptions": {
            "aichat_premium_yearly1": {
                "is_sandbox": false,
                "period_type": "trial",
                "billing_issues_detected_at": null,
                "unsubscribe_detected_at": null,
                "expires_date": "2999-12-31T23:59:59Z",
                "grace_period_expires_date": null,
                "original_purchase_date": "2023-04-05T13:10:37Z",
                "purchase_date": "2023-04-05T13:10:37Z",
                "store": "app_store"
            }
        },
        "entitlements": {
            "premium": {
                "expires_date": "2999-12-31T23:59:59Z",
                "purchase_date": "2023-04-05T13:10:37Z",
                "product_identifier": "aichat_premium_yearly1",
                "grace_period_expires_date": null
            }
        },
        "original_purchase_date": "2023-04-05T13:10:37Z",
        "original_app_user_id": "$RCAnonymousID:2cbe832a3f3e4ce28fbec3266e2a5fca",
        "entitlement": {}
    }
}
$done({body});