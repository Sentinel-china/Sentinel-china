import React, { useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';

const languages = [
  { code: 'en', label: 'English', flagSrc: '/gb-flag-hd.png' },
  { code: 'zh', label: '中文', flagSrc: '/cn-flag-hd.png' },
  { code: 'es', label: 'Español', flagSrc: '/es-flag-hd.png' },
  { code: 'it', label: 'Italiano', flagSrc: '/it-flag-hd.png' },
];

const LanguageToggle = React.memo(() => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = useCallback((langCode: string) => {
    setLanguage(langCode);
  }, [setLanguage]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-muted-foreground hover:text-yellow-400 transition-colors"
          title="Switch language"
        >
          <Globe size={20} />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            <img
              src={lang.flagSrc}
              alt={`${lang.label} flag`}
              className="mr-2 w-6 h-4 rounded-sm object-cover"
            />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;
