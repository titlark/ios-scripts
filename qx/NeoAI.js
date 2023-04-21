/*
‼️规则完全免费，仅供学习交流，🈲️商业用途 by 你有胸我有弟
^ [rewrite_local]
^https:\/\/api\.gugpt\.com\/api\/user\/info\.api url script-response-body NeoAIceshi.js
[mitm] 
hostname = api.gugpt.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/api/user/info.api';
if (url.indexOf(vip) != -1) {
    obj.result.vipId = "chat.vip.permanent";
    obj.result.userStatus = "vip";
    obj.result.vipExpAt = 9999999999;
    body = JSON.stringify(obj);
}
$done({body});