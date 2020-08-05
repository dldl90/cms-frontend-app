# Hero Banner

## How to add to contentstack

To include the hero banner in any new template you can do the following:

1. Export your contentType from contentStack
2. Copy the below component schema and paste it into your contentType inside the `Schema` array
3. Copy any conditional field visibility rules from below and paste into your contentType
4. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

### Additional notes

You will need to manually add the 'color picker' extension in your content type for the following fields:

`"display_name": "Solid Background Colour"`

`"display_name": "Overlay Colour"`

`"display_name": "Copy Color"`

_heroBannerData.js_ shows the mapping between the contentStack data and component props.

## ContentStack JSON Component Schema

```json
{
  "data_type": "group",
  "display_name": "Hero Banner",
  "field_metadata": {},
  "schema": [
    {
      "data_type": "text",
      "display_name": "Hero Banner Option",
      "display_type": "dropdown",
      "enum": {
        "advanced": false,
        "choices": [
          {
            "value": "Background Image"
          },
          {
            "value": "Solid Background Color"
          },
          {
            "value": "none"
          }
        ]
      },
      "multiple": false,
      "uid": "hero_banner_option",
      "field_metadata": {
        "description": "",
        "default_value": "none"
      },
      "mandatory": false,
      "non_localizable": false,
      "unique": false,
      "min_instance": null,
      "max_instance": null
    },
    {
      "data_type": "group",
      "display_name": "Background Image Group",
      "field_metadata": {},
      "schema": [
        {
          "data_type": "file",
          "display_name": "Desktop Image",
          "uid": "desktop_image",
          "extensions": [],
          "field_metadata": {
            "description": "",
            "rich_text_type": "standard",
            "instruction": "Only desktop image is required"
          },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        },
        {
          "data_type": "file",
          "display_name": "Mobile Image",
          "uid": "mobile_image",
          "extensions": [],
          "field_metadata": {
            "description": "",
            "rich_text_type": "standard"
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
            "default_value": ""
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
          "data_type": "group",
          "display_name": "Optional Overlay",
          "field_metadata": {},
          "schema": [
            {
              "data_type": "boolean",
              "display_name": "Include overlay",
              "uid": "include_overlay",
              "field_metadata": {
                "description": "",
                "default_value": ""
              },
              "non_localizable": false,
              "multiple": false,
              "mandatory": false,
              "unique": false
            },
            {
              "display_name": "Overlay Color",
              "extension_uid": "blt4c4eb12803ae4620",
              "field_metadata": {
                "extension": true,
                "default_value": ""
              },
              "uid": "overlay_color",
              "config": {},
              "data_type": "text",
              "non_localizable": false,
              "multiple": false,
              "mandatory": false,
              "unique": false
            },
            {
              "data_type": "boolean",
              "display_name": "Semi Transparent",
              "uid": "semi_transparent",
              "field_metadata": {
                "description": "",
                "default_value": false
              },
              "non_localizable": false,
              "multiple": false,
              "mandatory": false,
              "unique": false
            }
          ],
          "uid": "optional_overlay",
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "background_image_group",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    },
    {
      "display_name": "Solid Background Color",
      "extension_uid": "blt4c4eb12803ae4620",
      "field_metadata": {
        "extension": true,
        "default_value": ""
      },
      "uid": "solid_background_color",
      "config": {},
      "data_type": "text",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    },
    {
      "data_type": "group",
      "display_name": "Hero Content",
      "field_metadata": {},
      "schema": [
        {
          "data_type": "text",
          "display_name": "Content Alignment",
          "display_type": "dropdown",
          "enum": {
            "advanced": false,
            "choices": [
              {
                "value": "full width"
              },
              {
                "value": "right"
              },
              {
                "value": "left"
              },
              {
                "value": "center"
              }
            ]
          },
          "multiple": false,
          "uid": "content_alignment",
          "field_metadata": {
            "description": "",
            "default_value": "center",
            "instruction": "Choose where hero content is positioned over the image or solid background colour"
          },
          "min_instance": null,
          "max_instance": null,
          "non_localizable": false,
          "mandatory": false,
          "unique": false
        },
        {
          "data_type": "group",
          "display_name": "Title Image",
          "field_metadata": {},
          "schema": [
            {
              "data_type": "file",
              "display_name": "Desktop Image",
              "uid": "desktop_image",
              "extensions": [],
              "field_metadata": {
                "description": "",
                "rich_text_type": "standard",
                "instruction": "Only desktop image is required"
              },
              "non_localizable": false,
              "multiple": false,
              "mandatory": false,
              "unique": false
            },
            {
              "data_type": "file",
              "display_name": "Mobile Image",
              "uid": "mobile_image",
              "extensions": [],
              "field_metadata": {
                "description": "",
                "rich_text_type": "standard"
              },
              "non_localizable": false,
              "multiple": false,
              "mandatory": false,
              "unique": false
            },
            {
              "data_type": "text",
              "display_name": "Alt Text",
              "uid": "alt_text",
              "field_metadata": {
                "description": "",
                "default_value": ""
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
          "uid": "title_image",
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
            "allow_rich_text": true,
            "description": "",
            "multiline": false,
            "rich_text_type": "custom",
            "options": [
              "undo",
              "redo",
              "format",
              "bold",
              "underline",
              "italic",
              "alignment",
              "link",
              "properties"
            ],
            "version": 3
          },
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        },
        {
          "display_name": "Copy Color",
          "extension_uid": "blt4c4eb12803ae4620",
          "field_metadata": {
            "extension": true
          },
          "uid": "copy_color",
          "config": {},
          "data_type": "text",
          "non_localizable": false,
          "multiple": false,
          "mandatory": false,
          "unique": false
        }
      ],
      "uid": "hero_content",
      "non_localizable": false,
      "multiple": false,
      "mandatory": false,
      "unique": false
    }
  ],
  "uid": "hero_banner",
  "non_localizable": false,
  "multiple": false,
  "mandatory": false,
  "unique": false
}
```

## ContentStack JSON Field Visibility Rules

```json
  "field_rules": [
    {
      "conditions": [
        {
          "operand_field": "hero_banner.hero_banner_option",
          "operator": "equals",
          "value": "none"
        }
      ],
      "actions": [
        {
          "action": "hide",
          "target_field": "hero_banner.hero_content"
        }
      ],
      "match_type": "all"
    },
    {
      "conditions": [
        {
          "operand_field": "hero_banner.hero_banner_option",
          "operator": "equals",
          "value": "Background Image"
        }
      ],
      "actions": [
        {
          "action": "show",
          "target_field": "hero_banner.background_image_group"
        },
        {
          "action": "show",
          "target_field": "hero_banner.background_image_group.optional_overlay"
        }
      ],
      "match_type": "all"
    },
    {
      "conditions": [
        {
          "operand_field": "hero_banner.hero_banner_option",
          "operator": "equals",
          "value": "Solid Background Color"
        }
      ],
      "actions": [
        {
          "action": "show",
          "target_field": "hero_banner.solid_background_color"
        }
      ],
      "match_type": "all"
    },
    {
      "conditions": [
        {
          "operand_field": "hero_banner.background_image_group.optional_overlay.include_overlay",
          "operator": "equals",
          "value": true
        }
      ],
      "actions": [
        {
          "action": "show",
          "target_field": "hero_banner.background_image_group.optional_overlay.overlay_color"
        },
        {
          "action": "show",
          "target_field": "hero_banner.background_image_group.optional_overlay.semi_transparent"
        }
      ],
      "match_type": "all"
    }
  ]
```
