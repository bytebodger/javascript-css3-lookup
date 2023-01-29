import { allow } from '@toolz/allow';

const CSS3 = () => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);

   const is = {
      not: {
         empty: 1,
         negative: 0,
      },
   };

   const inheritInitial = {
      inherit: 'inherit',
      initial: 'initial',
   };

   const autoInheritInitial = {
      ...inheritInitial,
      auto: 'auto',
   };

   const inheritInitialNone = {
      ...inheritInitial,
      none: 'none',
   };

   const autoInheritInitialNone = {
      ...inheritInitialNone,
      auto: 'auto',
   };

   const absoluteLengths = () => {
      const cm = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'cm';
      };

      const mm = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'mm';
      };

      const pc = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'pc';
      };

      const pt = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'pt';
      };

      const px = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'px';
      };

      const Q = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'Q';
      };

      return {
         cm,
         'in': (value = -1) => {
            allow.aNumber(value, is.not.negative);
            return value + 'in';
         },
         mm,
         pc,
         pt,
         px,
         Q,
      };
   };

   const allColors = () => {
      const colorName = (value = '') => {
         allow.aString(value, is.not.empty);
         return value;
      };

      const hexColor = (value = '') => {
         allow.aString(value, 1, 7);
         if (value[0] !== '#')
            value = '#' + value;
         return value;
      };

      const rgb = (red = -1, green = -1, blue = -1) => {
         allow.anInteger(red, 0, 255).anInteger(green, 0, 255).anInteger(blue, 0, 255);
         return `rgb(${red}, ${green}, ${blue})`;
      };

      const rgba = (red = -1, green = -1, blue = -1, alpha = -0.1) => {
         allow.anInteger(red, 0, 255).anInteger(green, 0, 255).anInteger(blue, 0, 255).aNumber(alpha, 0, 1);
         return `rgb(${red}, ${green}, ${blue}, ${alpha})`;
      };

      return {
         colorName,
         hexColor,
         rgb,
         rgba,
      };
   };

   const allLengths = () => {
      return {
         ...absoluteLengths(),
         ...relativeLengths(),
      };
   };

   const number = (value = -1) => {
      allow.aNumber(value, is.not.negative);
      return value;
   };

   const pct = (value = -1) => {
      allow.anInteger(value, is.not.negative);
      return value + '%';
   };

   const px = (value = -1) => {
      allow.aNumber(value, is.not.negative);
      return value + 'px';
   };

   const relativeLengths = () => {
      const ch = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'ch';
      };

      const em = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'em';
      };

      const ex = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'ex';
      };

      const lh = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'lh';
      };

      const rem = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'rem';
      };

      const vh = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'vh';
      };

      const vmax = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'vmax';
      };

      const vmin = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'vmin';
      };

      const vw = (value = -1) => {
         allow.aNumber(value, is.not.negative);
         return value + 'vw';
      };

      return {
         ch,
         em,
         ex,
         lh,
         rem,
         vh,
         vmax,
         vmin,
         vw,
      };
   };

   const url = (value = '') => {
      allow.aString(value, is.not.empty);
      return `url("${value}")`;
   };

   const baseValues = {
      align: {
         ...inheritInitial,
         center: 'center',
         flexEnd: 'flex-end',
         flexStart: 'flex-start',
         stretch: 'stretch',
      },
      background: {
         attachment: {
            ...inheritInitial,
            fixed: 'fixed',
            local: 'local',
            scroll: 'scroll',
         },
         clip: {
            ...inheritInitial,
            borderBox: 'border-box',
            contentBox: 'content-box',
            paddingBox: 'padding-box',
         },
         color: {
            ...inheritInitial,
            ...allColors(),
         },
         image: {
            ...inheritInitialNone,
            none: 'none',
            url,
         },
         origin: {
            ...inheritInitial,
            borderBox: 'border-box',
            contentBox: 'content-box',
            paddingBox: 'padding-box',
         },
         position: {
            ...inheritInitial,
            ...px,
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            pct,
            right: 'right',
            top: 'top',
         },
         repeat: {
            ...inheritInitial,
            noRepeat: 'no-repeat',
            repeat: 'repeat',
            repeatX: 'repeat-x',
            repeatY: 'repeat-y',
         },
         size: {
            ...absoluteLengths(),
            ...autoInheritInitial,
            contain: 'contain',
            cover: 'cover',
            pct,
         },
      },
      border: {
         collapse: {
            ...inheritInitial,
            collapse: 'collapse',
            separate: 'separate',
         },
         color: {
            ...inheritInitial,
            ...allColors(),
            transparent: 'transparent',
         },
         image: {
            outset: {
               ...allLengths(),
               ...inheritInitial,
               number,
            },
            repeat: {
               ...inheritInitial,
               repeat: 'repeat',
               round: 'round',
               space: 'space',
               stretch: 'stretch',
            },
            slice: {
               ...inheritInitial,
               fill: 'fill',
               number,
               pct,
            },
            source: {
               ...inheritInitial,
               none: 'none',
               url,
            },
            width: {
               ...allLengths(),
               ...autoInheritInitial,
               number,
               pct,
            },
         },
         radius: {
            ...absoluteLengths(),
            ...inheritInitial,
            pct,
         },
         style: {
            ...inheritInitialNone,
            dashed: 'dashed',
            dotted: 'dotted',
            double: 'double',
            groove: 'groove',
            hidden: 'hidden',
            inset: 'inset',
            outset: 'outset',
            ridge: 'ridge',
            solid: 'solid',
         },
         width: {
            ...absoluteLengths(),
            inherit: 'inherit',
            medium: 'medium',
            thick: 'thick',
            thin: 'thin',
         },
      },
   };

   return {
      align: {
         content: {
            ...baseValues.align,
            spaceAround: 'space-around',
            spaceBetween: 'space-between',
         },
         items: {
            ...baseValues.align,
            baseline: 'baseline',
         },
         self: {
            ...baseValues.align,
            baseline: 'baseline',
         },
      },
      background: {
         ...baseValues.background.attachment,
         ...baseValues.background.clip,
         ...baseValues.background.color,
         ...baseValues.background.image,
         ...baseValues.background.origin,
         ...baseValues.background.position,
         ...baseValues.background.size,
         attachment: baseValues.background.attachment,
         clip: baseValues.background.clip,
         color: baseValues.background.color,
         image: baseValues.background.image,
         origin: baseValues.background.origin,
         position: baseValues.background.position,
         repeat: baseValues.background.repeat,
         size: baseValues.background.size,
      },
      border: {
         ...baseValues.border.color,
         ...baseValues.border.style,
         ...baseValues.border.width,
         bottom: {
            ...baseValues.border.color,
            ...baseValues.border.style,
            ...baseValues.border.width,
            color: baseValues.border.color,
            left: {
               radius: baseValues.border.radius,
            },
            right: {
               radius: baseValues.border.radius,
            },
            style: baseValues.border.style,
            width: baseValues.border.width,
         },
         collapse: baseValues.border.collapse,
         color: baseValues.border.color,
         image: {
            ...baseValues.border.image.outset,
            ...baseValues.border.image.repeat,
            ...baseValues.border.image.slice,
            ...baseValues.border.image.source,
            ...baseValues.border.image.width,
            outset: baseValues.border.image.outset,
            repeat: baseValues.border.image.repeat,
            slice: baseValues.border.image.slice,
            source: baseValues.border.image.source,
            width: baseValues.border.image.width,
         },
         left: {
            ...baseValues.border.color,
            ...baseValues.border.style,
            ...baseValues.border.width,
            color: baseValues.border.color,
            style: baseValues.border.style,
            width: baseValues.border.width,
         },
         radius: baseValues.border.radius,
         right: {
            ...baseValues.border.color,
            ...baseValues.border.style,
            ...baseValues.border.width,
            color: baseValues.border.color,
            style: baseValues.border.style,
            width: baseValues.border.width,
         },
         spacing: {
            ...absoluteLengths(),
            ...inheritInitial,
         },
         style: baseValues.border.style,
         top: {
            ...baseValues.border.color,
            ...baseValues.border.style,
            ...baseValues.border.width,
            color: baseValues.border.color,
            left: {
               radius: baseValues.border.radius,
            },
            right: {
               radius: baseValues.border.radius,
            },
            style: baseValues.border.style,
            width: baseValues.border.width,
         },
         width: baseValues.border.width,
      },
      bottom: {
         ...absoluteLengths(),
         ...autoInheritInitial,
         pct,
      },
      boxShadow: {
         ...inheritInitialNone,
      },
      boxSizing: {
         ...inheritInitial,
         borderBox: 'border-box',
         contentBox: 'content-box',
         paddingBox: 'padding-box',
      },
      captionSide: {
         ...inheritInitial,
         bottom: 'bottom',
         top: 'top',
      },
      clear: {
         ...inheritInitialNone,
         both: 'both',
         left: 'left',
         right: 'right',
      },
      clip: {
         ...autoInheritInitial,
      },
      color: {
         ...inheritInitial,
      },
      content: {
         ...inheritInitialNone,
         closeQuote: 'close-quote',
         noCloseQuote: 'no-close-quote',
         noOpenQuote: 'no-open-quote',
         normal: 'normal',
         openQuote: 'open-quote',
      },
      counterIncrement: {
         ...inheritInitialNone,
      },
      counterReset: {
         ...inheritInitialNone,
      },
      cursor: {
         ...autoInheritInitialNone,
         alias: 'alias',
         allScroll: 'all-scroll',
         cell: 'cell',
         colResize: 'col-resize',
         contextMenu: 'context-menu',
         copy: 'copy',
         crosshair: 'crosshair',
         default: 'default',
         eResize: 'e-resize',
         ewResize: 'ew-resise',
         grab: 'grab',
         grabbing: 'grabbing',
         help: 'help',
         move: 'move',
         neResize: 'ne-resize',
         neswResize: 'nesw-resize',
         noDrop: 'no-drop',
         notAllowed: 'not-allowed',
         nResize: 'n-resize',
         nsResize: 'ns-resize',
         nwResize: 'nw-resize',
         nwseResize: 'nwse-resize',
         pointer: 'pointer',
         progress: 'progress',
         rowResize: 'row-resize',
         seResize: 'se-resize',
         sResize: 's-resize',
         swResize: 'sw-resize',
         text: 'text',
         verticalText: 'vertical-text',
         wait: 'wait',
         wResize: 'w-resize',
         zoomIn: 'zoom-in',
         zoomOut: 'zoom-out',
      },
      direction: {
         ...inheritInitial,
         ltr: 'ltr',
         rtl: 'rtl',
      },
      dislay: {
         ...inheritInitialNone,
         block: 'block',
         flex: 'flex',
         inherit: 'inherit',
         inlineBlock: 'inline-block',
         inlineTable: 'inline-table',
         listItem: 'list-item',
         table: 'table',
         tableCaption: 'table-caption',
         tableCell: 'table-cell',
         tableColumn: 'table-column',
         tableColumnGroup: 'table-column-group',
         tableFooterGroup: 'table-footer-group',
         tableHeaderGroup: 'table-header-group',
         tableRow: 'table-row',
         tableRowGroup: 'table-row-group',
      },
      emptyCells: {
         ...inheritInitial,
         hide: 'hide',
         show: 'show',
      },
      flex: {
         ...autoInheritInitialNone,
      },
      flexBasis: {
         ...autoInheritInitial,
      },
      flexDirection: {
         ...inheritInitial,
         column: 'column',
         columnReverse: 'column-reverse',
         revert: 'revert',
         revertLayer: 'revert-layer',
         row: 'row',
         rowReverse: 'rowReverse',
         unset: 'unset',
      },
      float: {
         ...inheritInitialNone,
         left: 'left',
         right: 'right',
      },
      font: {
         ...inheritInitial,
      },
      fontFamily: {
         ...inheritInitial,
         cursive: 'cursive',
         fantasy: 'fantasy',
         inherit: 'inherit',
         initial: 'initial',
         monospace: 'monospace',
         sansSerif: 'sans-serif',
         serif: 'serif',
      },
      fontSize: {
         ...inheritInitial,
         large: 'large',
         larger: 'larger',
         medium: 'medium',
         small: 'small',
         smaller: 'smaller',
         xLarge: 'x-large',
         xSmall: 'x-small',
         xxLarge: 'xx-large',
         xxSmall: 'xx-small',
      },
      fontSizeAdjust: {
         ...inheritInitialNone,
      },
      fontStretch: {
         ...inheritInitial,
         condensed: 'condensed',
         expanded: 'expanded',
         extraCondensed: 'extra-condensed',
         extraExpanded: 'extra-expanded',
         normal: 'normal',
         semiCondensed: 'semi-condensed',
         semiExpanded: 'semi-expanded',
         ultaCondensed: 'ultra-condensed',
         ultraExpanded: 'ultra-expanded',
      },
      fontStyle: {
         ...inheritInitial,
         italic: 'italic',
         normal: 'normal',
         oblique: 'oblique',
      },
      fontSynthesis: {
         ...inheritInitialNone,
         style: 'style',
         weight: 'weight',
      },
      fontVariant: {
         ...inheritInitial,
         normal: 'normal',
         smallCaps: 'small-caps',
      },
      fontWeight: {
         ...inheritInitial,
         _100: 100,
         _200: 200,
         _300: 300,
         _400: 400,
         _500: 500,
         _600: 600,
         _700: 700,
         _800: 800,
         _900: 900,
         bold: 'bold',
         bolder: 'bolder',
         lighter: 'lighter',
         normal: 'normal',
      },
      height: {
         ...autoInheritInitial,
      },
      left: {
         ...autoInheritInitial,
      },
      letterSpacing: {
         ...inheritInitial,
         normal: 'normal',
      },
      lineHeight: {
         ...inheritInitial,
         normal: 'normal',
      },
      listStyle: {
         ...inheritInitial,
      },
      listStyleImage: {
         ...inheritInitialNone,
      },
      listStylePosition: {
         ...inheritInitial,
         inside: 'inside',
         outside: 'outside',
      },
      listStyleType: {
         ...inheritInitialNone,
         armenian: 'armenian',
         circle: 'circle',
         decimal: 'decimal',
         decimalLeadingZero: 'decimal-leading-zero',
         disc: 'disc',
         georgian: 'georgian',
         lowerAlpha: 'lower-alpha',
         lowerGreek: 'lower-greek',
         lowerlatin: 'lower-latin',
         lowerRoman: 'lower-roman',
         square: 'square',
         upperAlpha: 'upper-alpha',
         upperLatin: 'upper-latin',
         upperRoman: 'upper-roman',
      },
      margin: {
         ...autoInheritInitial,
      },
      marginBottom: {
         ...autoInheritInitial,
      },
      marginLeft: {
         ...autoInheritInitial,
      },
      marginRight: {
         ...autoInheritInitial,
      },
      marginTop: {
         ...autoInheritInitial,
      },
      maxHeight: {
         ...inheritInitialNone,
      },
      maxWidth: {
         ...inheritInitialNone,
      },
      minHeight: {
         ...inheritInitial,
      },
      minWidth: {
         ...inheritInitial,
      },
      opacity: {
         ...inheritInitial,
      },
      orphans: {
         ...inheritInitial,
      },
      outline: {
         ...inheritInitial,
      },
      outlineColor: {
         ...inheritInitial,
         invert: 'invert',
      },
      outlineStyle: {
         ...inheritInitialNone,
         dashed: 'dashed',
         dotted: 'dotted',
         double: 'double',
         groove: 'groove',
         inset: 'inset',
         outset: 'outset',
         ridge: 'ridge',
         solid: 'solid',
      },
      outlineWidth: {
         ...inheritInitial,
         medium: 'medium',
         thick: 'thick',
         thin: 'thin',
      },
      overflow: {
         ...autoInheritInitial,
         hidden: 'hidden',
         scroll: 'scroll',
         visible: 'visible',
      },
      overflowX: {
         ...autoInheritInitial,
         hidden: 'hidden',
         scroll: 'scroll',
         visible: 'visible',
      },
      overflowY: {
         ...autoInheritInitial,
         hidden: 'hidden',
         scroll: 'scroll',
         visible: 'visible',
      },
      padding: {
         ...inheritInitial,
      },
      paddingBottom: {
         ...inheritInitial,
      },
      paddingLeft: {
         ...inheritInitial,
      },
      paddingRight: {
         ...inheritInitial,
      },
      paddingTop: {
         ...inheritInitial,
      },
      pageBreak: {
         ...autoInheritInitial,
         always: 'always',
         avoid: 'avoid',
         left: 'left',
         right: 'right',
      },
      pageBreakInside: {
         ...autoInheritInitial,
         avoid: 'avoid',
      },
      position: {
         ...inheritInitial,
         absolute: 'absolute',
         fixed: 'fixed',
         relative: 'relative',
         static: 'static',
      },
      quotes: {
         ...inheritInitialNone,
      },
      right: {
         ...autoInheritInitial,
      },
      tableLayout: {
         ...autoInheritInitial,
         fixed: 'fixed',
      },
      textAlign: {
         ...inheritInitial,
         center: 'center',
         justify: 'justify',
         left: 'left',
         right: 'right',
      },
      textDecoration: {
         ...inheritInitialNone,
         lineThrough: 'line-through',
         overline: 'overline',
         underline: 'underline',
      },
      textDecorationLine: {
         ...inheritInitialNone,
         lineThrough: 'line-through',
         overline: 'overline',
         underline: 'underline',
      },
      textDecorationStyle: {
         ...inheritInitial,
         dashed: 'dashed',
         dotted: 'dotted',
         double: 'double',
         solid: 'solid',
         wavy: 'wavy',
      },
      textIndent: {
         ...inheritInitial,
      },
      textTransform: {
         ...inheritInitialNone,
         capitalize: 'capitalize',
         lowercase: 'lowercase',
         uppercase: 'uppercase',
      },
      top: {
         ...autoInheritInitial,
      },
      transform: {
         ...inheritInitial,
         none: 'none',
      },
      transformOrigin: {
         ...inheritInitial,
         bottom: 'bottom',
         center: 'center',
         left: 'left',
         right: 'right',
         top: 'top',
      },
      transition: {
         ...inheritInitial,
      },
      transitionDelay: {
         ...inheritInitial,
      },
      transitionDuration: {
         ...inheritInitial,
      },
      transitionProperty: {
         ...autoInheritInitialNone,
      },
      transitionTimingFunction: {
         ...inheritInitial,
         ease: 'ease',
         easeIn: 'ease-in',
         easeInOut: 'ease-in-out',
         easeOut: 'ease-out',
         linear: 'linear',
         stepEnd: 'step-end',
         stepStart: 'step-start',
      },
      unicodeBidi: {
         ...inheritInitial,
         bidiOverride: 'bidi-override',
         embed: 'embed',
         normal: 'normal',
      },
      verticalAlign: {
         ...inheritInitial,
         baseline: 'baseline',
         bottom: 'bottom',
         middle: 'middle',
         sub: 'sub',
         super: 'super',
         textBottom: 'text-bottom',
         textTop: 'text-top',
         top: 'top',
      },
      visibility: {
         ...inheritInitial,
         collapse: 'collapse',
         hidden: 'hidden',
         visible: 'visible',
      },
      whiteSpace: {
         ...inheritInitial,
         normal: 'normal',
         nowrap: 'nowrap',
         pre: 'pre',
         preLine: 'pre-line',
         preWrap: 'pre-wrap',
      },
      widows: {
         ...inheritInitial,
      },
      width: {
         ...autoInheritInitial,
      },
      wordSpacing: {
         ...inheritInitial,
         normal: 'normal',
      },
      zIndex: {
         ...autoInheritInitial,
      },
   };
};

export const css3 = CSS3();
