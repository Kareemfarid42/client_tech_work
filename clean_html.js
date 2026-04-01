const fs = require('fs');
try {
    const html = fs.readFileSync('client_tech_content.html', 'utf8');
    // replace block tags with newlines to preserve structure
    let text = html.replace(/<\/(h[1-6]|p|div|li|tr|ul|ol)>/gi, '\n');
    // replace br tags with newlines
    text = text.replace(/<br\s*\/?>/gi, '\n');
    // strip images and other tags
    text = text.replace(/<[^>]+>/g, ' ');
    // decode entities (basic)
    text = text.replace(/&nbsp;/g, ' ')
               .replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'");
    // clean up whitespace: multiple spaces to one, multiple newlines to max 2
    text = text.replace(/ +/g, ' ');
    text = text.replace(/\n\s*\n/g, '\n\n');
    
    fs.writeFileSync('client_tech_content_clean.txt', text.trim());
    console.log("Successfully cleaned HTML content.");
} catch (e) {
    console.error("Error cleaning HTML:", e);
    process.exit(1);
}
