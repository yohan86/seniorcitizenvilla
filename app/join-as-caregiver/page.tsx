"use client";

import Link from "next/link";
import { useState } from "react";

const JoinAsCaregiverPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      formType: "Caregiver Application",
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      location: formData.get("location"),
      experienceYears: formData.get("experienceYears"),
      qualifications: formData.get("qualifications"),
      availability: formData.get("availability"),
      preferredGenderCare: formData.get("preferredGenderCare"),
      additionalExperience: formData.get("additionalExperience"),
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus({
        type: "success",
        message:
          "Thank you! Your caregiver application has been submitted successfully. Our recruitment team will review your profile and reach out shortly.",
      });
      formElement.reset();
    } catch (err) {
      console.log("Caregiver form submit error:", err);
      setStatus({
        type: "error",
        message:
          "Unable to submit your application at this moment. Please contact our support team directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-stone-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-dark-gold uppercase tracking-widest text-sm font-semibold">
            Join Our Professional Network
          </span>
          <h1 className="text-4xl sm:text-4xl font-medium text-green! mt-2 mb-4">
            Become a Verified Caregiver
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Build a rewarding career helping families in need. Access competitive pay, flexible work hours, and ongoing support across Sri Lanka.
          </p>
          <Link href="/" aria-label="back to home page" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2">
            ← Back to Sanctuary Home
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-4 rounded-xl bg-green border border-emerald-800/60">
            <span className="text-site-yellow font-bold text-lg block mb-1">
              ✓ Competitive Compensation
            </span>
            <span className="text-stone-200 text-sm">
              Reliable monthly or weekly payouts
            </span>
          </div>
          <div className="p-4 rounded-xl bg-green border border-emerald-800/60">
            <span className="text-site-yellow  font-bold text-lg block mb-1">
              ✓ Flexible Placements
            </span>
            <span className="text-stone-200 text-sm">
              Choose shifts near your preferred city
            </span>
          </div>
          <div className="p-4 rounded-xl bg-green border border-emerald-800/60">
            <span className="text-site-yellow  font-bold text-lg block mb-1">
              ✓ Dedicated Support
            </span>
            <span className="text-stone-200 text-sm">
              24/7 care management guidance
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="p-8 sm:p-12 bg-green border border-[#c5a059]/40 rounded-2xl shadow-2xl backdrop-blur-md">
          <h2 className="text-2xl font-bold text-site-yellow mb-6">
            Caregiver Application Form
          </h2>

          <form onSubmit={handleSubmit} className="forms space-y-6">
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label>Your Full Name <span>*</span></label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Nimal Perera"
                />
              </div>

              <div>
                <label>
                  Phone / WhatsApp Number <span>*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="+94-00-000-0000"
                />
              </div>

              <div>
                <label>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="nimal@example.com"
                />
              </div>

              <div>
                <label>
                  Preferred District / City <span>*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. Colombo, Gampaha"
                />
              </div>
            </div>

            <hr className="border-emerald-800/60 my-8" />

            {/* Experience & Qualifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label>
                  Years of Experience <span>*</span>
                </label>
                <input
                  type="number"
                  name="experienceYears"
                  required
                  min="0"
                  placeholder="e.g. 3"
                />
              </div>

              <div>
                <label>
                  Primary Qualification <span>*</span>
                </label>
                <select
                  name="qualifications"
                  required
                  className=""
                >
                  <option value="">Select Qualification...</option>
                  <option value="NVQ Level 3 / 4 Caregiving">NVQ Level 3 / 4 Caregiving</option>
                  <option value="Nursing Assistant / Aide">Nursing Assistant / Aide</option>
                  <option value="Registered Nurse">Registered Nurse</option>
                  <option value="Home Care Experience (Uncertified)">Practical Experience Only</option>
                  <option value="First Aid / CPR Certified">First Aid / CPR Certified</option>
                </select>
              </div>

              <div>
                <label>
                  Work Availability <span>*</span>
                </label>
                <select
                  name="availability"
                  required
                  className="w-full p-3.5 rounded-lg bg-emerald-950 border border-emerald-700 text-stone-100 focus:outline-none focus:border-[#c5a059] transition-colors"
                >
                  <option value="">Select Availability...</option>
                  <option value="24/7 Live-In Care">24/7 Live-In Care</option>
                  <option value="Full-time (12h Shift)">Full-time (12h Shift)</option>
                  <option value="Part-time (Day Shift)">Part-time (Day Shift)</option>
                  <option value="Night Shift Only">Night Shift Only</option>
                  <option value="On-Call / Flexible">On-Call / Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label>Preference for Client / Care Category</label>
              <select
                name="preferredGenderCare"
                className="w-full p-3.5 rounded-lg bg-emerald-950 border border-emerald-700 text-stone-100 focus:outline-none focus:border-[#c5a059] transition-colors"
              >
                <option value="Any Patient / Client">Any Patient / Client</option>
                <option value="Elderly Care Only">Elderly Care Only</option>
                <option value="Bedridden Patients Only">Bedridden Patients Only</option>
                <option value="Female Patients Only">Female Patients Only</option>
                <option value="Male Patients Only">Male Patients Only</option>
              </select>
            </div>

            <div>
              <label>Additional Skills or Past Caregiving Work</label>
              <textarea
                name="additionalExperience"
                rows={3}
                placeholder="E.g., Worked 2 years taking care of Alzheimer's patients, experienced in catheter care, feeding tube assistance..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}>
              {loading ? "Submitting Application..." : "Submit Caregiver Application"}
            </button>

            {status.message && (
              <div
                className={`p-4 rounded-lg text-sm text-center font-medium ${
                  status.type === "success"
                    ? "bg-emerald-700 border border-emerald-500 text-emerald-100"
                    : "bg-rose-600/60 border border-rose-500 text-rose-200"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 text-center text-sm text-stone-100">
            Have questions before applying? Call our recruiter helpline or{" "}
            <Link href="/contact" className="text-amber-300 underline hover:text-amber-100">
              Contact Us Here
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinAsCaregiverPage;