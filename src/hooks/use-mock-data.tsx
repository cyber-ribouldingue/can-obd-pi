
import { useState, useEffect } from 'react';

// Type pour les données OBD fictives
export interface OBDData {
  rpm: number;
  speed: number;
  engineTemp: number;
  load: number;
  throttle: number;
  airFlow: number;
  voltage: number;
  fuelConsumption: number;
  timing: number;
}

// Type pour les trames CAN fictives
export interface CANFrame {
  timestamp: string;
  id: string;
  data: string;
}

// Hook pour simuler des données OBD en temps réel
export function useMockOBDData() {
  const [data, setData] = useState<OBDData>({
    rpm: 0,
    speed: 0,
    engineTemp: 0,
    load: 0,
    throttle: 0,
    airFlow: 0,
    voltage: 12.6,
    fuelConsumption: 0,
    timing: 0
  });
  
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    // Dans une application réelle, ces données viendraient des API Python
    const interval = setInterval(() => {
      if (!isConnected) return;
      
      setData({
        rpm: Math.floor(Math.random() * 3500) + 800,
        speed: Math.floor(Math.random() * 120),
        engineTemp: Math.floor(Math.random() * 40) + 70,
        load: Math.floor(Math.random() * 100),
        throttle: Math.floor(Math.random() * 100),
        airFlow: Math.floor(Math.random() * 100) + 5,
        voltage: (Math.random() * 1) + 12,
        fuelConsumption: (Math.random() * 15) + 5,
        timing: Math.floor(Math.random() * 40) - 10
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isConnected]);
  
  const connect = () => setIsConnected(true);
  const disconnect = () => setIsConnected(false);
  
  return {
    data,
    isConnected,
    connect,
    disconnect
  };
}

// Hook pour simuler des trames CAN en temps réel
export function useMockCANFrames() {
  const [frames, setFrames] = useState<CANFrame[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  
  // Générateur de trames CAN fictives
  const generateFrame = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString() + '.' + now.getMilliseconds().toString().padStart(3, '0');
    
    // ID CAN aléatoire en hexadécimal
    const id = (Math.floor(Math.random() * 2047)).toString(16).padStart(3, '0');
    
    // Données CAN aléatoires
    const dataLength = Math.floor(Math.random() * 8) + 1; // 1 à 8 octets
    let data = [];
    for (let i = 0; i < dataLength; i++) {
      data.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'));
    }
    
    return {
      timestamp: timeString,
      id: '0x' + id.toUpperCase(),
      data: '[' + data.join(' ') + ']'
    };
  };
  
  useEffect(() => {
    if (!isConnected) return;
    
    // Ajouter quelques trames initiales
    const initialFrames = [];
    for (let i = 0; i < 5; i++) {
      initialFrames.push(generateFrame());
    }
    setFrames(initialFrames);
    
    // Simuler les trames entrantes
    const interval = setInterval(() => {
      setFrames(prev => {
        const newFrames = [...prev, generateFrame()];
        // Limiter à 100 trames pour la performance
        if (newFrames.length > 100) {
          return newFrames.slice(newFrames.length - 100);
        }
        return newFrames;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, [isConnected]);
  
  const connect = () => setIsConnected(true);
  const disconnect = () => setIsConnected(false);
  const clearFrames = () => setFrames([]);
  
  return {
    frames,
    isConnected,
    connect,
    disconnect,
    clearFrames
  };
}
