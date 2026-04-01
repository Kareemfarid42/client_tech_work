const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.cwd(), 'src');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace the exact hex and rgb values
    content = content.replace(/#0ea5e9/gi, '#17aa8c');
    content = content.replace(/#00a2ff/gi, '#17aa8c');
    content = content.replace(/14,\s*165,\s*233/g, '23, 170, 140');
    content = content.replace(/14,165,233/g, '23,170,140');
    content = content.replace(/6,\s*182,\s*212/g, '23, 170, 140'); // cyan-500 rgb
    content = content.replace(/6,182,212/g, '23,170,140');
    
    // Tailwind utility replacements
    content = content.replace(/(bg|text|border|from|to|shadow|ring)-cyan-500/g, '$1-[#17aa8c]');
    content = content.replace(/(bg|text|border|from|to|shadow|ring)-cyan-400/g, '$1-[#17aa8c]');
    content = content.replace(/(bg|text|border|from|to|shadow|ring)-blue-500/g, '$1-[#17aa8c]');
    content = content.replace(/(bg|text|border|from|to|shadow|ring)-blue-400/g, '$1-[#17aa8c]');
    content = content.replace(/(bg|text|border|from|to|shadow|ring)-sky-500/g, '$1-[#17aa8c]');
    content = content.replace(/(bg|text|border|from|to|shadow|ring)-sky-400/g, '$1-[#17aa8c]');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            replaceInFile(fullPath);
        }
    }
}

processDirectory(directoryPath);
