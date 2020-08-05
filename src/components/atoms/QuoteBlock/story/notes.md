# Quote Block

## How to add to contentstack

To include the quote block in any new template you can do the following:

1. Export your contentType from contentStack
2. Ensure there is the below modular block specification inside the `Schema` array
3. Copy the below component schema and paste it inside the `blocks` array
4. Copy any conditional field visibility rules from below and paste into your contentType
5. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

### Additional notes

You will need to manually add the 'color picker' extension in your content type for the following fields:

`"display_name": "Copy Color"`

`"display_name": "Background Color"`

`"display_name": "Background Color"`

`"display_name": "Quote Mark Color"`

_quoteBlockData.js_ shows the mapping between the contentStack data and component props.

## ContentStack JSON Modular Block Section Specification

```javascript
{
  "data_type": "blocks",
  "display_name": "Sections",
  "blocks": [ /* your component here */ ],
  "multiple": true,
  "uid": "sections",
  "field_metadata": {},
  "non_localizable": false,
  "mandatory": false,
  "unique": false
}
```

## ContentStack JSON Component Schema

```json
{
  "title": "Quote Block",
  "uid": "quote_block",
  "schema": [
    {
      "display_name": "Background Color",
      "extension_uid": "bltb5efeb4347f7e739",
      "field_metadata": {
        "extension": true,
        "instruction": "Please check that background & text colours are accessible",
        "description": "You can check your combination of background and text colour here: https://contrastchecker.com/",
        "default_value": "",
        "version": 3
      },
      "uid": "background_color",
      "config": {
        "defaultColor": "#f4f6f6"
      },
      "data_type": "text",
      "non_localizable": false,
      "multiple": false,
      "mandatory": true,
      "unique": false
    },
    {
      "data_type": "group",
      "display_name": "Quote Image",
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
            "width": {
              "min": null,
              "max": null
            },
            "height": {
              "min": null,
              "max": null
            }
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
            "version": 3,
            "instruction": "If you add an image always include alt text for accessibility"
          },
          "format": "",
          "error_messages": {
            "format": ""
          },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "quote_image",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    },
    {
      "data_type": "group",
      "display_name": "Quote",
      "field_metadata": {},
      "schema": [
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
          "error_messages": {
            "format": ""
          },
          "mandatory": true,
          "non_localizable": false,
          "multiple": false,
          "unique": false
        },
        {
          "display_name": "Copy Color",
          "extension_uid": "bltb5efeb4347f7e739",
          "field_metadata": {
            "extension": true,
            "default_value": "",
            "instruction": "Please check that background & text colours are accessible",
            "description": "You can check your combination of background and text colour here: https://contrastchecker.com/",
            "version": 3
          },
          "uid": "color",
          "config": {},
          "data_type": "text",
          "non_localizable": false,
          "multiple": false,
          "mandatory": true,
          "unique": false
        },
        {
          "display_name": "Quotation Mark Color",
          "extension_uid": "bltb5efeb4347f7e739",
          "field_metadata": {
            "extension": true,
            "default_value": "",
            "version": 3,
            "instruction": ""
          },
          "uid": "quotation_mark_color",
          "config": {},
          "data_type": "text",
          "non_localizable": false,
          "multiple": false,
          "mandatory": true,
          "unique": false
        },
        {
          "data_type": "text",
          "display_name": "Author",
          "uid": "author",
          "field_metadata": {
            "description": "",
            "default_value": "",
            "version": 3
          },
          "format": "",
          "error_messages": {
            "format": ""
          },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "quote",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    }
  ]
}
```
