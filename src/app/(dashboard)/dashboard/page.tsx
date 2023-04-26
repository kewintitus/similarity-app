import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free and opensource text similarity api',
};

const page = async (props: Props) => {
  const user = await getServerSession(authOptions);
  if (!user) {
    return <p>no user</p>;
  }
  const apiKey = await db.apiKey.findFirst();
  return <div className="pt-28 text-white">page</div>;
};

export default page;
