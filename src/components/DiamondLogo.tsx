import React from 'react';

interface DiamondLogoProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

/**
 * Official Almas Dashboard 3D Diamond Emblem.
 * Uses the exact official high-resolution 512x512 transparent PNG asset
 * from the Almas Dashboard extension.
 */
export const DiamondLogo: React.FC<DiamondLogoProps> = ({ 
  className = '', 
  size = 32,
  priority = false
}) => {
  const logoUrl = `${import.meta.env.BASE_URL}almas-official-icon.png`;
  
  return (
    <img
      src={logoUrl}
      alt="لوگوی رسمی الماس داشبورد"
      width={size}
      height={size}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`inline-block object-contain select-none shrink-0 drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        aspectRatio: '1 / 1'
      }}
      referrerPolicy="no-referrer"
    />
  );
};
