import re

files = [
    'd:/work/client_tech_work-main/src/components/cleansy/CleansyHeader.tsx',
    'd:/work/client_tech_work-main/src/components/cleansy/CleansyFooter.tsx'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Remove use client
    text = re.sub(r'\"use client\";\s*\n', '', text)
    text = re.sub(r'\'use client\';\s*\n', '', text)

    # Fix imports
    text = re.sub(r'import Image from \"next/image\";\s*\n', '', text)
    text = re.sub(r'import Link from \"next/link\";\s*\n', 'import { Link } from \"react-router-dom\";\n', text)
    
    # Optional ui imports
    text = text.replace('import Button from "@/components/ui/Button";', 'import { Button } from "@/components/ui/button";')
    # Update self-references if needed, e.g. 'export function Header' -> 'export function CleansyHeader' 
    text = text.replace('export function Header', 'export function CleansyHeader')
    text = text.replace('export default function Header', 'export default function CleansyHeader')
    text = text.replace('export default function Footer', 'export default function CleansyFooter')

    # Replace <Image ... /> with <img ... />
    text = re.sub(r'<Image', '<img', text)
    text = re.sub(r'\s+fill\s*\n', '\n', text)
    
    # Replace Link hrefs with to
    text = text.replace('<Link href=', '<Link to=')

    # Add general fixes for any leftover 'priority' tags
    text = text.replace('priority', '')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(text)

print('Done converting Header and Footer.')
