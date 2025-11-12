// MyCertiQ — Landing Page (Theme B, React + Tailwind)
// Now includes router Links for smooth navigation between Landing and Dashboard

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import {
  ShieldCheck,
  FileCheck2,
  CalendarCheck,
  BadgeCheck,
  Share2,
  FileText,
  Link2,
  Wallet,
  Bot,
  MapPin,
  Hotel,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react";

const theme = {
  accent: "#314bff",
  gradient: "bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-600",
};

// ---- Feature Cards ----
const features = [
  {
    icon: ShieldCheck,
    title: "Automated License + CME Sync",
    desc: "Nightly API syncs with state boards and accredited CME providers (with your permission).",
  },
  {
    icon: FileCheck2,
    title: "Smart CME Classifier",
    desc: "Drop CME certificates—auto-tagged by category, specialty relevance, and renewal requirements.",
  },
  {
    icon: CalendarCheck,
    title: "Renewal Calendar Holds",
    desc: "Smart reminders, ICS holds, and checklists per state and specialty so deadlines don't slip.",
  },
  {
    icon: BadgeCheck,
    title: "One-click Audit Pack",
    desc: "Export verifications, CME proof, and COI into a single, shareable PDF.",
  },
  {
    icon: FileText,
    title: "Easy Document Organization",
    desc: "Upload, auto-convert to PDF, version, and share clean licensing and CME documentation from one place.",
  },
  {
    icon: ShieldCheck,
    title: "Malpractice Insurance Insight",
    desc: "Track policy status, renewal date, COI uploads, and alerts before anything lapses.",
  },
  {
    icon: Link2,
    title: "CME by State & Specialty",
    desc: "Dynamic requirements and gap tracking tailored to your profile and practice locations.",
  },
  {
    icon: Share2,
    title: "Society Memberships",
    desc: "Monitor dues, renewal cycles, and specialty requirements—upload cards and receipts.",
  },
  {
    icon: Wallet,
    title: "Annual CME Funding",
    desc: "See allowance balance, usage-to-date, and expiration windows so you never leave funds unused.",
  },
];

// ---- Concierge / Chatbot Section ----
const concierge = [
  {
    icon: Bot,
    title: "Ask MyCertiQ Chatbot",
    desc: "Ask: “What's my CME status today?” or “Who offers the credits I still need?” and get instant answers.",
  },
  {
    icon: MapPin,
    title: "CME Scheduling Intelligence",
    desc: "Find upcoming CME that fits your gaps—dates, locations, providers, and registration links.",
  },
  {
    icon: Hotel,
    title: "Travel & Family Planning",
    desc: "See hotels tied to CME events and nearby family-friendly activities for stress-free planning.",
  },
];

const steps = [
  { title: "Profile & States", desc: "Pick specialty and the states you practice in." },
  { title: "Connect Docs", desc: "Upload CME transcripts, COI, privileges letters—auto-tagged." },
  { title: "Stay Audit-Ready", desc: "Renew on time, close CME gaps, and download the audit pack anytime." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${theme.gradient} opacity-10 pointer-events-none`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-4">
                <CheckCircle2 className="h-3.5 w-3.5" /> Always audit-ready
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                Your licensing & CME dashboard —
                <span className="block">organized and automated.</span>
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
                MyCertiQ keeps your state licenses current, tracks CME automatically, and generates an audit pack in one click.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button className="rounded-xl px-5 py-5 text-base" asChild>
                  <Link to="/dashboard">
                    Explore Sample Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" className="rounded-xl px-5 py-5 text-base" asChild>
                  <a href="#overview">
                    <Play className="mr-2 h-4 w-4" /> Watch 90-sec overview
                  </a>
                </Button>

                <Button variant="ghost" className="rounded-xl px-4 py-5 text-base" asChild>
                  <a href="/request-demo">Request a demo</a>
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  HIPAA-aware workflows
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-indigo-600" />
                  State-by-state checklists
                </div>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="relative">
              <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-slate-50">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-lg bg-indigo-50 grid place-items-center text-indigo-700 text-xs">License</div>
                        <div className="h-24 rounded-lg bg-slate-100 grid place-items-center text-slate-600 text-xs">CME</div>
                        <div className="h-24 rounded-lg bg-slate-100 grid place-items-center text-slate-600 text-xs">Society</div>
                        <div className="h-24 rounded-lg bg-slate-100 grid place-items-center text-slate-600 text-xs">COI</div>
                        <div className="h-24 rounded-lg bg-indigo-50 grid place-items-center text-indigo-700 text-xs">Boards</div>
                        <div className="h-24 rounded-lg bg-slate-100 grid place-items-center text-slate-600 text-xs">Privileges</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-8">Everything you need to stay compliant</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {features.map((f) => (
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
        </div>
      </section>

      {/* CONCIERGE */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-8">Your AI Credential Concierge</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {concierge.map((c) => (
              <Card key={c.title} className="border-none shadow-sm rounded-2xl">
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
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-8">How MyCertiQ Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {steps.map((s, i) => (
              <Card key={s.title} className="border border-slate-200 rounded-2xl">
                <CardContent className="p-6">
                  <div className="h-8 w-8 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center font-semibold mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button className="rounded-xl px-6 py-5 text-base" asChild>
              <Link to="/dashboard">Try with sample data</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} MyCertiQ — Credentialing. CME. Compliance.
            </p>
            <nav className="flex items-center gap-5 text-sm text-slate-600">
              <Link to="/dashboard" className="hover:text-slate-900">Dashboard</Link>
              <a href="/privacy" className="hover:text-slate-900">Privacy</a>
              <a href="/terms" className="hover:text-slate-900">Terms</a>
              <a href="/contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
