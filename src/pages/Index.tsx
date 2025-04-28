import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bluetooth, Car, Database, HardDrive, Settings, WifiHigh, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatusIndicator, { StatusType } from '@/components/ui/status-indicator';
import { cn } from '@/lib/utils';

const Index = () => {
  // Simulation d'un état dynamique pour la démo
  const [refreshing, setRefreshing] = React.useState(false);
  const [systemStatus, setSystemStatus] = React.useState<StatusType>('online');

  const handleRefresh = () => {
    setRefreshing(true);
    setSystemStatus('waiting');
    
    // Simulation d'une requête réseau
    setTimeout(() => {
      setRefreshing(false);
      setSystemStatus('online');
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">Tableau de bord diagnostic</h1>
        <Button 
          onClick={handleRefresh} 
          variant="outline" 
          disabled={refreshing}
          className="flex items-center space-x-2"
        >
          <RefreshCcw className={cn("h-4 w-4", refreshing && "animate-spin")} />
          <span>Actualiser</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Statut du système */}
        <Card className="p-4 shadow-md">
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold mb-2">État du système</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Settings size={16} />
                <span>Système</span>
              </div>
              <StatusIndicator status={systemStatus} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bluetooth size={16} />
                <span>Bluetooth</span>
              </div>
              <StatusIndicator status="offline" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <WifiHigh size={16} />
                <span>Wi-Fi</span>
              </div>
              <StatusIndicator status="online" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Car size={16} />
                <span>OBD-II</span>
              </div>
              <StatusIndicator status="disconnected" />
            </div>
          </div>
        </Card>

        {/* Information système */}
        <Card className="p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Raspberry Pi</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Modèle</span>
              <span className="font-mono">Raspberry Pi 3B+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">CPU</span>
              <span className="font-mono">48.2°C • 12% util</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Mémoire</span>
              <span className="font-mono">512MB / 1GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Stockage</span>
              <span className="font-mono">4.2GB / 16GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Uptime</span>
              <span className="font-mono">2h 34m</span>
            </div>
          </div>
        </Card>

        {/* Connexion véhicule */}
        <Card className="p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Connexion Véhicule</h2>
          <div className="mb-4">
            <div className="text-center pb-4">
              <span className="text-4xl font-bold text-gray-400">—</span>
              <p className="text-gray-500 mt-2">Non connecté</p>
            </div>
          </div>
          <Button className="w-full mb-2" asChild>
            <Link to="/bluetooth">Connecter ELM327</Link>
          </Button>
          <div className="text-xs text-gray-500 text-center">
            Adaptateur Bluetooth ELM327 requis
          </div>
        </Card>
      </div>

      {/* Différentes variantes du StatusIndicator */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Types d'indicateurs d'état</h2>
        <Card className="p-4 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Indicateurs standard</h3>
              <div className="space-y-2">
                <StatusIndicator status="online" />
                <StatusIndicator status="offline" />
                <StatusIndicator status="waiting" />
                <StatusIndicator status="disconnected" />
                <StatusIndicator status="error" />
                <StatusIndicator status="success" />
                <StatusIndicator status="warning" />
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Taille petite</h3>
              <div className="space-y-2">
                <StatusIndicator status="online" size="sm" />
                <StatusIndicator status="offline" size="sm" />
                <StatusIndicator status="waiting" size="sm" />
                <StatusIndicator status="disconnected" size="sm" />
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Taille grande</h3>
              <div className="space-y-2">
                <StatusIndicator status="online" size="lg" />
                <StatusIndicator status="offline" size="lg" />
                <StatusIndicator status="waiting" size="lg" />
                <StatusIndicator status="error" size="lg" />
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Style badge</h3>
              <div className="space-y-2">
                <StatusIndicator status="online" showDot={false} />
                <StatusIndicator status="offline" showDot={false} />
                <StatusIndicator status="waiting" showDot={false} />
                <StatusIndicator status="error" showDot={false} />
                <StatusIndicator status="success" showDot={false} />
                <StatusIndicator status="warning" showDot={false} />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Raccourcis fonctionnalités */}
      <h2 className="text-xl font-semibold mb-4">Fonctionnalités</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/obd" className="card-diagnostic flex flex-col items-center p-6">
          <Car className="h-12 w-12 text-obd-blue mb-4" />
          <h3 className="font-semibold text-lg">Diagnostic OBD-II</h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Lecture des paramètres moteur et codes d'erreur
          </p>
        </Link>

        <Link to="/can" className="card-diagnostic flex flex-col items-center p-6">
          <Database className="h-12 w-12 text-obd-blue mb-4" />
          <h3 className="font-semibold text-lg">Moniteur CAN</h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Visualisation et envoi de trames CAN
          </p>
        </Link>

        <Link to="/bluetooth" className="card-diagnostic flex flex-col items-center p-6">
          <Bluetooth className="h-12 w-12 text-obd-blue mb-4" />
          <h3 className="font-semibold text-lg">Bluetooth</h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Gestion des périphériques et connexions
          </p>
        </Link>

        <Link to="/wifi" className="card-diagnostic flex flex-col items-center p-6">
          <WifiHigh className="h-12 w-12 text-obd-blue mb-4" />
          <h3 className="font-semibold text-lg">Wi-Fi</h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Configuration réseau et point d'accès
          </p>
        </Link>
      </div>

      {/* Section logs récents */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Logs récents</h2>
      <Card className="p-4 shadow-md">
        <div className="h-48 overflow-y-auto font-mono text-sm">
          <div className="can-frame">
            <span className="can-timestamp">[15:42:32]</span>{" "}
            <span className="text-green-600">INFO</span> Système démarré
          </div>
          <div className="can-frame">
            <span className="can-timestamp">[15:42:34]</span>{" "}
            <span className="text-blue-600">INFO</span> Interface Wi-Fi wlan0 activée
          </div>
          <div className="can-frame">
            <span className="can-timestamp">[15:43:01]</span>{" "}
            <span className="text-yellow-600">WARN</span> SocketCAN non disponible
          </div>
          <div className="can-frame">
            <span className="can-timestamp">[15:44:12]</span>{" "}
            <span className="text-blue-600">INFO</span> Tentative de connexion Bluetooth...
          </div>
          <div className="can-frame">
            <span className="can-timestamp">[15:44:15]</span>{" "}
            <span className="text-red-600">ERROR</span> Connexion Bluetooth échouée : périphérique non trouvé
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
