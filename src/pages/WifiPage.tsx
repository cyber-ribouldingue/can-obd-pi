
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusIndicator from '@/components/ui/status-indicator';
import { AlertTriangle, RefreshCcw, Settings, WifiHigh, WifiOff } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const WifiPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Configuration Wi-Fi</h1>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <StatusIndicator status="online" />
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCcw className="w-4 h-4" />
            <span>Actualiser</span>
          </Button>
        </div>
      </div>
      
      <Card className="mb-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <WifiHigh className="h-6 w-6 text-green-500" />
            <div>
              <h3 className="font-medium">Wi-Fi activé</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Connecté à "RaspberryPi-Network"</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Activer/désactiver</span>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>
      
      <Tabs defaultValue="connect">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="connect">Se connecter</TabsTrigger>
          <TabsTrigger value="hotspot">Point d'accès</TabsTrigger>
        </TabsList>
        
        <TabsContent value="connect" className="mt-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Réseaux disponibles</h3>
              <Button>
                <RefreshCcw className="h-4 w-4 mr-2" />
                Rafraîchir
              </Button>
            </div>
            
            <div className="space-y-4 mb-6">
              <Card className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <WifiHigh className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-medium">RaspberryPi-Network</div>
                    <div className="text-sm text-gray-500">Signal: 90%</div>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">Connecté</div>
              </Card>
              
              <Card className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <WifiHigh className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">FreeBOX-78A9B2</div>
                    <div className="text-sm text-gray-500">Signal: 65%</div>
                  </div>
                </div>
                <Button>Connecter</Button>
              </Card>
              
              <Card className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <WifiOff className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Réseau caché</div>
                    <div className="text-sm text-gray-500">Se connecter manuellement</div>
                  </div>
                </div>
                <Button variant="outline">Configurer</Button>
              </Card>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="font-medium mb-4">Connexion manuelle</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="wifi-ssid">Nom du réseau (SSID)</Label>
                  <Input id="wifi-ssid" placeholder="Entrez le SSID" />
                </div>
                <div>
                  <Label htmlFor="wifi-password">Mot de passe</Label>
                  <Input id="wifi-password" type="password" placeholder="Mot de passe Wi-Fi" />
                </div>
                <Button>Se connecter</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="hotspot" className="mt-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Configuration du point d'accès</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Activer</span>
                <Switch />
              </div>
            </div>
            
            <Card className="p-4 mb-6 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-blue-500" />
                <p className="text-sm">L'activation du point d'accès déconnectera le Raspberry Pi des autres réseaux Wi-Fi</p>
              </div>
            </Card>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="hotspot-ssid">Nom du point d'accès (SSID)</Label>
                <Input id="hotspot-ssid" placeholder="Pi-OBD-Access" />
              </div>
              <div>
                <Label htmlFor="hotspot-password">Mot de passe</Label>
                <Input id="hotspot-password" type="password" placeholder="Minimum 8 caractères" />
              </div>
              <div>
                <Label htmlFor="hotspot-channel">Canal</Label>
                <select id="hotspot-channel" className="w-full p-2 border rounded-md">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(channel => (
                    <option key={channel} value={channel}>Canal {channel}</option>
                  ))}
                </select>
              </div>
              <Button className="w-full">Appliquer et démarrer le point d'accès</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WifiPage;
