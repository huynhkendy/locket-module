/********************************
* Locket Gold Unlock Script
* Synchronized for Trượng Ngọc Huỳnh
*********************************/

const ua = $request.headers['User-Agent'] || $request.headers['user-agent'] || '';
const isLocket = ua.includes('Locket');

if (isLocket && $response && $response.body) {
    try {
        let body = JSON.parse($response.body);
        
        if (body.subscriber) {
            body.subscriber.subscriptions = body.subscriber.subscriptions || {};
            body.subscriber.entitlements = body.subscriber.entitlements || {};
            
            const entitlementData = {
                "is_sandbox": false,
                "expires_date": "2099-09-09T09:09:09Z",
                "original_purchase_date": "2024-01-01T00:00:00Z",
                "purchase_date": "2024-01-01T00:00:00Z",
                "ownership_type": "PURCHASED",
                "store": "app_store"
            };
            
            body.subscriber.entitlements["pro"] = entitlementData;
            body.subscriber.entitlements["Gold"] = entitlementData;
            
            body.subscriber.subscriptions["locket_gold_annual"] = {
                "is_sandbox": false,
                "expires_date": "2099-09-09T09:09:09Z",
                "original_purchase_date": "2024-01-01T00:00:00Z",
                "purchase_date": "2024-01-01T00:00:00Z",
                "store": "app_store"
            };
        }
        
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
