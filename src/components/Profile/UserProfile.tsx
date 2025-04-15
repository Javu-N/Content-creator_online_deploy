"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ProfilePage() {
  const [firstName, setFirstName] = useState("Khang");
  const [lastName, setLastName] = useState("Nguyen");
  const [gender, setGender] = useState("Male");
  const [DoB, setDoB] = useState("2000-01-01");
  const [phone, setPhone] = useState("63+ 932-555-4247");
  const [email, setEmail] = useState("janedoe@gmail.com");
  
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-blue-100 min-h-screen">
      {/* Profile Card */}
      <Card className="w-80 p-4 text-center" style={{ marginTop: "64px" }}>
        <img
          src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png?v=2025040502"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-2"
        />
        <h2 className="text-lg font-semibold">{firstName} {lastName}</h2>
        <p className="text-sm text-gray-500">CEO of Apple</p>
        <div className="mt-4">
          <p>Bio ...</p>
        </div>
      </Card>
      
      {/* Account Tabs */}
      <Tabs defaultValue="account" className="flex-1" style={{ marginTop: "64px" }}>
        <TabsList className="mb-4 border-b">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="tab2">Posted List</TabsTrigger>
          <TabsTrigger value="tab3">Archivement</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <Card className="p-6">
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">First Name</label>
                  <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-semibold">Last Name</label>
                  <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold">Gender</label>
                <Input value={gender} onChange={(e) => setGender(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-semibold">Day of Birth</label>
                <Input type="Date" value={DoB} onChange={(e) => setGender(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-semibold">Phone Number</label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-semibold">Email Address</label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-semibold">Password</label>
                <Input type="password" value="**********" disabled />
              </div>
              <Button className="mt-4 w-full">Edit</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
