import React from 'react';

import type { Metadata } from 'next';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free and open source text similarity API',
};

const Documentation = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12 ">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
      </div>
    </div>
  );
};

export default Documentation;
