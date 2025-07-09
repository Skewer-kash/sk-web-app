import React from "react";
import {Shield, Users, Award } from "lucide-react";

export default function TrustIndicators() {
  return (
  <>
   <div className="border-t border-white/10 pt-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <p className="font-semibold text-white">SEC Registered</p>
            <p className="text-sm text-purple-100">
              Fully compliant & regulated
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="font-semibold text-white">50K+ Clients</p>
            <p className="text-sm text-purple-100">Trusted by thousands</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <p className="font-semibold text-white">Award Winning</p>
            <p className="text-sm text-purple-100">Excellence in service</p>
          </div>
        </div>
      </div>
    </div>
  </> 
  );
}
