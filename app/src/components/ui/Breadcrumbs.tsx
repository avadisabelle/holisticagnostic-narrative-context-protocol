import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Build breadcrumb items from path
  const breadcrumbs: BreadcrumbItem[] = [];

  // Always start with home
  if (pathnames.length > 0) {
    breadcrumbs.push({ label: 'Home', path: '/' });
  }

  // Build subsequent breadcrumbs
  let currentPath = '';
  pathnames.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Format the label
    let label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Special cases for better labels
    if (segment === 'docs') {
      label = 'Terminology';
    } else if (segment === 'stories') {
      label = 'Story Library';
    } else if (segment.includes('_')) {
      // Story IDs - show shortened version
      label = segment
        .replace(/_/g, ' ')
        .split(' ')
        .slice(0, 4)
        .join(' ') + '...';
    }

    breadcrumbs.push({ label, path: currentPath });
  });

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>

      {breadcrumbs.slice(1).map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 2;

        return (
          <div key={breadcrumb.path} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="font-medium text-gray-900">{breadcrumb.label}</span>
            ) : (
              <Link
                to={breadcrumb.path}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
