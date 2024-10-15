"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  BarChart2,
  Battery,
  Calendar,
  CheckCircle,
  Download,
  Printer,
  Search,
  Share,
  Sun,
  Zap,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardOn from "./jjfhnj/olliikjrjjd";
import { Button } from "@/components/ui/button";

export const stations = [
  { id: "1", name: "บ้านคุณบุญเรือง", status: "online" },
  { id: "2", name: "CJ More สาขา เทียนทะเล 20", status: "online" },
  {
    id: "3",
    name: "CJ More สาขา นิรันดร์ซิตี้ ลาดพร้าว 101",
    status: "offline",
  },
  { id: "4", name: "CJ More สาขา เพรชเกษม 81", status: "online" },
  { id: "5", name: "PCA Parking", status: "maintenance" },
  { id: "11", name: "CJ More สาขา บางบอน 4", status: "online" },
  { id: "22", name: "CJ More สาขา สายไหม 17", status: "online" },
];
const Bblcr = () => {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const tabsDashboard: any[] = [
    {
      value: "1",
      label: "Overview",
      component: <CardOn selectedStation={selectedStation} />,
    },
    { value: "2", label: "Station-details", component: "2" },
    { value: "3", label: "Issues", component: "3" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Card - 20% width */}
        <Card className="w-80 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-medium">สถานี Solar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4">
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="ค้นหาสถานี..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md"
              />
            </div>
            <ScrollArea className=" h-72 w-50 rounded-md">
              {filteredStations.map((station, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStation(station.id)}
                  className="flex items-center w-full p-3 mb-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
                >
                  <Sun className="w-5 h-5 mr-3 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {station.name}
                  </span>
                </button>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        {/* <Card className="w-full md:w-1/5 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-700">
              สถานี Solar
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="relative mb-4">
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="ค้นหาสถานี..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            <ScrollArea className="h-80 w-50 rounded-md ">
            <div className="p-1">
              <ul className="divide-y divide-gray-200">
                {filteredStations.map((station) => (
                  <li
                    key={station.id}
                    className={`flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                      selectedStation === station.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedStation(station.id)}
                  >
                    <Sun className="w-5 h-5 mr-3 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {station.name}
                    </span>
                  </li>
                ))}
              </ul>
              </div>
            </ScrollArea>
          </CardContent>
        </Card> */}

        {/* Right Card - 80% width */}
        <Card className="w-full md:w-4/5 bg-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium text-gray-700">
              {selectedStation
                ? stations.find((s) => s.id === selectedStation)?.name +
                  " ออนไลน์"
                : "ยังไม่ได้เลือกสถานี"}
            </CardTitle>
            {selectedStation && (
              <>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Printer className="w-4 h-4 mr-2" />
                    พิมพ์รายงาน PDF
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}
          </CardHeader>
          <CardContent>
            {selectedStation ? (
              <Tabs defaultValue="1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {tabsDashboard.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                  {/* <TabsTrigger value="station-details">
                    Station Details
                  </TabsTrigger>
                  <TabsTrigger value="issues">Issues</TabsTrigger> */}
                </TabsList>
                {tabsDashboard.map((tab) => (
                  <>
                    <TabsContent key={tab.value} value={tab.value}>
                      {tab.component}
                      {/**/}
                    </TabsContent>
                  </>
                ))}
              </Tabs>
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-xl text-gray-500">
                  กรุณาเลือกสถานี Solar จากรายการด้านซ้าย
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Bblcr;
