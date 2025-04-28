
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, RefreshCcw, HardDrive } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SettingsPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Paramètres</h1>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCcw className="w-4 h-4" />
            <span>Redémarrer les services</span>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Paramètres OBD */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Configuration OBD-II</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="obd-protocol">Protocole OBD</Label>
              <select id="obd-protocol" className="w-full p-2 border rounded-md">
                <option value="auto">Automatique</option>
                <option value="1">SAE J1850 PWM (41.6 kbaud)</option>
                <option value="2">SAE J1850 VPW (10.4 kbaud)</option>
                <option value="3">ISO 9141-2 (5 baud init)</option>
                <option value="4">ISO 14230-4 KWP (5 baud init)</option>
                <option value="5">ISO 14230-4 KWP (fast init)</option>
                <option value="6">ISO 15765-4 CAN (11 bit ID, 500 kbaud)</option>
                <option value="7">ISO 15765-4 CAN (29 bit ID, 500 kbaud)</option>
                <option value="8">ISO 15765-4 CAN (11 bit ID, 250 kbaud)</option>
                <option value="9">ISO 15765-4 CAN (29 bit ID, 250 kbaud)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="obd-baudrate">Débit Bluetooth</Label>
              <select id="obd-baudrate" className="w-full p-2 border rounded-md">
                <option value="9600">9600 baud</option>
                <option value="19200">19200 baud</option>
                <option value="38400">38400 baud</option>
                <option value="57600">57600 baud</option>
                <option value="115200">115200 baud</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="obd-autoconnect">Connexion automatique</Label>
              <Switch id="obd-autoconnect" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="obd-fast-init">Initialisation rapide</Label>
              <Switch id="obd-fast-init" />
            </div>
          </div>
        </Card>
        
        {/* Paramètres CAN */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Configuration CAN</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="can-interface">Interface par défaut</Label>
              <select id="can-interface" className="w-full p-2 border rounded-md">
                <option value="can0">can0</option>
                <option value="can1">can1</option>
                <option value="vcan0">vcan0 (virtuel)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="can-bitrate">Débit (bit/s)</Label>
              <select id="can-bitrate" className="w-full p-2 border rounded-md">
                <option value="125000">125 kbit/s</option>
                <option value="250000">250 kbit/s</option>
                <option value="500000">500 kbit/s</option>
                <option value="1000000">1 Mbit/s</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="can-autostart">Démarrer CAN au lancement</Label>
              <Switch id="can-autostart" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="can-log-enable">Journalisation automatique</Label>
              <Switch id="can-log-enable" />
            </div>
          </div>
        </Card>
        
        {/* Paramètres serveur */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Serveur Web</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="server-port">Port</Label>
              <Input id="server-port" defaultValue="8000" />
            </div>
            <div>
              <Label htmlFor="server-host">Adresse d'écoute</Label>
              <Input id="server-host" defaultValue="0.0.0.0" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="server-debug">Mode debug</Label>
              <Switch id="server-debug" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="server-autostart">Démarrage automatique</Label>
              <Switch id="server-autostart" defaultChecked />
            </div>
            <Button className="w-full">Redémarrer le serveur</Button>
          </div>
        </Card>
        
        {/* Paramètres système */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Système</h2>
          <div className="space-y-4">
            <div>
              <Label>Informations système</Label>
              <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md font-mono text-sm">
                <div className="flex justify-between">
                  <span>Hostname:</span>
                  <span>raspberrypi</span>
                </div>
                <div className="flex justify-between">
                  <span>OS:</span>
                  <span>Raspberry Pi OS 32-bit</span>
                </div>
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span>Bookworm</span>
                </div>
                <div className="flex justify-between">
                  <span>Kernel:</span>
                  <span>5.15.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span>2h 34m</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <HardDrive className="h-5 w-5 text-gray-500" />
              <span>Utilisation stockage: 26% (4.2GB / 16GB)</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Redémarrer</Button>
              <Button variant="destructive">Éteindre</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
