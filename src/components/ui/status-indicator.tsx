
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'online' | 'offline' | 'waiting' | 'disconnected';

interface StatusIndicatorProps {
  status: StatusType;
  className?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  className,
}) => {
  const getStatusConfig = (status: StatusType) => {
    switch (status) {
      case 'online':
        return {
          color: 'status-online',
          label: 'Connecté',
        };
      case 'offline':
        return {
          color: 'status-offline',
          label: 'Déconnecté',
        };
      case 'waiting':
        return {
          color: 'status-waiting',
          label: 'En attente',
        };
      case 'disconnected':
        return {
          color: 'text-gray-400',
          label: 'Non connecté',
        };
      default:
        return {
          color: 'text-gray-400',
          label: 'Inconnu',
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn('flex items-center', status === 'waiting' && 'animate-pulse')}>
        <span className={cn('text-lg mr-1.5', config.color)}>●</span>
        <span className="text-sm">{config.label}</span>
      </div>
    </div>
  );
};

export default StatusIndicator;
