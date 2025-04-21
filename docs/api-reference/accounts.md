---
id: accounts
title: Accounts
sidebar_label: Accounts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- # Accounts API

Manage user accounts linked to your platform.

---

 ## GET Balance

**Method:** `GET`  
**URL:** `{{baseUrl}}/zoqq/api/v1/accounts/balance`

### Headers

| Key              | Value                         | Description                  |
|------------------|-------------------------------|------------------------------|
| x-api-key        | `{{Shared Xapikey By Zoqq}}`   | Required                     |
| x-program-id     | `{{BasedOnRequirement}}`       | Required                     |
| x-request-id     | `{{IdempotencyKey}}`           | Required                     |
| x-user-id        | `{{Useridentificationkey}}`    | Required                     |
| Authorization    | `Bearer {{Token}}`             | Optional (Nullable as of now)|

### Response

```json
{
  "code": 200,
  "status": "success",
  "message": "",
  "data": [
    {
      "currency": "SGD",
      "available_balance": 42.72,
      "pending_amount": 0,
      "reserved_amount": 12
    },
    {
      "currency": "USD",
      "available_balance": 22.72,
      "pending_amount": 5,
      "reserved_amount": 10
    }
  ]
}
 -->



# Accounts

## Get Accounts

This API allows you to retrieve all accounts associated with a user in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>

```
GET {{baseUrl}}/zoqq/api/v1/accounts
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a list of all accounts associated with the authenticated user. 
    The response includes detailed information about each account, including account status, 
    account number, institution details, and supported features.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier based on requirement |
    | x-request-id | string | Yes | Idempotency key for request tracking |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Optional) |
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | number | Response code (200 for success) |
    | status | string | Status of the response (success/error) |
    | message | string | Additional information about the response |
    | data | array | Array of account objects |
    | data[].id | string | Unique identifier for the account (UUID) |
    | data[].status | string | Account status (ACTIVE, INACTIVE, etc.) |
    | data[].account_number | string | Account number |
    | data[].label | string | Optional account label |
    | data[].account_type | string | Type of account (Checking, Savings, etc.) |
    | data[].country_code | string | ISO country code |
    | data[].institution | object | Information about the financial institution |
    | data[].supported_features | array | List of supported payment features |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url {{baseUrl}}/zoqq/api/v1/accounts \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    
    url = "{{baseUrl}}/zoqq/api/v1/accounts"
    
    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }
    
    response = requests.get(url, headers=headers)
    print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/accounts"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("GET", HttpRequest.BodyPublishers.noBody())
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```
    
      </TabItem>
      <TabItem value="php" label="PHP">
    
    ```php
    <?php
    $curl = curl_init();
    
    curl_setopt_array($curl, [
      CURLOPT_URL => "{{baseUrl}}/zoqq/api/v1/accounts",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "x-api-key: {{Shared Xapikey By ZOqq}}",
        "x-program-id: {{BasedOnRequirement}}",
        "x-request-id: {{IdempotencyKey}}",
        "x-user-id: {{Useridentificationkey}}",
        "Authorization: Bearer {{YOUR_TOKEN}}"
      ],
    ]);
    
    $response = curl_exec($curl);
    curl_close($curl);
    
    echo $response;
    ?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
    var client = new RestClient("{{baseUrl}}/zoqq/api/v1/accounts");
    var request = new RestRequest(Method.GET);
    request.AddHeader("x-api-key", "{{Shared Xapikey By ZOqq}}");
    request.AddHeader("x-program-id", "{{BasedOnRequirement}}");
    request.AddHeader("x-request-id", "{{IdempotencyKey}}");
    request.AddHeader("x-user-id", "{{Useridentificationkey}}");
    request.AddHeader("Authorization", "Bearer {{YOUR_TOKEN}}");
    IRestResponse response = client.Execute(request);
    Console.WriteLine(response.Content);
    ```
    
      </TabItem>
    </Tabs>
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="200" label="200: Success" default>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "",
      "data": [
        {
          "id": "85c7a2e6-7c4f-4abc-9e15-d4f3b5b8c382",
          "status": "ACTIVE",
          "account_number": "8483855800",
          "label": "",
          "account_type": "Checking",
          "country_code": "US",
          "institution": {
            "address": "89-16 Jamaica Ave",
            "city": "Woodhaven, NY",
            "name": "Community Federal Savings Bank",
            "zip_code": "11421"
          },
          "supported_features": [
            {
              "currency": "USD",
              "local_clearing_system": "ACH",
              "routing_codes": [
                {
                  "type": "ach",
                  "value": "026073150"
                }
              ],
              "transfer_method": "LOCAL",
              "type": "DEPOSIT"
            },
            {
              "currency": "USD",
              "local_clearing_system": "FEDWIRE",
              "routing_codes": [
                {
                  "type": "fedwire",
                  "value": "026073008"
                }
              ],
              "transfer_method": "LOCAL",
              "type": "DEPOSIT"
            },
            {
              "currency": "USD",
              "routing_codes": [
                {
                  "type": "swift",
                  "value": "CMFGUS33"
                }
              ],
              "transfer_method": "SWIFT",
              "type": "DEPOSIT"
            }
          ]
        }
      ]
    }
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```
    
      </TabItem>
    </Tabs>
  </div>
</div>