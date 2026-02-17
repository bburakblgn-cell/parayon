
import React from 'react';
import { UserProfile } from '../types';

interface ProfileProps {
  user: UserProfile;
  onClearData: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onClearData }) => {
  return (
    <div className="px-6 pt-12 text-center pb-12 animate-in fade-in duration-500">
      <div className="relative inline-block mb-6">
        <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-blue-500 shadow-2xl blue-glow mx-auto rotate-3 transition-transform hover:rotate-0 duration-500">
          <img src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=2563eb&color=fff&size=200`} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-green-500 text-[10px] font-bold px-3 py-1.5 rounded-full border-2 border-[#0f172a] text-white flex items-center gap-1.5 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Aktif Kullanıcı
        </div>
      </div>
      
      <h2 className="text-3xl font-black mb-1">{user.firstName} {user.lastName}</h2>
      <p className="text-slate-500 text-sm font-bold mb-8 opacity-80">{user.email}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="glass-card rounded-[1.5rem] p-5 border-white/5">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5 text-center">Üyelik Tipi</p>
          <p className="text-xs font-black text-blue-400">Ücretsiz Plan</p>
        </div>
        <div className="glass-card rounded-[1.5rem] p-5 border-white/5">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5 text-center">Veri Konumu</p>
          <p className="text-xs font-black text-green-400">Yerel Bellek</p>
        </div>
      </div>
      
      <div className="space-y-4 text-left">
        <h3 className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] pl-4 mb-2">Genel Ayarlar</h3>
        
        <button className="w-full glass-card rounded-2xl p-6 border-white/5 flex justify-between items-center group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </div>
             <span className="font-bold text-slate-200">Hesap Bilgilerini Güncelle</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <button className="w-full glass-card rounded-2xl p-6 border-white/5 flex justify-between items-center group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
               </svg>
             </div>
             <span className="font-bold text-slate-200">Bildirim Ayarları</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="pt-8 pb-4">
          <h3 className="text-[10px] text-red-500 font-black uppercase tracking-[0.2em] pl-4 mb-3">Kritik İşlemler</h3>
          <button 
            onClick={onClearData}
            className="w-full glass-card rounded-2xl p-6 border-red-500/20 flex justify-between items-center group hover:bg-red-500/5 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
               </div>
              <span className="font-bold text-red-400">Verileri Tamamen Sıfırla</span>
            </div>
            <span className="text-[9px] text-red-500/40 font-black uppercase bg-red-500/5 px-2 py-1 rounded-md">Geri Dönülemez</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
