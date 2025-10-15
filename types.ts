import React from 'react';

export type SectionName = 'about' | 'projects' | 'contact' | 'mission-update' | 'policies'

export interface Section {
  id: SectionName;
  title: string;
  content: React.ReactNode;
}
