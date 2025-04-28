
import React from 'react';
import { Bluetooth, Cpu, Home, Settings, WifiIcon } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MainLayout: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/obd', icon: Cpu, label: 'OBD-II' },
    { path: '/can', icon: Cpu, label: 'CAN Bus' },
    { path: '/bluetooth', icon: Bluetooth, label: 'Bluetooth' },
    { path: '/wifi', icon: WifiIcon, label: 'Wi-Fi' },
    { path: '/settings', icon: Settings, label: 'Paramètres' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100 dark:bg-slate-900">
      {/* Barre de navigation pour mobile */}
      <div className="md:hidden w-full bg-white dark:bg-obd-dark border-b border-gray-200 dark:border-gray-800 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo-pi-obd.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-obd-blue dark:text-white">Pi-OBD</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="status-online mr-2">●</div>
          <span className="text-sm">En ligne</span>
        </div>
      </div>
      
      {/* Navigation latérale pour desktop */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-obd-dark border-r border-gray-200 dark:border-gray-800">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-2">
            <img src="/logo-pi-obd.svg" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-obd-blue dark:text-white">Pi-OBD</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="status-online mr-2">●</div>
            <span className="text-sm">Système en ligne</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "bg-obd-blue text-white"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="text-sm text-gray-500">
            v1.0.0 • Raspberry Pi 3B+
          </div>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>
      
      {/* Navigation mobile en bas */}
      <div className="md:hidden fixed bottom-0 w-full bg-white dark:bg-obd-dark border-t border-gray-200 dark:border-gray-800 flex justify-around p-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center p-1",
              location.pathname === item.path
                ? "text-obd-blue dark:text-obd-accent"
                : "text-gray-500"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
