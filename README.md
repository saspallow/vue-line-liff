# vue-line-liff

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

## LIFF

### Request Access Token
```
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H "Content-Type:application/x-www-form-urlencoded" \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={client_id}' \
--data-urlencode 'client_secret={client_secret}'
```

### Add LIFF App
```
curl -XPOST \
-H "Authorization: Bearer {access_token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "type": "{liff_view_size}",
        "url": "{liff_url}"
    }
}' \
https://api.line.me/liff/v1/apps
```

### Update LIFF App
```
curl -X PUT https://api.line.me/liff/v1/apps/{liff_id}/view \
-H "Authorization: Bearer {access_token}" \
-H "Content-Type: application/json" \
-d '{
  "type":"{liff_view_size}",
  "url":"{liff_url}"
}'
```