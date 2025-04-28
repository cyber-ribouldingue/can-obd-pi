
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export type StatusType = 'online' | 'offline' | 'waiting' | 'disconnected' | 'error' | 'success' | 'warning';

export interface StatusIndicatorProps {
  status: StatusType;
  className?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  className,
  label,
  size = 'md',
  showDot = true,
}) => {
  const getStatusConfig = (status: StatusType) => {
    switch (status) {
      case 'online':
        return {
          color: 'status-online',
          label: label || 'Connecté',
          dotColor: 'text-obd-success',
          badgeVariant: 'outline' as const,
        };
      case 'offline':
        return {
          color: 'status-offline',
          label: label || 'Déconnecté',
          dotColor: 'text-obd-error',
          badgeVariant: 'destructive' as const,
        };
      case 'waiting':
        return {
          color: 'status-waiting',
          label: label || 'En attente',
          dotColor: 'text-obd-warning',
          badgeVariant: 'secondary' as const,
        };
      case 'disconnected':
        return {
          color: 'text-gray-400',
          label: label || 'Non connecté',
          dotColor: 'text-gray-400',
          badgeVariant: 'outline' as const,
        };
      case 'error':
        return {
          color: 'text-obd-error',
          label: label || 'Erreur',
          dotColor: 'text-obd-error',
          badgeVariant: 'destructive' as const,
        };
      case 'success':
        return {
          color: 'text-obd-success',
          label: label || 'Succès',
          dotColor: 'text-obd-success',
          badgeVariant: 'outline' as const,
        };
      case 'warning':
        return {
          color: 'text-obd-warning',
          label: label || 'Attention',
          dotColor: 'text-obd-warning',
          badgeVariant: 'secondary' as const,
        };
      default:
        return {
          color: 'text-gray-400',
          label: label || 'Inconnu',
          dotColor: 'text-gray-400',
          badgeVariant: 'outline' as const,
        };
    }
  };

  const config = getStatusConfig(status);
  
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const dotSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  // Option pour afficher comme un badge
  if (!showDot) {
    return (
      <Badge 
        variant={config.badgeVariant}
        className={cn(
          'rounded-md font-normal',
          status === 'waiting' && 'animate-pulse',
          className
        )}
      >
        {config.label}
      </Badge>
    );
  }

  // Affichage standard avec point
  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn('flex items-center', status === 'waiting' && 'animate-pulse')}>
        <span className={cn(dotSizeClasses[size], 'mr-1.5', config.dotColor)}>●</span>
        <span className={sizeClasses[size]}>{config.label}</span>
      </div>
    </div>
  );
};

export default StatusIndicator;
