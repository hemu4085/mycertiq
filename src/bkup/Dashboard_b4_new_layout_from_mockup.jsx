// src/pages/Dashboard.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ShieldCheck, CalendarCheck, FileCheck2 } from "lucide-react";
import Topbar from "../components/Topbar"; // ✅ add this line


export default function Dashboard() {
  const profile = {
    name: "Dr. Asha Verma",
    specialty: "Internal Medicine",
    state: "MA",
    cmeRequired: 50,
    cmeCompleted: 42,
  };

  const cmeData = [
    { name: "Internal Med", required: 50, completed: 42 },
    { name: "Cardiology", required: 40, completed: 34 },
    { name: "Radiology", required: 30, completed: 28 },
  ];

  const stats = [
    {
      title: "License Status",
      icon: ShieldCheck,
      value: "Active",
      color: "text-emerald-600",
      sub: "Renewal May 2026",
    },
    {
      title: "CME Hours",
      icon: CalendarCheck,
      value: `${profile.cmeCompleted}/${profile.cmeRequired}`,
      color: "text-indigo-600",
      sub: "84% complete",
    },
    {
      title: "Compliance Docs",
      icon: FileCheck2,
      value: "Up-to-date",
      color: "text-sky-600",
      sub: "Audit Mar 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-white py-12 px-6">
      <Topbar />  {/* ✅ added */}
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-slate-900">
            Welcome back,{" "}
            <span className="text-indigo-700">{profile.name}</span>
          </h1>
          <p className="text-slate-600">
            {profile.specialty} · Licensed in {profile.state}
          </p>
        </header>

        {/* Section 1: Overview Stats */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-1">
            Compliance Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <Card
                key={s.title}
                className="shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader className="flex items-center gap-3">
                  <s.icon className={`h-6 w-6 ${s.color}`} />
                  <CardTitle className="text-base font-semibold">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold mb-1">{s.value}</div>
                  <p className="text-sm text-slate-600">{s.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2: CME Chart */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-1">
            CME Progress by Specialty
          </h2>
          <Card className="shadow-sm">
            <CardContent className="h-80 pt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cmeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fill: "#475569" }} />
                  <YAxis tick={{ fill: "#475569" }} />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="required" fill="#e2e8f0" name="Required" />
                  <Bar dataKey="completed" fill="#6366f1" name="Completed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: CME Recommendations */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-1">
            Recommended CME Activities
          </h2>
          <Card className="shadow-sm">
            <CardContent className="pt-6">
              <ul className="space-y-4 text-sm text-slate-700">
                <li>
                  <b>Harvard CME:</b> Cardiometabolic Update (12 credits) — Boston, Mar 2025
                </li>
                <li>
                  <b>NEJM Knowledge+:</b> Online Self-Assessment (8 credits) — Ongoing
                </li>
                <li>
                  <b>Mayo Clinic:</b> Hospital Medicine Essentials (10 credits) — Phoenix, Jun 2025
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
