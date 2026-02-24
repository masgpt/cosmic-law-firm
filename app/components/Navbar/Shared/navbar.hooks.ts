import { usePathname } from 'next/navigation';

export const useNavbarLogic = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    
    // Normalize paths by removing trailing slashes
    const normalizedPathname = pathname.replace(/\/$/, '') || '/';
    const normalizedPath = path.replace(/\/$/, '') || '/';
    
    // Exact match for the root home path of a locale (e.g., /en or /ko)
    const localeRootPattern = /^\/(en|ko)$/;
    if (localeRootPattern.test(normalizedPath)) {
      return normalizedPathname === normalizedPath;
    }
    
    return normalizedPathname.startsWith(normalizedPath);
  };

  const navLinkClass = (path: string) => 
    `text-base sm:text-lg font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
      isActive(path) 
        ? 'text-white bg-white/15' 
        : 'text-white/85 hover:text-white hover:bg-white/10'
    }`;

  return { isActive, navLinkClass, pathname };
};
