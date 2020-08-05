# Section Title

## How to add to contentstack

To include the section title in any new template you can do the following:

1. Export your contentType from contentStack
2. Ensure there is the below modular block specification inside the `Schema` array
3. Copy the below component schema and paste it inside the `blocks` array
4. Copy any conditional field visibility rules from below and paste into your contentType
5. Save, then import the contentType JSON back into contentStack

Please see [the contentstack documentation](https://www.contentstack.com/docs/json-schema-for-creating-a-content-type) for more information.

### Additional notes

_sectionTitleData.js_ shows the mapping between the contentStack data and component props.

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
  "title": "Section Title",
  "uid": "section_title",
  "schema": [
    {
      "data_type": "text",
      "display_name": "Header",
      "uid": "header",
      "field_metadata": {
        "description": "",
        "default_value": "",
        "instruction": "Add a header for each section",
        "version": 3
      },
      "format": "",
      "error_messages": {
        "format": ""
      },
      "non_localizable": false,
      "multiple": false,
      "mandatory": true,
      "unique": false
    }
  ]
}
```
