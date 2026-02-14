import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SkipToContent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleFocus = () => setIsVisible(true);
        const handleBlur = () => setIsVisible(false);

        const skipLink = document.getElementById('skip-to-content');
        skipLink?.addEventListener('focus', handleFocus);
        skipLink?.addEventListener('blur', handleBlur);

        return () => {
            skipLink?.removeEventListener('focus', handleFocus);
            skipLink?.removeEventListener('blur', handleBlur);
        };
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            id="skip-to-content"
            href="#main-content"
            onClick={handleClick}
            className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-[9999]
        px-6 py-3 bg-primary text-primary-foreground rounded-md
        font-semibold shadow-lg
        flex items-center gap-2
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
      `}
            tabIndex={0}
        >
            Skip to main content
            <ChevronDown className="w-4 h-4" />
        </a>
    );
};

export default SkipToContent;
