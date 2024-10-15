"use client";
import React from "react";
import {
  Zap,
  DollarSign,
  Sun,
  Percent,
  Battery,
  BarChart2,
  Wind,
  CloudSun,
  Leaf,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { stations } from "../9ce4b";

const CardOn = ({ selectedStation }: any) => {
  const MetricCard = ({
    title,
    value,
    unit,
    icon: Icon,
    color,
    secondaryValue = null,
  }: any) => (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-sm font-medium text-gray-500">
            {title}
          </CardTitle>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-800">{value}</div>
            {secondaryValue && (
              <div className="text-sm text-gray-500 mt-1">{secondaryValue}</div>
            )}
          </div>
          <div className="text-sm font-medium text-gray-600">{unit}</div>
        </div>
      </CardContent>
    </Card>
  );
  return (
    <>
      <div className="container mx-auto p-2 bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedStation
              ? stations.find((s) => s.id === selectedStation)?.name +
                " ออนไลน์"
              : "ยังไม่ได้เลือกสถานี"}
          </h1>
          <p className="text-sm text-gray-500">Solar Power Station Dashboard</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MetricCard
            title="Energy"
            value="44,899.32"
            unit="kWh"
            icon={Zap}
            color="text-yellow-500"
          />
          <MetricCard
            title="Revenue"
            value="96,825.04"
            unit="THB"
            icon={DollarSign}
            color="text-green-500"
          />
          <MetricCard
            title="Real-time PV"
            value="1.86"
            secondaryValue="32.4 kW max"
            unit="kW"
            icon={Sun}
            color="text-orange-500"
          />
          <MetricCard
            title="Real-time PV Ratio"
            value="5.74"
            unit="%"
            icon={Percent}
            color="text-blue-500"
          />
          <MetricCard
            title="Real-time Load"
            value="25,032.87"
            unit="kW"
            icon={Battery}
            color="text-red-500"
          />
          <MetricCard
            title="Yield Today"
            value="103.93"
            unit="kWh"
            icon={BarChart2}
            color="text-purple-500"
          />
          <MetricCard
            title="Total Yield"
            value="33.28"
            unit="MWh"
            icon={BarChart2}
            color="text-indigo-500"
          />
          <MetricCard
            title="CO2 Avoided"
            value="4.55"
            unit="tons"
            icon={Leaf}
            color="text-green-500"
          />
          <Card className="col-span-full overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Weather
                </CardTitle>
                <CloudSun className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-800">
                scattered clouds
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardOn;
