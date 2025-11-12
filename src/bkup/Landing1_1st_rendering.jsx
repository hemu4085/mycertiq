// MyCertiQ — Landing Page (Theme B, React + Tailwind)
// Mount at "/" route or use directly in App.jsx

import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ShieldCheck,
  FileCheck2,
  CalendarCheck,
  BadgeCheck,
  Play,
  ArrowRight,
  CheckCircle2,
  Bot,
  Hotel,
  MapPin,
  Share2,
  FileText,
  Wallet,
  Link2,
} from "lucide-react";

const theme = {
  accent: "#314bff",
  gradient: "bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-600",
};

const features = [
  { icon: ShieldCheck, title: "Automated License + CME Sync", desc: "Nightly API syncs with state boards and accredited CME providers (with your permission)." },
  { icon: FileCheck2, title: "Smart CME Classifier", desc: "Drop CME certificates—auto-tagged by category and renewal requirements." },
  { icon: CalendarCheck, title: "Renewal Calendar Holds", desc: "Smart reminders and checklists per state and specialty." },
  { icon: BadgeCheck, title: "One-click Audit Pack", desc: "Export verifications, CME proof, and COI into a single, shareable PDF." },
  { icon: FileText, title: "Easy Document Organization", desc: "Upload, auto-convert to PDF, version, and share clean documentation from one place." },
  { icon: ShieldCheck, title: "Malpractice Insurance Insight", desc: "Track policy status, renewal date, COI uploads, and alerts before lapses." },
  { icon: Link2, title: "CME by State & Specialty", desc: "Dynamic requirements and gap tracking tailored to your practice." },
  { icon: Share2, title: "Society Memberships", desc: "Monitor dues, renewal cycles, and specialty requirements." },
  { icon: Wallet, title: "Annual CME Funding", desc: "See allowance balance, usage, and expiration windows." },
];

const concierge = [
  { icon: Bot, title: "Ask MyCertiQ Chatbot", desc: "Ask: 'What's my CME status today?' or 'Who offers the credits I still need?' and get instant answers." },
  { icon: MapPin, title: "CME Scheduling Intelligence", desc: "Find upcoming CME that fits your gaps—dates, locations, providers, and registration links." },
  { icon: Hotel, title: "Travel & Family Planning", desc: "See hotels tied to CME events and nearby family-friendly activities." },
];

const steps = [
  { title: "Profile & States", desc: "Pick specialty and states you practice in." },
  { title: "Connect Docs", desc: "Upload CME transcripts, COI, and privileges letters—auto-tagged." },
  { title: "Stay Audit-Ready", desc: "Renew on time, close CME gaps, and download your audit pack anytime." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${theme.gradient} opacity-10`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-4">
                <CheckCircle2 className="h-3.5 w-3.5" /> Always audit-ready
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Your licensing & CME dashboard —<br /> organized and automated.
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
                MyCertiQ keeps your state licenses current, tracks CME automatically, and generates an audit pack in one click.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button className="rounded-xl px-5 py-5 text-base">See it in action <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline" className="rounded-xl px-5 py-5 text-base">
                  <Play className="mr-2 h-4 w-4" /> Watch 90-sec overview
                </Button>
              </div>
            </div>

            {/* Collage Graphic */}
            <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 bg-slate-50">
                <div className="rounded-xl border border-slate-200 bg-white p-4 grid grid-cols-3 gap-3 text-xs text-center">
                  {["License","CME","Society","COI","Boards","Privileges"].map((x,i)=>(
                    <div key={i} className={`h-24 rounded-lg grid place-items-center ${i%2===0?'bg-indigo-50 text-indigo-700':'bg-slate-100 text-slate-600'}`}>{x}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(f=>(
            <Card key={f.title} className="border-none shadow-sm hover:shadow transition-shadow rounded-2xl">
              <CardContent className="p-5">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-indigo-50 text-indigo-600 mb-3">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONCIERGE */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-4">
          {concierge.map(c=>(
            <Card key={c.title} className="border border-slate-200 rounded-xl">
              <CardContent className="p-5">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-indigo-50 text-indigo-600 mb-3">
                  <c.icon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold">{c.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=>(
            <Card key={s.title} className="p-6 bg-white border border-slate-200 rounded-2xl">
              <div className="h-8 w-8 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center font-semibold mb-3">{i+1}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MyCertiQ — Credentialing. CME. Compliance.
      </footer>
    </div>
  );
}
