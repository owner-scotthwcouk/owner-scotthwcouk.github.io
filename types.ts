import React from 'react';

export type SectionName = 'about' | 'projects' | 'contact' | 'mission-update'

export interface Section {
  id: SectionName;
  title: string;
  content: React.ReactNode;
}