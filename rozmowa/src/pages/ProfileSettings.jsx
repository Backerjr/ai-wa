import React from 'react';
import { User, Bell, Globe } from 'lucide-react';

const ProfileSettings = () => (
  <div className="max-w-2xl mx-auto p-8">
    <h1 className="text-3xl font-serif italic mb-8">Settings</h1>
    <div className="border border-zinc-200 rounded-sm bg-white">
      {[{ icon: User, label: "Account" }, { icon: Globe, label: "Language" }, { icon: Bell, label: "Notifications" }].map((item, i) => (
        <div key={i} className="p-6 flex items-center gap-4 hover:bg-zinc-50 cursor-pointer border-b border-zinc-100 last:border-0">
          <div className="p-3 bg-zinc-100 rounded-full"><item.icon className="w-5 h-5" /></div>
          <h3 className="font-medium flex-1">{item.label}</h3>
          <div className="text-zinc-300">→</div>
        </div>
      ))}
    </div>
  </div>
);
export default ProfileSettings;
