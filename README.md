# javascript-css3-lookup

A utility class for JS that shows all of the available properties/values in CSS3.

## Usage

```javascript
// an example React file (but this can be used in plain ol' JS as well)
import React from 'react';
import css3 from './css';

export default class App extends React.Component{
   render = () => {
      return (
         <div
            style={{
               // Every time you type 'css3.' in your IDE, it should show you an autocomplete
               // list of CSS3 properties.  You choose the property that matches the inline
               // style property that you're trying to complete.  Once you've chosen the 
               // matching property from your IDE's autocomplete list, type '.' again, and you
               // will see a list of all the potential static properties that are available.
               // For example, typing 'css3.float.' will show 'left', 'inherit', 'none', 'initial',
               // 'unset', and 'right' as potential options.  For CSS3 properties that 
               // accept/require free-form text input (e.g., the 'background' property), the 
               // autocomplete will show you examples of the ways in which that input can be 
               // formatted.
               cursor : css3.cursor.grab,
               float : css3.float.left,
               textAlign : css3.textAlign.justify,
            }}
         >Foo</div>
      );
   };
}
```
