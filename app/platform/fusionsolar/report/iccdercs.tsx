"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const Iccdercs = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
  const [customStations, setCustomStations] = useState<string[]>([]);
  const [reportType, setReportType] = useState("");
  const [energyThreshold, setEnergyThreshold] = useState(0);
  const [includeWeather, setIncludeWeather] = useState(false);
  const [compareWithPrevious, setCompareWithPrevious] = useState(false);
  const [groupBy, setGroupBy] = useState("");

  const stations = [
    { value: "station1", label: "CJ More สาขา มีรินดรีซี่ ลาดพร้าว 101" },
    { value: "station2", label: "Solar Station 2" },
    { value: "station3", label: "Solar Station 3" },
    { value: "station4", label: "Solar Station 4" },
    { value: "station5", label: "Solar Station 5" },
  ];

  const handleStationChange = (value: string) => {
    setSelectedStation(value);
    if (value !== "custom") {
      setCustomStations([]);
    }
  };

  const handleCustomStationChange = (value: string, checked: boolean) => {
    if (checked) {
      setCustomStations([...customStations, value]);
    } else {
      setCustomStations(customStations.filter((station) => station !== value));
    }
  };

  const handleGenerateReport = () => {
    const selectedStations =
      selectedStation === "custom" ? customStations : [selectedStation];

  };
  return (
    <>
      <h1 className="text-lg font-bold text-gray-800 mb-6">Report Filters</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Configure Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">End Date</Label>
              <Input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="space-y-2 col-span-full">
              <Label htmlFor="station">Solar Station</Label>
              <Select
                value={selectedStation}
                onValueChange={handleStationChange}
              >
                <SelectTrigger id="station">
                  <SelectValue placeholder="Select a station" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">กำหนดเอง</SelectItem>
                  {stations.map((station) => (
                    <SelectItem key={station.value} value={station.value}>
                      {station.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedStation === "custom" && (
                <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      เลือกสถานีที่ต้องการ:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {stations.map((station) => (
                        <div
                          key={station.value}
                          className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <Checkbox
                            id={station.value}
                            checked={customStations.includes(station.value)}
                            onCheckedChange={(checked) =>
                              handleCustomStationChange(
                                station.value,
                                checked as boolean
                              )
                            }
                            className="border-gray-300"
                          />
                          <Label
                            htmlFor={station.value}
                            className="text-sm text-gray-700 cursor-pointer select-none overflow-hidden overflow-ellipsis whitespace-nowrap"
                          >
                            {station.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily Report</SelectItem>
                  <SelectItem value="weekly">Weekly Report</SelectItem>
                  <SelectItem value="monthly">Monthly Report</SelectItem>
                  <SelectItem value="custom">Custom Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="group-by">Group By</Label>
              <Select value={groupBy} onValueChange={setGroupBy}>
                <SelectTrigger id="group-by">
                  <SelectValue placeholder="Select grouping" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hour">Hour</SelectItem>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* <div className="space-y-2"> */}
          {/* <Label htmlFor="energy-threshold">Energy Threshold (kWh)</Label> */}
          {/* <div className="flex items-center space-x-4"> */}
          {/* <Slider
                id="energy-threshold"
                min={0}
                max={1000}
                step={10}
                value={[energyThreshold]}
                onValueChange={(value) => setEnergyThreshold(value[0])}
                className="flex-grow"
              /> */}
          {/* <Input
                type="number"
                value={energyThreshold}
                onChange={(e) => setEnergyThreshold(Number(e.target.value))}
                className="w-20"
              /> */}
          {/* </div>
          </div> */}

          {/* <div className="flex items-center space-x-2">
            <Checkbox
              id="include-weather"
              checked={includeWeather}
              onCheckedChange={setIncludeWeather}
            />
            <Label htmlFor="include-weather">Include Weather Data</Label>
          </div> */}

          {/* <div className="flex items-center space-x-2">
            <Checkbox
              id="compare-previous"
              checked={compareWithPrevious}
              onCheckedChange={setCompareWithPrevious}
            />
            <Label htmlFor="compare-previous">Compare with Previous Period</Label>
          </div> */}

          <Button onClick={handleGenerateReport} className="w-full">
            Generate Report
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Iccdercs;
