# Flexible Image Card

## How to add to contentstack

To include a single flexible image card in any new template you can do the following:

1. Export your contentType from contentStack
2. Copy the below component schema and paste it into your contentType inside the `Schema` array of any group that will contain an image card
3. Copy any conditional field visibility rules from below and paste into your contentType
4. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

## ContentStack JSON Component Schema

```json
{
  "schema": [
    {
      "data_type": "group",
      "display_name": "Desktop Image",
      "field_metadata": {},
      "schema": [
        {
          "data_type": "file",
          "display_name": "Image",
          "uid": "image",
          "field_metadata": {
            "description": "",
            "rich_text_type": "standard",
            "image": true
          },
          "mandatory": false,
          "dimension": {
            "width": { "min": null, "max": null },
            "height": { "min": null, "max": null }
          },
          "non_localizable": false,
          "multiple": false,
          "unique": false
        },
        {
          "data_type": "text",
          "display_name": "Alt text",
          "uid": "alt_text",
          "field_metadata": {
            "description": "",
            "default_value": "",
            "version": 3
          },
          "format": "",
          "error_messages": { "format": "" },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "desktop_image",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    },
    {
      "data_type": "group",
      "display_name": "Mobile Image",
      "field_metadata": {},
      "schema": [
        {
          "data_type": "file",
          "display_name": "Image",
          "uid": "image",
          "field_metadata": {
            "description": "",
            "rich_text_type": "standard",
            "image": true
          },
          "dimension": {
            "width": { "min": null, "max": null },
            "height": { "min": null, "max": null }
          },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        },
        {
          "data_type": "text",
          "display_name": "Alt text",
          "uid": "alt_text",
          "field_metadata": {
            "description": "",
            "default_value": "",
            "version": 3
          },
          "format": "",
          "error_messages": { "format": "" },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "mobile_image",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    },
    {
      "data_type": "text",
      "display_name": "Header",
      "uid": "header",
      "field_metadata": {
        "description": "",
        "default_value": "",
        "version": 3
      },
      "format": "",
      "error_messages": { "format": "" },
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    },
    {
      "data_type": "text",
      "display_name": "Copy",
      "uid": "copy",
      "field_metadata": {
        "description": "",
        "default_value": "",
        "multiline": true,
        "version": 3
      },
      "format": "",
      "error_messages": { "format": "" },
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    }
  ]
}
```
