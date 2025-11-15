import React from 'react';
import { Server, Users, Activity } from 'lucide-react';

const AdminPanel = () => (
  <div className="max-w-7xl mx-auto p-8">
    <div className="bg-black text-white p-8 rounded-sm mb-12">
      <h1 className="text-3xl font-serif italic mb-2">System Admin</h1>
    </div>
    <div className="grid grid-cols-3 gap-8 mb-12">
      <div className="p-6 border border-zinc-200 rounded-sm">
        <Server className="w-6 h-6 mb-4 text-blue-600" />
        <div className="text-2xl font-bold mb-1">99.9%</div>
        <div className="text-sm text-zinc-500">Uptime</div>
      </div>
      <div className="p-6 border border-zinc-200 rounded-sm">
        <Users className="w-6 h-6 mb-4 text-purple-600" />
        <div className="text-2xl font-bold mb-1">1,204</div>
        <div className="text-sm text-zinc-500">Active Users</div>
      </div>
      <div className="p-6 border border-zinc-200 rounded-sm">
        <Activity className="w-6 h-6 mb-4 text-green-600" />
        <div className="text-2xl font-bold mb-1">42ms</div>
        <div className="text-sm text-zinc-500">Avg. Latency</div>
      </div>
    </div>
  </div>
);
export default AdminPanel;
