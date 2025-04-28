
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusIndicator from '@/components/ui/status-indicator';
import { AlertTriangle, Car, Database, RefreshCcw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const OBDPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Diagnostic OBD-II</h1>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <StatusIndicator status="offline" />
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCcw className="w-4 h-4" />
            <span>Actualiser</span>
          </Button>
        </div>
      </div>
      
      <Card className="mb-6 p-4 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-900/50">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
          <div>
            <h3 className="font-medium">Périphérique non connecté</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Veuillez connecter un adaptateur ELM327 via Bluetooth</p>
          </div>
        </div>
      </Card>
      
      <Tabs defaultValue="realtime">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="realtime">Temps réel</TabsTrigger>
          <TabsTrigger value="dtc">Codes d'erreur</TabsTrigger>
          <TabsTrigger value="freeze">Freeze Frame</TabsTrigger>
          <TabsTrigger value="logs">Historique</TabsTrigger>
        </TabsList>
        
        <TabsContent value="realtime" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* RPM */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Régime moteur</h3>
              <div className="flex items-baseline">
                <span className="data-value">0</span>
                <span className="data-unit">tr/min</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Vitesse */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Vitesse</h3>
              <div className="flex items-baseline">
                <span className="data-value">0</span>
                <span className="data-unit">km/h</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Température moteur */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Température moteur</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">°C</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Charge moteur */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Charge moteur</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">%</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Position papillon */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Position papillon</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">%</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Débit d'air */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Débit d'air massique</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">g/s</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Tension batterie */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Tension batterie</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">V</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Consommation carburant */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Consommation</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">L/100km</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
            
            {/* Timing avance */}
            <Card className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">Avance à l'allumage</h3>
              <div className="flex items-baseline">
                <span className="data-value">--</span>
                <span className="data-unit">°</span>
              </div>
              <Progress value={0} className="mt-2" />
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="dtc" className="mt-6">
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center py-10">
              <Database className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-500">Aucun code d'erreur</h3>
              <p className="text-gray-400 mt-2">Connectez un adaptateur ELM327 pour lire les codes</p>
              <Button className="mt-6">Scanner les codes DTC</Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="freeze" className="mt-6">
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center py-10">
              <Car className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-500">Freeze Frame non disponible</h3>
              <p className="text-gray-400 mt-2">Connectez un adaptateur ELM327 pour accéder aux données</p>
              <Button className="mt-6">Lire Freeze Frame</Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="logs" className="mt-6">
          <Card className="p-4">
            <div className="font-mono text-sm h-[400px] overflow-y-auto">
              <p className="p-2 text-center text-gray-500">L'historique sera affiché ici une fois connecté</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OBDPage;
