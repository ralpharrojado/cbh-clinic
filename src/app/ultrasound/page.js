'use client';

import Link from 'next/link';

export default function Ultrasound() {
  const services = [
    { icon: 'body_system', title: 'Whole Abdomen', description: 'A comprehensive scan of all major abdominal organs, including the liver, gallbladder, spleen, pancreas, and kidneys.' },
    { icon: 'view_cozy', title: 'Upper/Lower Abdomen', description: 'Focused examination of either the upper or lower regions of your abdomen for specific concerns.' },
    { icon: 'water_drop', title: 'KUB (Kidneys, Ureters & Bladder)', description: 'A detailed look at the urinary system to detect issues like kidney stones or bladder abnormalities.' },
    { icon: 'bubble_chart', title: 'HBT (Hepatobiliary Tree)', description: 'Specialized imaging of the liver, bile ducts, and gallbladder to assess function and detect blockages.' },
    { icon: 'male', title: 'Scrotal Ultrasound', description: 'A diagnostic tool used to examine the testicles and surrounding tissues for lumps, swelling, or pain.' },
    { icon: 'pulmonology', title: 'Chest Ultrasound', description: 'An imaging test to check for fluid around the lungs or other abnormalities within the chest cavity.' },
    { icon: 'female', title: 'Pelvic Ultrasound', description: 'An examination of the female reproductive organs, including the uterus, ovaries, and bladder.' },
    { icon: 'search', title: 'Transvaginal/Transrectal', description: 'An internal ultrasound providing clearer, more detailed images of the pelvic organs.' },
    { icon: 'child_care', title: 'Congenital Anomaly Scan', description: 'A detailed mid-pregnancy scan to check for the healthy development of your baby\'s organs and structure.' },
    { icon: 'cardiology', title: 'OB & Gyne Doppler', description: 'An advanced ultrasound that assesses blood flow in the umbilical cord, fetus, and placenta.' },
    { icon: 'view_in_ar', title: '3D/4D/5D Ultrasound', description: 'Advanced imaging that provides lifelike, three-dimensional, and real-time moving images of your baby.' },
    { icon: 'science', title: 'SISH / HSSG', description: 'Specialized procedures to evaluate the uterine cavity and fallopian tubes for infertility investigations.' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <main className="flex-grow">
        <section className="bg-white py-20 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 @container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
                <h1 className="text-[#111827] text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Ultrasound Services</h1>
                <h2 className="text-[#4B5563] text-lg sm:text-xl">Providing clear, compassionate, and high-quality diagnostic imaging to support your health and well-being.</h2>
                <div className="mt-4 flex justify-center md:justify-start">
                  <Link href="/booking" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#2A6F97] text-white text-base font-bold shadow-lg hover:bg-[#2A6F97]/90 transition-colors">
                    <span className="truncate">Book an Appointment</span>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-lg" style={{backgroundImage: 'url("/clinic-4.jpg")'}}>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#4B5563] text-base font-normal leading-relaxed text-center">
              Ultrasound, also known as sonography, is a safe and painless diagnostic procedure that uses sound waves to create images of the inside of the body. At CBH Clinic, we use state-of-the-art technology to provide crucial insights for obstetrics, gynecology, and general health monitoring.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#111827] text-3xl font-bold tracking-tight">Our Ultrasound Services</h2>
              <p className="mt-2 text-[#6B7280]">Comprehensive care for every stage of life.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="material-symbols-outlined text-[#7ED321] text-4xl">{service.icon}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[#111827] text-lg font-bold">{service.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 p-8 rounded-xl border border-[#2A6F97]/20">
            <div className="flex flex-col items-center text-center gap-4">
              <span className="material-symbols-outlined text-[#2A6F97] text-4xl">checklist</span>
              <h3 className="text-[#343A40] text-2xl font-bold">Preparing for Your Appointment</h3>
              <p className="text-[#343A40]/80 leading-relaxed">
                To ensure the best possible results from your ultrasound, preparation may be required. This can include fasting or having a full bladder. Please follow the specific instructions provided to you by our staff when you book your appointment. If you have any questions, don't hesitate to call us.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-[#84A98C]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#343A40]">Ready to Schedule Your Visit?</h2>
            <p className="mt-4 text-lg text-[#343A40]/80">
              Our team is here to provide you with compassionate care. Contact us today to book your appointment.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/booking" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#2A6F97] text-white text-base font-bold shadow-lg hover:bg-[#2A6F97]/90 transition-colors">
                <span className="truncate">Book an Appointment Now</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-[#343A40]/70">
          <p>© 2024 CBH Clinic. All Rights Reserved.</p>
          <p className="mt-2">123 Health St, Wellness City, 12345 | (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}
