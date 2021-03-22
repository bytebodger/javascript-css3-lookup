# css3

`css3` is a lookup utility for CSS3 properties to be used when writing inline styles in JavaScript. It's a simple object that contains most of the commonly-used options for most of the CSS3 properties.

## Usage

After installation, import the utility as follows:

```javascript
import { css3 } from '@toolz/css3';
```

The `css3` variable will now be available within your code, and the structure of the object should provide for easier code completions in your IDE.

**Examples:**

```javascript
export const Foo = () => {
   return <>
      <div style={{
         cursor: css3.cursor.crosshair,
         // every time you type one of the periods on the line above,
         // your IDE should show you all of the options that are 
         // available - first in the css3 object, and then in the 
         // css3.cursor object
      }}>
         Here is the div
      </div>
   </>
}
```
