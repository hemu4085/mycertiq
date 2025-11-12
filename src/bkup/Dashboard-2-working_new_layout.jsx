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

export default function Dashboard() {
  const cmeData = [
    { name: "Breast Ultrasound", required: 15, completed: 12 },
    { name: "Mammogram Review", required: 20, completed: 18 },
    { name: "MRI Interpretation", required: 25, completed: 21 },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">
              Welcome back, <span className="text-indigo-700">Dr. Asha Verma</span>
            </h1>
            <p className="text-slate-600 mt-1">
              Mammography / Breast Imaging • Licensed in MA
            </p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:bg-indigo-700">
            Alert Settings
          </button>
        </header>

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* License Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                License Status <span>⚡ Auto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">Active</div>
              <p className="text-sm text-slate-600">Renewal May 2026</p>
            </CardContent>
          </Card>

          {/* MQSA Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                MQSA Compliance <span>⚡ Auto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">88% Complete</div>
              <p className="text-sm text-slate-600">(44 / 50 CME) • Audit Mar 2025</p>
            </CardContent>
          </Card>

          {/* Required CMEs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                Required CMEs <span>⚙️ Semi-auto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">State of Massachusetts</p>
              <p className="text-sm text-slate-600">15 CME credits / year</p>
              <a href="#" className="text-indigo-600 text-sm font-medium mt-2 inline-block">
                View all
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CME Progress */}
          <Card className="lg:col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex justify-between">
                CME Progress <span>⚡ Auto</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="85%">
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
              <div className="flex justify-center mt-2 text-sm text-slate-600">
                <span className="flex items-center mr-4">
                  <span className="inline-block w-3 h-3 bg-gray-300 mr-2 rounded-sm" /> Required
                </span>
                <span className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-indigo-500 mr-2 rounded-sm" /> Completed
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Medical Societies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                Medical Societies <span>🖐️ Manual</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The American College of Radiology</p>
              <p className="text-sm text-slate-600">
                Expiration: Apr 2025 • Annual dues: $500
              </p>
              <a href="#" className="text-indigo-600 text-sm font-medium mt-2 inline-block">
                View all
              </a>
            </CardContent>
          </Card>

          {/* CME Funding */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                CME Funding <span>🖐️ Manual</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">$2,500</p>
              <p className="text-sm text-slate-600">
                $850 utilized • $1,650 available • Expires Dec 2025
              </p>
              <a href="#" className="text-indigo-600 text-sm font-medium mt-2 inline-block">
                View all
              </a>
            </CardContent>
          </Card>

          {/* Document Vault */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                Document Vault <span>⚙️ Semi-auto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>Upload New Document</li>
                <li>License Renewal Form.pdf</li>
                <li>ACVR Certificate.pdf</li>
              </ul>
              <a href="#" className="text-indigo-600 text-sm font-medium mt-2 inline-block">
                View all
              </a>
            </CardContent>
          </Card>

          {/* Integrated Boards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                Integrated Boards <span>⚡ Auto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>Federation of State Medical Boards (FSMB)</li>
                <li>AMA Physician Masterfile</li>
                <li>CAQH ProView</li>
              </ul>
              <a href="#" className="text-indigo-600 text-sm font-medium mt-2 inline-block">
                View all
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
