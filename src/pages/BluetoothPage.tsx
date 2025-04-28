
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusIndicator from '@/components/ui/status-indicator';
import { AlertTriangle, Bluetooth, RefreshCcw, Search } from 'lucide-react';

const BluetoothPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestion Bluetooth</h1>
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
            <h3 className="font-medium">Bluetooth désactivé</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Activez le Bluetooth pour rechercher des périphériques</p>
          </div>
        </div>
      </Card>
      
      <Tabs defaultValue="scan">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scan">Scanner</TabsTrigger>
          <TabsTrigger value="paired">Appairés</TabsTrigger>
        </TabsList>
        
        <TabsContent value="scan" className="mt-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Recherche de périphériques</h3>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Scanner
              </Button>
            </div>
            
            <div className="space-y-4">
              <Card className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Bluetooth className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">ELM327 v1.5</div>
                    <div className="text-sm text-gray-500">00:11:22:33:44:55</div>
                  </div>
                </div>
                <Button>Connecter</Button>
              </Card>
              
              <Card className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Bluetooth className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">OBDII Scanner</div>
                    <div className="text-sm text-gray-500">AA:BB:CC:DD:EE:FF</div>
                  </div>
                </div>
                <Button>Connecter</Button>
              </Card>
              
              <div className="text-center text-gray-400 py-4">
                Aucun autre périphérique trouvé
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="paired" className="mt-6">
          <Card className="p-6">
            <h3 className="font-medium mb-6">Périphériques appairés</h3>
            
            <div className="text-center text-gray-400 py-10">
              <Bluetooth className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Aucun périphérique appairé</p>
              <Button className="mt-4">
                <Search className="h-4 w-4 mr-2" />
                Scanner des périphériques
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BluetoothPage;
