// Fix: Import React to resolve "Cannot find namespace 'React'" errors
import React from 'react';

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'none';
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}