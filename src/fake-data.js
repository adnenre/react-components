const fake_data = {
  pages: {
    accordion: {
      page: { title: 'Accordion Component' },
      items: [
        {
          title: 'Section 1',
          content:
            'this is the first content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Section 2',
          content:
            'this is the second content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Section 3',
          content:
            ' this is the third content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
    button: {
      page: {
        title: 'Button Component',
        title2: 'Button Component Rounded',
        title3: 'Button Component Pill',
        title4: 'Button Component Fullwidth',
        title5: 'Button Component disabled',
      },
      label: {
        example1: 'Click Here !',
      },
    },
    modal: {
      page: {
        title: 'Modal Component',
        title2: 'Modal Component - Resizable',
        title3: 'Modal Component - Draggable',
        title4: 'Modal Component - Fullscreen, Resizable and Draggable',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        triggerBtn: 'Open Modal',
      },
      header: {},
      body: {
        content_one: 'Modal Content',
        content_two: 'Modal Content',
      },
    },
    alert: {
      page: { title: 'Alert Component' },
      title: 'Alert',
      desc: 'Danger Alert click to close',
    },
    avatar: {
      author: {
        src: 'https://uploads.codesandbox.io/uploads/user/e9cef623-b98a-4a6d-b947-fe6f35c276a5/mj6P-HouNJybq_400x400.jpg',
        alt: 'image of the author',
      },
      page: { title: 'Avatar Component' },
      alt: 'Iimage of the user',
    },
    card: {
      page: { title: 'Card Component' },
      header: 'Card Title',
      body: ' Some quick example text to build on the card body',
      footer: '',
    },
    carousel: {
      page: {
        title: 'Carousel Component',
        title2: 'Carousel Component - auto ',
      },
      slides: {
        example1: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
        example2: [
          'https://gratisography.com/wp-content/uploads/2023/06/gratisography-flying-squirrel-free-stock-photo-1170x780.jpg',
          'https://gratisography.com/wp-content/uploads/2023/06/gratisography-tiny-parrot-free-stock-photo-1170x780.jpg',
          'https://gratisography.com/wp-content/uploads/2023/06/gratisography-happy-coffee-free-stock-photo-1170x780.jpg',
          'https://gratisography.com/wp-content/uploads/2023/06/gratisography-surfing-dog-free-stock-photo-1170x780.jpg',
        ],
      },
    },
    dropdown: {
      page: { title: 'Dropdown Component' },
      items: [
        { id: 1, title: 'Option 1' },
        { id: 2, title: 'Option 2' },
        { id: 3, title: 'Option 3' },
        { id: 4, title: 'Option 4' },
        { id: 5, title: 'Option 5' },
        { id: 6, title: 'Option 6' },
        { id: 7, title: 'Option 7' },
        { id: 8, title: 'Option 8' },
        { id: 9, title: 'Option 9' },
        { id: 10, title: 'Option 10' },
      ],
    },
    masonry: {
      page: { title: 'Masonry Component' },
      items: [],
    },
    switch: {
      page: { title: 'Switch Component' },
    },
    breadcrumb: {
      page: { title: 'Breadcrumb Component' },
      items: ['Home', 'Category', 'Subcategory', 'Current Page'],
    },
    table: {
      page: {
        title: 'Table Component',
        title2: 'Table Component striped',
        title3: 'Table Component resizable striped',
      },
      columns: ['ID', 'First Name', 'Last Name', 'email'],
      rows: [
        { id: '1', name: 'adnen', lastName: 'rebai', email: '@adnen_rebai' },
        { id: '2', name: 'Jhone', lastName: 'Doe', email: 'Jhon_doe' },
        { id: '3', name: 'melina', lastName: 'Doe', email: '@melina_doe' },
      ],
    },
    tab: {
      page: {
        title: 'Tab Component',
        title2: 'Tab Component left',
        title3: 'Tab Component right',
      },
      items: [
        {
          id: 1,
          title: 'First',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit lorem vitae augue aliquet, id rutrum dolor consequat. Nunc ultricies ante non leo interdum malesuada. Mauris at leo finibus, maximus nunc in, vestibulum mauris. In ac dui convallis, semper turpis in, semper tellus. Praesent a mauris commodo, bibendum nulla ac, lacinia orci. Etiam viverra nec odio a elementum. Quisque a imperdiet elit. ',
        },
        {
          id: 2,
          title: 'Second',
          content:
            'In ac elit ex. Suspendisse ornare, metus vel iaculis maximus, odio massa vestibulum orci, eget vehicula leo metus at ligula. Proin scelerisque enim nisi. Nunc ut nisi risus. Aenean sem massa, faucibus id tempus a, commodo eu libero. In non dui maximus, condimentum felis et, vulputate tortor. Suspendisse a eros quis ipsum auctor tincidunt. Fusce id arcu facilisis risus facilisis feugiat eget at magna. .',
        },
        {
          id: 3,
          title: 'Third',
          content:
            'Donec ultricies porta libero et varius. Nullam sed ex nulla. Nunc dignissim mollis turpis, sed scelerisque ipsum aliquet egestas. Etiam bibendum, mauris id elementum malesuada, arcu dolor rutrum ante, in eleifend massa lorem nec tortor. Phasellus semper aliquam risus ut elementum. Etiam euismod luctus magna, et dapibus libero rhoncus vitae. Nulla porta est purus, at sagittis nisi pulvinar vel.',
        },
      ],
    },
    stepper: {
      page: { title: 'Stepper Component' },
      steps: [
        {
          label: 'Card Details',
        },
        {
          label: 'Form Review',
        },
        {
          label: 'Authentication ',
        },
        {
          label: 'Subscription plan',
        },
        {
          label: 'Payment details',
        },
      ],
    },
    tooltip: {
      page: {
        title: 'Tooltip Component',
        title2: 'Tooltip Component Rounded',
        title3: 'Tooltip Component Pill',
      },
      direction: {
        top: 'Tooltip on the top ',
        right: 'Tooltip on the right ',
        bottom: 'Tooltip on the bottom ',
        left: 'Tooltip on the left ',
      },
    },
    tree: {
      page: { title: 'Tree component' },
      data: {
        id: 1,
        label: 'Root',
        level: 1,
        children: [
          {
            id: 2,
            label: 'Folder 1',
            level: 2,
            children: [
              {
                id: 3,
                label: 'Subfolder 1',
                level: 3,
                children: [
                  {
                    id: 4,
                    level: 4,
                    label: 'File 1-1',
                  },
                  {
                    id: 5,
                    label: 'File 1-2',
                    level: 4,
                  },
                ],
              },
              {
                id: 6,
                level: 3,
                label: 'File 1',
              },
            ],
          },
          {
            id: 7,
            label: 'Folder 2',
            level: 2,
            children: [
              {
                id: 8,
                label: 'Subfolder 2',
                level: 3,
                children: [
                  {
                    id: 9,
                    label: 'File 2-1',
                    level: 4,
                  },
                ],
              },
              {
                id: 10,
                level: 3,
                label: 'File 2',
              },
            ],
          },
          {
            id: 11,
            level: 2,
            label: 'File 3',
          },
        ],
      },
    },
  },
  toggle: {
    message: 'Click Here to show code',
    label: 'VIEW CODE',
  },
};

export default fake_data;
