'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white">
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl text-[#111827]">OB-GYNE Services</h1>
          </div>
          <div className="mt-4 text-center">
            <p className="mx-auto max-w-2xl text-base text-[#4B5563]">
              At CBH Clinic, we are dedicated to providing comprehensive and compassionate healthcare for women at every stage of life. Our experienced team is here to support your health and wellness with personalized care.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <ServiceItem icon="pregnancy" title="Prenatal Check-up" description="Comprehensive care and monitoring for a healthy pregnancy journey." />
            <ServiceItem icon="science" title="Pap Smear" description="Essential screening for early detection of cervical health issues." />
            <ServiceItem icon="monitor_heart" title="High-Risk Pregnancy Care" description="Specialized support for complex pregnancies to ensure the best outcomes." />
            <ServiceItem icon="stethoscope" title="Gynecologic Consultation" description="Expert diagnosis and treatment for a wide range of gynecological concerns." />
            <ServiceItem icon="spa" title="Women's Wellness Care" description="Proactive and preventive care focused on your long-term health and well-being." />
            <ServiceItem icon="elderly_woman" title="Menopausal Care" description="Guidance and support to help you navigate the changes of menopause." />
            <ServiceItem icon="breastfeeding" title="Breast Consultation" description="Thorough breast health evaluations and screenings for peace of mind." />
            <ServiceItem icon="family_restroom" title="Family Planning" description="Confidential counseling on contraception and fertility to plan your future." />
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="size-5 text-[#13ec5b]">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#111827]">CBH Clinic</h3>
            </div>
            <p className="text-[#6B7280]">Your partner in women's health and wellness.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold">Contact Us</h4>
            <a className="text-[#4c9a66] hover:text-[#13ec5b]" href="#">123 Health St, Wellness City</a>
            <a className="text-[#4c9a66] hover:text-[#13ec5b]" href="#">(123) 456-7890</a>
            <a className="text-[#4c9a66] hover:text-[#13ec5b]" href="#">contact@cbhclinic.com</a>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold">Clinic Hours</h4>
            <p className="text-[#4c9a66]">Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p className="text-[#4c9a66]">Sat: 9:00 AM - 1:00 PM</p>
            <p className="text-[#4c9a66]">Sun: Closed</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a className="text-[#4c9a66] hover:text-[#13ec5b]" href="#">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e7f3eb] py-4">
          <p className="text-center text-xs text-[#4c9a66]">© 2024 CBH Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceItem({ icon, title, description }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-[#E5E7EB] bg-white p-4 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#7ED321]/20 text-[#7ED321]">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-base font-medium text-[#111827] text-[#111827]">{title}</p>
          <p className="text-sm text-[#6B7280]">{description}</p>
        </div>
      </div>
      <button className="hidden text-sm font-medium text-[#13ec5b] hover:underline sm:block">Learn More</button>
    </div>
  );
}
