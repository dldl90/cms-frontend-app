# Copy Block

## How to add to contentstack

To include the Copy Block in any new template you can do the following:

1. Export your contentType from contentStack
2. Ensure there is the below modular block specification inside the `Schema` array
3. Copy the below component schema and paste it inside the `blocks` array
4. Copy any conditional field visibility rules from below and paste into your contentType
5. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

### Additional notes

Copy Block uses the RichTextEditor Component but is more restrictive. Editor options are restricted to bold, underline, italic, link and the text will always align center.

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
  "title": "Copy Block",
  "uid": "copy_block",
  "schema": [
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
          "redo",
          "bold",
          "underline",
          "italic",
          "link",
          "properties",
          "format",
          "undo"
        ],
        "version": 3
      },
      "non_localizable": false,
      "multiple": false,
      "mandatory": true,
      "unique": false
    }
  ]
}
```
