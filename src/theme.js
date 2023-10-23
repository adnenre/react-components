const size = {
  $xsmall: '50px',
  $small: '80px',
  $medium: '100px',
  $large: '150px',
  $xlarge: '180px',
};

const theme = {
  width: {
    full: '100%',
    fitContent: 'fit-content',
    ...size,
  },
  height: {
    ...size,
  },

  border: {
    thin: '1px solid ',
  },
  'border-radius': {
    $pill: '20px',
    $round: '50%',
    $rounded: '4px',
    $default: '0',
  },
  color: {
    $white: '#ffffff',
    $default: '#FFF',
    $primary: '#3a81f7',
    $secondary: '#AB47BC',
    $info: '#5bc0de',
    $success: '#99cc54',
    $warning: '#f0ad4e',
    $danger: '#d9534f',
    $black: '#434A54',
    $gray: '#2e3f6b',
    $grayLight: '#e4edfe', //'#f3f4f6',
    $grayDark: '#94a2bd',
  },

  font: {
    $color: '#001b41',
  },
  boxShadow: {
    default: '0 0 8px 2px #e4edfe',
  },
  cursor: {
    notAllowed: 'not-allowed',
    default: 'pointer',
  },

  components: {
    alert: {
      'border-left': 'solid 10px ',
    },
  },
};

export default theme;
