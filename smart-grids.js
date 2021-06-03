var smartgrid = require("smart-grid");

/* It's principal settings in smart grid project */
var settings = {
  filename: "_grid",
  outputStyle: "scss" /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: "30px" /* gutter width px || % || rem */,
  mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: "1920px" /* max-width оn very large screen */,
    fields: "15px" /* side fields */,
  },
  breakPoints: {
    xl: {
      width: "1200px",
    },
    lg: {
      width: "992px" /* -> @media (max-width: 1100px) */,
    },
    md: {
      width: "768px",
    },
    sm: {
      width: "576px",
      offset: "16px",
      fields:
        "8px" /* set fields only if you want to change container.fields */,
    },
    /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
  },
};

smartgrid("./assets/css/_sass/base", settings);
