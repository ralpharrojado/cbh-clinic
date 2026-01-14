'use client';

import Link from 'next/link';

export default function Vaccination() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1 px-4 sm:px-8 md:px-10">
            <main className="flex-grow">
              <div className="mt-8">
                <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px]" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaq7da8f8Oa3dAPm8VWNw-vw5p5z4xPIfYikKoitcJu-5C-cNRUDSM4rxAG1ty3ukUlgj3xWe2S5aMJqvojMrXKmzw5HeBQAokMhdaU1D-lWxWMFTkN_ITjv7mll4066oi7m96ssxP4CCmaxjr767ZPuxh__C8mv45RvQL0Q0TxEf42q-uBIx8N4RAWpEyXjEl3bKSmwnUEB9fb8WrLVCA9sC78GkRUP_CVuLUPf2kdVxqX8Xs88jbAGQ1RUG27iEkOg4aRdLxWd4")'}}>
                  <div className="flex p-6 md:p-10"><h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight">Vaccination Services</h1></div>
                </div>
              </div>
              <div className="py-10 md:py-16">
                <p className="text-[#4B5563] text-base md:text-lg font-normal leading-relaxed text-center max-w-3xl mx-auto px-4">At CBH Clinic, we are committed to preventive care for women and their families. Our vaccination services are designed to protect you and your loved ones through every stage of life.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4">
                <VaccineCard icon="health_and_safety" title="Flu Vaccine" description="Annual protection against seasonal influenza." />
                <VaccineCard icon="pulmonology" title="Pneumonia Vaccine" description="Helps protect against pneumonia and related infections." />
                <VaccineCard icon="vaccines" title="HPV Vaccine" description="Guards against cervical cancer and warts." />
                <VaccineCard icon="medical_services" title="Tetanus Toxoid" description="Essential protection against tetanus infection." />
              </div>
              <div className="px-4 py-16 md:py-24">
                <div className="flex flex-col justify-end gap-6 text-center items-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#111827] tracking-tight text-3xl font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-2xl">Ready to schedule your appointment?</h2>
                    <p className="text-[#4B5563] text-base font-normal leading-normal max-w-xl mx-auto">Contact us today to discuss your vaccination needs with one of our specialists.</p>
                  </div>
                  <div className="flex justify-center">
                    <Link href="/booking" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#4A90E2] text-white text-base font-bold leading-normal tracking-[0.015em] grow hover:bg-[#4A90E2]/90 transition-colors">
                      <span className="truncate">Book an Appointment</span>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-auto border-t border-[#E5E7EB] py-10">
              <div className="text-center text-sm text-[#6B7280]">
                <p>© 2024 CBH Clinic. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a className="hover:text-[#13ec5b]" href="#">Facebook</a>
                  <a className="hover:text-[#13ec5b]" href="#">Instagram</a>
                  <a className="hover:text-[#13ec5b]" href="#">Privacy Policy</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

function VaccineCard({ icon, title, description }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <div className="text-[#7ED321]">
        <span className="material-symbols-outlined text-4xl"> {icon} </span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#111827] text-lg font-bold leading-tight">{title}</h2>
        <p className="text-[#6B7280] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}
