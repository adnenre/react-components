const fs = require('fs');
const path = require('path');
const { readFile, writeFile, mkdir } = fs;
// GET COMPONENT NAME FROM COMMAND LINE
const component = process.argv[2];

// COMPONENT SNIPPET
const snippet_t = 'g_st.txt';
const snippet_c = 'g_sc.txt';
const snippet_s = 'g_ss.txt';

// TO UPPPERCASE FIRST LETER (component always start with uppercase letter)
const toUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// COMPONENT FOLDER NAME
const componentName = toUppercase(component);

// COMPONENT PATH
const targetPath = `src/components/${componentName}`;

// COMPONENT FOLDER NAME AND FILES
const files = [
  { name: 'index.js', snippet: snippet_c },
  { name: `${componentName}.spec.js`, snippet: snippet_t },
  { name: `${componentName}.styled.js`, snippet: snippet_s },
];

// CHECK FIRST ARGUMENT TO BE COMPOENENT NAME
if (!component) {
  console.error('Usage: node componentName');
  process.exit(1);
}

// CREAT THE COMPOENENT FOLDER
mkdir(targetPath, (err) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.log(`Component '${componentName}' already exists.`);
    } else {
      console.error(`Error creating Component: ${err}`);
    }
  } else {
    console.log(`Component '${componentName}' created.`);

    // Create the files inside the folder
    files.forEach(({ name, snippet }) => {
      const filePath = path.join(targetPath, name);

      readFile(snippet, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const updatedContent = data.replace(
          new RegExp('(?<!-\\w*)component', 'gi'),
          componentName
        );
        writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Replacements complete. Content saved to target file.');
          }
        });
      });
    });
  }
});
