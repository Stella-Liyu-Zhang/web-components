# Web Components
Major goal: Deliver high quality user interfaces with custom, resuable and encapsulated web components.

In this repo, I will be tickling web components so that I could have a clearer understanding while building large-scaled web applications. 
> Let's shrink the frontend code base together!

## Custom Elements API
these elements must always contain at least one hyphen somewhere in them and must have a closing tag.
- Create Custom HTML tags
- Create Custom class
- Lifecycle methods 

### Custom Elements LifeCycle Methods:
- ```constructor()```: Called when an instance of the element is created or upgraded.
- ```connectedCallback()```: Called every time when the element is inserted into the DOM
- ```disconnectedCallback()```: Called every time the element is removed from the DOM
- ``` attributeChangedCallback (attributeName, oldValue, newValue)```: Called when an attribute is added, removed, updated, or replaced.


## Shadow DOM API
- Used for self-contained components
- Encapsulate styles and markup
- Create with ```element.attachShadow({mode: open})```
- Creates a "shadowRoot" that we can refer and interact with 

## HTML Templates
- Defines the encapsulated markup of our web component
- Template tag stores markup on page
- Include both HTML and CSS in templates
- Use slots to add custom text

## ES Modules


