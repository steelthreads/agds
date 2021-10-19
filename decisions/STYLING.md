# Decisions - Styling

## Overriding specificity of GOLD Design System styles 

At times, we need to override specificity of GOLD Design System styles, since we don't have access to directly change these.

GOLD has high specificity selectors (often using `au-body` as a prefix), as well as often having complex selectors, for instance: 

    .au-footer.au-footer--dark {
        color: #fff;
        border-color: #89afb8;
        background-color: #135E70;
    }
    
The approach currently to override these styles is to use Emotion's Global element with the same CSS selectors: 

    import { Global, css } from '@emotion/react';
    
    // ...

    <Global
      styles={css`
        .au-footer.au-footer--dark {
          border-color: #f36c52;
          background-color: #162845;
        }
      `}
    />

This removes the need to lean on `!important`, in the alternate case of using inline styles.  


## Defining new styles 

Use Emotion's css prop, to get the benefit of transforming inline style to class based styling: 


    /** @jsxRuntime classic */
    /** @jsx jsx */
    
    import React from 'react';
    import { jsx, CSSObject } from '@emotion/react';
    
    // ....

    const MyComponent = ({ style }: { style?: CSSObject }) => (
        <div css={style} // <- type = CSSObject
        
    
    <MyComponent style={{ color: 'red' }} /> 
