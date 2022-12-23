import React from 'react';

interface SVGProps {
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactElement;
}

export type { SVGProps };