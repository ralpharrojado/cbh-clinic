'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Booking() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/meovqvrz', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Thanks — your message has been sent.' });
        e.target.reset();
      } else {
        setFormStatus({ type: 'error', message: 'Sorry — something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Sorry — something went wrong. Please try again.' });
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <main className="flex-1">
              <div className="py-10">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-72 flex-col gap-3 text-center sm:text-left">
                    <h1 className="text-[#111827] text-4xl font-black leading-tight tracking-[-0.033em]">Contact &amp; Appointments</h1>
                    <p className="text-[#6B7280] text-base font-normal leading-normal">We're here to help. Reach out to us directly or book your appointment online.</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 p-4">
                  <div className="flex flex-col gap-10">
                    <div>
                      <h2 className="text-[#111827] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Get in Touch</h2>
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="grid grid-cols-[auto_1fr] gap-x-4">
                          <div className="col-span-2 flex items-center border-b border-b-gray-200 py-4 gap-4">
                            <span className="material-symbols-outlined text-[#65B0B5]">call</span>
                            <div className="flex flex-col">
                              <p className="text-gray-500 text-sm font-normal">Smart</p>
                              <a className="text-[#333333] text-sm font-medium" href="tel:09638933717">0963-893-3717</a>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center border-b border-b-gray-200 py-4 gap-4">
                            <span className="material-symbols-outlined text-[#65B0B5]">call</span>
                            <div className="flex flex-col">
                              <p className="text-gray-500 text-sm font-normal">Globe</p>
                              <a className="text-[#333333] text-sm font-medium" href="tel:09667584390">0966-758-4390</a>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center border-b border-b-gray-200 py-4 gap-4">
                            <span className="material-symbols-outlined text-[#65B0B5]">social_leaderboard</span>
                            <div className="flex flex-col">
                              <p className="text-gray-500 text-sm font-normal">Facebook</p>
                              <a className="text-[#333333] text-sm font-medium hover:text-[#65B0B5]" href="#">@drbernabehisanan</a>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center pt-4 gap-4">
                            <span className="material-symbols-outlined text-[#65B0B5]">schedule</span>
                            <div className="flex flex-col">
                              <p className="text-gray-500 text-sm font-normal">Clinic Hours</p>
                              <p className="text-[#333333] text-sm font-medium">Monday - Friday: 9:00 AM - 5:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[#111827] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Have a Question?</h2>
                      <p className="text-[#6B7280] text-sm mb-4">Fill out the form below for general inquiries and we will get back to you shortly.</p>
                      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-gray-200">
                        <div>
                          <label className="block text-sm font-medium text-[#374151]" htmlFor="name">Name</label>
                          <input className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#65B0B5] focus:ring-[#65B0B5] sm:text-sm px-3 py-2" id="name" name="name" type="text" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#374151]" htmlFor="email">Email</label>
                          <input className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#65B0B5] focus:ring-[#65B0B5] sm:text-sm px-3 py-2" id="email" name="email" type="email" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#374151]" htmlFor="subject">Subject</label>
                          <input className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#65B0B5] focus:ring-[#65B0B5] sm:text-sm px-3 py-2" id="subject" name="subject" type="text" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                          <textarea className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#65B0B5] focus:ring-[#65B0B5] sm:text-sm px-3 py-2" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#F7D9D3] text-[#333333] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#F7D9D3]/90 transition-colors" type="submit">
                          <span className="truncate">Send Message</span>
                        </button>
                        {formStatus && (
                          <div className="mt-2 text-sm">
                            <p className={formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}>
                              {formStatus.message}
                            </p>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <h3 className="text-[#333333] text-lg font-bold mb-4">Book Your Appointment</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Use the form on the left to get in touch with us, or call us directly to schedule your appointment.
                      </p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <span className="material-symbols-outlined text-[#65B0B5] shrink-0">phone</span>
                          <div>
                            <p className="font-medium text-[#333333]">Smart (Primary)</p>
                            <p className="text-sm text-gray-600">0963-893-3717</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span className="material-symbols-outlined text-[#65B0B5] shrink-0">phone</span>
                          <div>
                            <p className="font-medium text-[#333333]">Globe</p>
                            <p className="text-sm text-gray-600">0966-758-4390</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span className="material-symbols-outlined text-[#65B0B5] shrink-0">schedule</span>
                          <div>
                            <p className="font-medium text-[#333333]">Hours</p>
                            <p className="text-sm text-gray-600">Mon-Fri: 9 AM - 5 PM</p>
                            <p className="text-sm text-gray-600">Sat: 9 AM - 1 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-auto border-t border-gray-200 py-6 px-4">
              <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                <p>© 2024 CBH Clinic. All rights reserved.</p>
                <div className="flex gap-4">
                  <a className="hover:text-[#65B0B5]" href="#">Privacy Policy</a>
                  <a className="hover:text-[#65B0B5]" href="#">Terms of Service</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
