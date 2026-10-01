"use client"

import Link from "next/link";
import { useState } from "react";
import { json } from "stream/consumers";

const FindCaregiverPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<{type: "success" | "error" | ""; message: string}>({
        type:'',
        message:'',
    })

    const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type:'', message:'' });
        const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        const payload = {
            formType: "Family Requirements",
            clientName: formData.get("clientName"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            location: formData.get("location"),
            patientAge: formData.get("patientAge"),
            serviceType: formData.get("serviceNeeded"),
            duration: formData.get("duration"),
            medicalCondition: formData.get("medicalCondition"),
            specialInstructions: formData.get("specialInstructions"),
            submittedAt: new Date().toISOString(),

        };
        try{
            await fetch(SCRIPT_URL, {
                method:'POST',
                mode: "no-cors",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });
            setStatus({
                type: 'success',
                message: 'Thank you! Your care request has been submitted successfully. A coordinator will reach out within 2 hours.',
            });
            formElement.reset();
        } catch (err) {
            console.log("test", err);
            setStatus({
                type: 'error',
                message: 'Unable to submit your request at this moment. Please call us directly for immediate assistance.',
            })
        }finally{
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-white text-stone-100 py-16 px-6 sm:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[#c5a059] uppercase tracking-widest text-sm font-semibold">
                        Personalized Care Matching
                    </span>
                    <h1 className="text-4xl sm:text-4xl font-medium text-green! mt-2 mb-4">
                        Find the Perfect Caregiver for Your Family
                    </h1>
                    <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                        Tell us about your loved one’s specific health and daily support needs. We will match you with certified, background-checked caregivers tailored to your schedule.
                    </p>
                    <Link href="/" aria-label="back to home page" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:underline mb-2">
                        ← Back to Sanctuary Home
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div className="p-4 rounded-xl bg-green border border-emerald-800/60">
                        <span className="text-site-yellow font-bold text-lg block mb-1">✓ Vetted Professionals</span>
                        <span className="text-stone-200 text-sm">Strict background checks & verification</span>
                    </div>
                    <div className="p-4 rounded-xl bg-green border border-emerald-800/60">
                        <span className="text-site-yellow font-bold text-lg block mb-1">✓ Tailored Matching</span>
                        <span className="text-stone-200 text-sm">Matched by medical needs & personality</span>
                    </div>
                    <div className="p-4 rounded-xl bg-green border border-emerald-800/60">
                        <span className="text-site-yellow font-bold text-lg block mb-1">✓ Flexible Care</span>
                        <span className="text-stone-200 text-sm">Hourly, daily, short-term, or 24/7 live-in</span>
                    </div>
                </div>

                <div className="p-8 sm:p-12 bg-green border border-[#c5a059]/40 rounded-2xl shadow-2xl backdrop-blur-md">
                    <h2 className="text-2xl font-bold text-site-yellow mb-6">
                        Care Requirement Request Form
                    </h2>
                    <form onSubmit={handleSubmit} className="forms space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label>
                                    Your Full Name <span>*</span>
                                </label>
                                <input type="text" name="clientName" required placeholder="John Doe" />
                            </div>
                            <div>
                                <label>Phone Number<span>*</span></label>
                                <input type="text" name="phone" required placeholder="+94-00-000-0000" />
                            </div>
                            <div>
                                <label>Email Address<span>*</span></label>
                                <input type="email" name="email" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label>Location / City <span>*</span></label>
                                <input type="text" name="location" placeholder="City or Area Name" />
                            </div>
                        </div>
                        <hr className="border-emerald-800/60 my-8" />

                        {/* Patient & Care Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <label>Patient Age</label>
                                <input type="number" name="patientAge" placeholder="e.g. 78" />
                            </div>

                            <div>
                                <label>Type of Service Needed <span>*</span></label>
                                <select
                                name="serviceNeeded"
                                required
                                className="w-full p-3.5 rounded-lg bg-emerald-950 border border-emerald-700 text-stone-100 focus:outline-none focus:border-[#c5a059] transition-colors"
                                >
                                <option value="">Select Service...</option>
                                <option value="Elderly Care">Elderly Care</option>
                                <option value="Patient Care">Patient Care</option>
                                <option value="Bedridden Care">Bedridden Care</option>
                                <option value="Dementia & Alzheimer's Support">Dementia & Alzheimer&apos;s Support</option>
                                <option value="Post-Hospital Care">Post-Hospital Care</option>
                                <option value="Companion Care">Companion Care</option>
                                <option value="24-Hour Care">24-Hour Live-in Care</option>
                                <option value="Short-Term Care">Short-Term / Respite Care</option>
                                </select>
                            </div>

                            <div>
                                <label>Duration / Schedule <span>*</span></label>
                                <select
                                name="duration"
                                required
                                className="w-full p-3.5 rounded-lg bg-emerald-950 border border-emerald-700 text-stone-100 focus:outline-none focus:border-[#c5a059] transition-colors"
                                >
                                <option value="">Select Schedule...</option>
                                <option value="Part-time (Day Shift)">Part-time (Day Shift)</option>
                                <option value="Full-time (12h Shift)">Full-time (12h Shift)</option>
                                <option value="24/7 Live-In">24/7 Live-In Care</option>
                                <option value="Short-Term (A few days/weeks)">Short-Term (A few days/weeks)</option>
                                <option value="Not Sure / Need Advice">Not Sure / Need Advice</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>Patient Medical Condition or Primary Challenges</label>
                            <textarea
                                name="medicalCondition"
                                rows={3}
                                placeholder="E.g., Recovering from hip surgery, mobility assistance required, mild dementia..."
                            />
                        </div>
                        <div>
                            <label>Additional Instructions or Special Preferences</label>
                            <textarea
                                name="specialInstructions"
                                rows={3}
                                placeholder="E.g., Preferred starting date, language preference, pet in the household..."
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-[#c5a059] text-emerald-950 font-bold cursor-pointer text-[16px] rounded-lg hover:bg-amber-300 transition-colors duration-300 shadow-lg disabled:opacity-50"
                        >
                        {loading ? 'Submitting Request...' : 'Submit Care Request'}
                        </button>
                        {status.message && (
                            <div
                            className={`p-4 rounded-lg text-sm text-center font-medium 
                                ${status.type === 'success' 
                                ? 'bg-emerald-700 border border-emerald-500 text-emerald-100' 
                                : 'bg-rose-600/60 border border-rose-500 text-rose-200' }`}
                            >
                                {status.message}
                            </div>
                        )}
                    </form>
                     {/* Alternative Contact */}
                    <div className="mt-8 text-center text-sm text-stone-200">
                        Need immediate assistance? Call our care line directly or{' '}
                        <Link href="/contact" className="text-site-yellow underline hover:text-stone-100 transition-colors">
                        Contact Us Here
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default FindCaregiverPage