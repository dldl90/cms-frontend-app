# Image Gallery Block

## How to add to contentstack

To include the section title in any new template you can do the following:

1. Export your contentType from contentStack
2. Ensure there is the below modular block specification inside the `Schema` array
3. Copy the below component schema and paste it inside the `blocks` array
4. Copy any conditional field visibility rules from below and paste into your contentType
5. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

### Additional notes

_imageGalleryBlockData.js_ shows the mapping between the contentStack data and component props.

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
  "title": "Image Gallery Block",
  "uid": "image_gallery_block",
  "schema": [
    {
      "data_type": "group",
      "display_name": "Image Items",
      "field_metadata": {
        "instruction": "Min: 2 images, max: 4 images"
      },
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
              "mandatory": true,
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
          "error_messages": {
            "format": ""
          },
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
          "error_messages": {
            "format": ""
          },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "image_items",
      "multiple": true,
      "max_instance": 4,
      "non_localizable": false,
      "mandatory": false,
      "unique": false
    }
  ]
}
```
