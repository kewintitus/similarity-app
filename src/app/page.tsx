import Image from 'next/image';
import { Inter } from 'next/font/google';
import Paragraph from './components/ui/Paragraph';
import LargeHeading from './components/ui/LargeHeading';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-slate-400">
      <LargeHeading size="sm">Hello</LargeHeading>
      <Paragraph size="sm">some text</Paragraph>
    </div>
  );
}
