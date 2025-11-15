import React from 'react';
import { Smartphone } from 'lucide-react';

const MobileView = () => (
  <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-8">
    <div className="bg-white p-8 rounded-sm text-center max-w-sm border border-zinc-200">
      <Smartphone className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
      <h2 className="text-xl font-serif mb-2">Mobile Optimized</h2>
    </div>
  </div>
);
export default MobileView;
