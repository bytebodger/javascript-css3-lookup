import { css3 } from './css3';

test('css3 has 124 keys', () => {
   expect(Object.keys(css3).length).toEqual(124);
});

test('css3.textDecorationStyle has 8 keys', () => {
   expect(Object.keys(css3.textDecorationStyle).length).toEqual(8);
});

test('checking listStyleType', () => {
   const listStyleTypes = Object.keys(css3.listStyleType);
   expect(listStyleTypes.includes('armenian')).toEqual(true);
   expect(listStyleTypes.includes('circle')).toEqual(true);
   expect(listStyleTypes.includes('decimal')).toEqual(true);
   expect(listStyleTypes.includes('decimalLeadingZero')).toEqual(true);
   expect(listStyleTypes.includes('disc')).toEqual(true);
   expect(listStyleTypes.includes('georgian')).toEqual(true);
   expect(listStyleTypes.includes('inherit')).toEqual(true);
   expect(listStyleTypes.includes('initial')).toEqual(true);
   expect(listStyleTypes.includes('lowerAlpha')).toEqual(true);
   expect(listStyleTypes.includes('lowerGreek')).toEqual(true);
   expect(listStyleTypes.includes('lowerlatin')).toEqual(true);
   expect(listStyleTypes.includes('lowerRoman')).toEqual(true);
   expect(listStyleTypes.includes('none')).toEqual(true);
   expect(listStyleTypes.includes('square')).toEqual(true);
   expect(listStyleTypes.includes('unset')).toEqual(true);
   expect(listStyleTypes.includes('upperAlpha')).toEqual(true);
   expect(listStyleTypes.includes('upperLatin')).toEqual(true);
   expect(listStyleTypes.includes('upperRoman')).toEqual(true);
});
