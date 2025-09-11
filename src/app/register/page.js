"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    fatherName: "",
    contactNumber: "",
    email: "",
    address: "",
    playingRole: "",
    battingStyle: "",
    bowlingStyle: "",
    bowlingOther: "",
    previousExperience: "",
    clubsRepresented: "",
    medicalConditions: false,
    medicalDetails: "",
    bloodGroup: "",
    consent: false,
    parentConsent: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">Power 100 Cricket League</h1>
          <h2 className="text-2xl font-semibold text-emerald-600">Player Registration Form</h2>
          <p className="text-gray-600 mt-2">Fill out all required information to register for the league</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="bg-emerald-100">
              <CardTitle className="text-emerald-800">Personal Information</CardTitle>
              <CardDescription>Please provide your basic personal details</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-emerald-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="border-emerald-200 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth" className="text-emerald-700">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className="border-emerald-200 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age" className="text-emerald-700">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className="border-emerald-200 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <Label className="text-emerald-700">Gender *</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleInputChange("gender", value)}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div>
                <Label htmlFor="fatherName" className="text-emerald-700">
                  Father&apos;s / Guardian&apos;s Name *
                </Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => handleInputChange("fatherName", e.target.value)}
                  className="border-emerald-200 focus:border-emerald-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactNumber" className="text-emerald-700">
                    Contact Number *
                  </Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                    className="border-emerald-200 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-emerald-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-emerald-200 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-emerald-700">
                  Residential Address *
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="border-emerald-200 focus:border-emerald-500"
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Player Details */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="bg-emerald-100">
              <CardTitle className="text-emerald-800">Player Details</CardTitle>
              <CardDescription>Tell us about your cricket skills and experience</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label className="text-emerald-700">Playing Role *</Label>
                <RadioGroup
                  value={formData.playingRole}
                  onValueChange={(value) => handleInputChange("playingRole", value)}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="batsman" id="batsman" />
                    <Label htmlFor="batsman">Batsman</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bowler" id="bowler" />
                    <Label htmlFor="bowler">Bowler</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="allrounder" id="allrounder" />
                    <Label htmlFor="allrounder">All-Rounder</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wicketkeeper" id="wicketkeeper" />
                    <Label htmlFor="wicketkeeper">Wicketkeeper</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-emerald-700">Batting Style *</Label>
                  <RadioGroup
                    value={formData.battingStyle}
                    onValueChange={(value) => handleInputChange("battingStyle", value)}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="right" id="rightHanded" />
                      <Label htmlFor="rightHanded">Right-Handed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="left" id="leftHanded" />
                      <Label htmlFor="leftHanded">Left-Handed</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="bowlingStyle" className="text-emerald-700">
                    Bowling Style
                  </Label>
                  <Select
                    value={formData.bowlingStyle}
                    onValueChange={(value) => handleInputChange("bowlingStyle", value)}
                  >
                    <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                      <SelectValue placeholder="Select bowling style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fast">Fast</SelectItem>
                      <SelectItem value="medium-fast">Medium-Fast</SelectItem>
                      <SelectItem value="off-spin">Off-Spin</SelectItem>
                      <SelectItem value="leg-spin">Leg-Spin</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.bowlingStyle === "other" && (
                    <Input
                      placeholder="Please specify"
                      value={formData.bowlingOther}
                      onChange={(e) => handleInputChange("bowlingOther", e.target.value)}
                      className="mt-2 border-emerald-200 focus:border-emerald-500"
                    />
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="previousExperience" className="text-emerald-700">
                  Previous Experience
                </Label>
                <Textarea
                  id="previousExperience"
                  value={formData.previousExperience}
                  onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                  className="border-emerald-200 focus:border-emerald-500"
                  rows={3}
                  placeholder="Describe your cricket experience..."
                />
              </div>

              <div>
                <Label htmlFor="clubsRepresented" className="text-emerald-700">
                  Clubs/Academies Represented
                </Label>
                <Textarea
                  id="clubsRepresented"
                  value={formData.clubsRepresented}
                  onChange={(e) => handleInputChange("clubsRepresented", e.target.value)}
                  className="border-emerald-200 focus:border-emerald-500"
                  rows={3}
                  placeholder="List clubs or academies you&apos;ve represented..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Medical & Fitness */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="bg-emerald-100">
              <CardTitle className="text-emerald-800">Medical & Fitness</CardTitle>
              <CardDescription>Health and fitness information</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="medicalConditions"
                    checked={formData.medicalConditions}
                    onCheckedChange={(checked) => handleInputChange("medicalConditions", checked)}
                  />
                  <Label htmlFor="medicalConditions" className="text-emerald-700">
                    Do you have any medical conditions that may affect your performance?
                  </Label>
                </div>
                {formData.medicalConditions && (
                  <Textarea
                    placeholder="Please specify your medical conditions..."
                    value={formData.medicalDetails}
                    onChange={(e) => handleInputChange("medicalDetails", e.target.value)}
                    className="mt-2 border-emerald-200 focus:border-emerald-500"
                    rows={3}
                  />
                )}
              </div>

              <div>
                <Label htmlFor="bloodGroup" className="text-emerald-700">
                  Blood Group
                </Label>
                <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange("bloodGroup", value)}>
                  <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="bg-emerald-100">
              <CardTitle className="text-emerald-800">Documents Required</CardTitle>
              <CardDescription>Please ensure you have the following documents ready</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-emerald-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Copy of Aadhar Card / ID Proof (self-attested)</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Passport Size Photograph (2 copies)</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Age Proof (Birth Certificate / School Certificate)</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Previous Cricket Achievements (if any)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consent & Undertaking */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="bg-emerald-100">
              <CardTitle className="text-emerald-800">Consent & Undertaking</CardTitle>
              <CardDescription>Please read and agree to the terms</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-emerald-800 mb-4">
                  I hereby declare that the information provided above is true and correct. I agree to abide by the
                  rules and regulations of the Power 100 Cricket League.
                </p>
                <p className="text-emerald-700 mb-2">I also undertake that:</p>
                <ul className="list-disc list-inside space-y-1 text-emerald-700 ml-4">
                  <li>I am medically fit to participate.</li>
                  <li>I will maintain discipline and sportsmanship.</li>
                  <li>
                    The Federation/League will not be responsible for any injury or accident during matches/events.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange("consent", checked)}
                    required
                  />
                  <Label htmlFor="consent" className="text-emerald-700">
                    I agree to all the terms and conditions mentioned above *
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="parentConsent"
                    checked={formData.parentConsent}
                    onCheckedChange={(checked) => handleInputChange("parentConsent", checked)}
                  />
                  <Label htmlFor="parentConsent" className="text-emerald-700">
                    Parent/Guardian consent (required if under 18)
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Submit Registration
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
