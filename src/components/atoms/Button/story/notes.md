# Button

## How to add to contentstack

To include a single button in any new template you can do the following:

1. Export your contentType from contentStack
2. Copy the below component schema and paste it into your contentType inside the `Schema` array of any group that will contain an image card
3. Copy any conditional field visibility rules from below and paste into your contentType
4. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

## ContentStack JSON Component Schema

```json
{
  "title": "CTA Button",
  "uid": "cta_button",
  "schema": [
    {
      "data_type": "text",
      "display_name": "Text",
      "uid": "text",
      "field_metadata": {
        "description": "",
        "default_value": "",
        "version": 3
      },
      "format": "",
      "error_messages": {
        "format": ""
      },
      "mandatory": true,
      "non_localizable": false,
      "multiple": false,
      "unique": false
    },
    {
      "data_type": "text",
      "display_name": "Url",
      "uid": "url",
      "field_metadata": {
        "description": "",
        "default_value": "",
        "version": 3
      },
      "format": "",
      "error_messages": {
        "format": ""
      },
      "mandatory": true,
      "non_localizable": false,
      "multiple": false,
      "unique": false
    },
    {
      "display_name": "Background colour",
      "extension_uid": "bltb5efeb4347f7e739",
      "field_metadata": {
        "extension": true,
        "default_value": "",
        "instruction": "Standard button colour is #09b8ec",
        "version": 3
      },
      "uid": "background_colour",
      "config": {},
      "data_type": "text",
      "mandatory": true,
      "non_localizable": false,
      "multiple": false,
      "unique": false
    }
  ]
}
```
