# Create Component

This command will create a complete component files in a specific folder structure. 
Using a descriptor JSON, that descripes how to exactly create the component. 
You can find the scheme here, and here are couple of examples. (view full descriptors list)

### kui-button descriptor
```json
{
  "name": "Button",
  "description": "`{{toTagName name}}` is a button that has predefined styles and sizes to serve different semantic purposes with few extras.",
  "allowedChildren": [],
  "allowedParents": [],
  "attributes": [
    {
      "name": "kui-style",
      "description": "Predefined styles that serves different semantic purposes",
      "type": "Style",
      "defaultValue": "Style.Secondary",
      "values": {
        "Primary": "{{toTagName name}}-primary",
        "Secondary": "{{toTagName name}}-secondary",
        "Information": "{{toTagName name}}-info",
        "Danger": "{{toTagName name}}-danger",
        "Warning": "{{toTagName name}}-warning",
        "Success": "{{toTagName name}}-success",
        "Link": "{{toTagName name}}-link"
      }
    },
    {
      "name": "kui-size",
      "description": "Predefined sizes smaller or bigger than the default one",
      "type": "Size",
      "defaultValue": "Size.Normal",
      "values": {
        "Normal": "null",
        "Small": "{{toTagName name}}-small",
        "Large": "{{toTagName name}}-large",
        "Block": "{{toTagName name}}-block"
      }
    },
    {
      "name": "kui-outline",
      "description": "Display the button in an outline style",
      "type": "Boolean",
      "defaultValue": "false"
    },
    {
      "name": "kui-disabled",
      "description": "Sets the button in a disabled state",
      "type": "Boolean",
      "defaultValue": "false"
    }
  ],
  "publicAPI": [
    {
      "name": "addClickHandler",
      "description": "Adds a click handler to the button handlers list",
      "params": [
        {
          "name": "handler",
          "type": "function",
          "description": "The handler method to be added"
        }
      ]
    },
    {
      "name": "removeClickHandler",
      "description": "Removes the given handler from the button handlers list",
      "params": [
        {
          "name": "handler",
          "type": "function",
          "description": "The handler method to be removed"
        }
      ]
    }
  ]
}
```

kui-accordion descriptor
```json

```

### how to use the command

```ssh
node kui.js generate component --config PATH_TO_DESCRIPTOR
```

### Folders structure

```text
COMPONENT_NAME/
├── docs/
|   ├── configuration.json
|   ├── example-attributes.html
|   ├── example-basic.html
│   └── example-*.html //one for each attribute
├── _story.js
├── _test.js
├── index.js
├── kui-COMPONENT_NAME.js
├── README.md
├── style.scss
└── template.js
```