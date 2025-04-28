
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import StatusIndicator from '@/components/ui/status-indicator';
import { AlertTriangle, AlertCircle, Download, HardDrive, RefreshCcw, Send } from 'lucide-react';

const CANPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Moniteur CAN</h1>
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
            <h3 className="font-medium">Interface CAN non disponible</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vérifiez que l'interface SocketCAN est configurée correctement</p>
          </div>
        </div>
      </Card>
      
      <Tabs defaultValue="monitor">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monitor">Moniteur</TabsTrigger>
          <TabsTrigger value="send">Envoi manuel</TabsTrigger>
          <TabsTrigger value="capture">Capture & Replay</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monitor" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="h-[500px] overflow-hidden flex flex-col">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b flex justify-between items-center">
                  <div className="font-medium">Trames CAN</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Exporter
                    </Button>
                    <Button size="sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Effacer
                    </Button>
                  </div>
                </div>
                <div className="flex-grow p-2 overflow-y-auto font-mono text-sm bg-white dark:bg-slate-900">
                  <div className="can-frame">
                    <span className="can-timestamp">[15:42:32.123]</span>{" "}
                    <span className="can-id">0x7DF</span>{" "}
                    <span className="can-data">[02 01 00 00 00 00 00 00]</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className="p-4">
                <h3 className="font-medium mb-4">Filtres</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="can-id-filter">ID CAN (hex)</Label>
                    <Input id="can-id-filter" placeholder="ex: 7DF" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input id="can-auto-scroll" type="checkbox" className="w-4 h-4" />
                    <Label htmlFor="can-auto-scroll">Défilement auto</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input id="can-show-timestamp" type="checkbox" className="w-4 h-4" />
                    <Label htmlFor="can-show-timestamp">Afficher horodatage</Label>
                  </div>
                  <div>
                    <Label htmlFor="can-interface">Interface</Label>
                    <select id="can-interface" className="w-full p-2 border rounded-md mt-1">
                      <option value="can0">can0</option>
                      <option value="can1">can1</option>
                      <option value="vcan0">vcan0 (virtuel)</option>
                    </select>
                  </div>
                  <Button className="w-full">Appliquer les filtres</Button>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="send" className="mt-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-4">Envoi manuel de trames</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="can-send-interface">Interface</Label>
                    <select id="can-send-interface" className="w-full p-2 border rounded-md mt-1">
                      <option value="can0">can0</option>
                      <option value="can1">can1</option>
                      <option value="vcan0">vcan0 (virtuel)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="can-send-id">ID CAN (hex)</Label>
                    <Input id="can-send-id" placeholder="ex: 7DF" />
                  </div>
                  <div>
                    <Label htmlFor="can-send-data">Données (hex)</Label>
                    <Input id="can-send-data" placeholder="ex: 02 01 0D 00 00 00 00 00" />
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer trame
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Modèles prédéfinis</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between">
                    <span>Requête RPM</span>
                    <span className="text-xs text-gray-500">7DF#02010C...</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Requête vitesse</span>
                    <span className="text-xs text-gray-500">7DF#02010D...</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Température moteur</span>
                    <span className="text-xs text-gray-500">7DF#020105...</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Lecture DTC</span>
                    <span className="text-xs text-gray-500">7DF#0103...</span>
                  </Button>
                  <div className="pt-4">
                    <Button variant="secondary" className="w-full">+ Ajouter modèle</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="capture" className="mt-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-4">Capture de trames</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="can-capture-interface">Interface</Label>
                    <select id="can-capture-interface" className="w-full p-2 border rounded-md mt-1">
                      <option value="can0">can0</option>
                      <option value="can1">can1</option>
                      <option value="vcan0">vcan0 (virtuel)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="can-capture-filename">Nom du fichier</Label>
                    <Input id="can-capture-filename" placeholder="capture_can.log" />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      Démarrer capture
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Arrêter
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Replay</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="can-replay-interface">Interface</Label>
                    <select id="can-replay-interface" className="w-full p-2 border rounded-md mt-1">
                      <option value="can0">can0</option>
                      <option value="can1">can1</option>
                      <option value="vcan0">vcan0 (virtuel)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="can-replay-file">Fichier de capture</Label>
                    <Input id="can-replay-file" type="file" />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <HardDrive className="h-4 w-4 mr-2" />
                      Lancer replay
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Arrêter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CANPage;
