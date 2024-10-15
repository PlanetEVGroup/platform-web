"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Battery,
  Calendar,
  DollarSign,
  Droplet,
  Leaf,
  Moon,
  Sun,
  ThermometerSun,
  Zap,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
const Fdashboard = () => {
  const energyData = [
    { name: "น้ำมันสูญเสีย", value: 20 },
    { name: "CJ More สาขา เพียงพะเยา 20", value: 15 },
    { name: "CJ More สาขา บริจคอีส ลำพูบวา 101", value: 15 },
    { name: "CJ More สาขา เพชรเกษม 81", value: 15 },
    { name: "PCA Parking", value: 10 },
    { name: "CJ More สาขา บางบอน 4", value: 15 },
    { name: "CJ More สาขา ลายไหม 17", value: 10 },
  ];

  const COLORS = [
    "#FF8042",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
  ];
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Solar Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Energy Overall
            </CardTitle>
            <Zap className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-teal-500">127,039.3</div>
            <p className="text-xs text-gray-500 mt-1">kWh</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Revenue Overall
            </CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-500">533,964</div>
            <p className="text-xs text-gray-500 mt-1">THB</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Monthly: Energy / Revenue
            </CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold text-teal-500">
                  127,039.3
                </div>
                <p className="text-xs text-gray-500 mt-1">kWh</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-500">533,964</div>
                <p className="text-xs text-gray-500 mt-1">THB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Off Peak
            </CardTitle>
            <Moon className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold text-teal-500">
                  20,582.02
                </div>
                <p className="text-xs text-gray-500 mt-1">kWh</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-500">
                  47,251.54
                </div>
                <p className="text-xs text-gray-500 mt-1">THB</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total On Peak
            </CardTitle>
            <Sun className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold text-teal-500">
                  106,457.28
                </div>
                <p className="text-xs text-gray-500 mt-1">kWh</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-500">
                  486,712.46
                </div>
                <p className="text-xs text-gray-500 mt-1">THB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Real-time PV</CardTitle>
            <Battery className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">41.95</div>
            <p className="text-xs mt-1">kW</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yield Today</CardTitle>
            <Leaf className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">537.75</div>
            <p className="text-xs mt-1">kWh</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Consumption Today
            </CardTitle>
            <Droplet className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">176,068.4</div>
            <p className="text-xs mt-1">kWh</p>
          </CardContent>
        </Card>
        <Card className="bg-green-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total CO2 Avoided
            </CardTitle>
            <ThermometerSun className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">89.26</div>
            <p className="text-xs mt-1">Tons</p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Total Energy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={energyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {energyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default Fdashboard;
