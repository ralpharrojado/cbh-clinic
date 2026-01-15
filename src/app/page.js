'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="@container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#111827]">
                    Compassionate Care for Every Stage of Womanhood
                  </h1>
                  <p className="text-base lg:text-lg font-normal leading-relaxed text-[#4B5563]">
                    CBH Clinic provides comprehensive OB-GYNE and Ultrasound services for women's health, prenatal care, and family wellness.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                    <Link href="/booking" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#4A90E2] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-[#4A90E2]/90 transition-colors">
                      Book an Appointment
                    </Link>
                    <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#4A90E2]/20 text-[#4A90E2] text-base font-bold leading-normal tracking-wide hover:bg-[#4A90E2]/30 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="w-full bg-center bg-no-repeat aspect-square md:aspect-[4/3] lg:aspect-square bg-cover rounded-xl shadow-lg" style={{backgroundImage: 'url("/home.jpg")'}}>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#F4F4F4] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col items-center gap-4">
                  <h4 className="text-[#7ED321] text-sm font-bold leading-normal tracking-widest uppercase">Our Services</h4>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-[#111827]">
                    Comprehensive Women's Health Services
                  </h1>
                  <p className="text-base text-[#4B5563] max-w-2xl">
                    We are dedicated to providing personalized and expert care for all your health needs, ensuring your comfort and well-being at every step.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col gap-4 rounded-xl border border-[#EAEAEA] bg-white p-6 text-center items-center">
                    <span className="material-symbols-outlined text-[#7ED321] text-4xl mb-2">pregnant_woman</span>
                    <h2 className="text-xl font-bold leading-tight text-[#111827]">OB-GYNE Services</h2>
                    <p className="text-sm text-[#6B7280]">Complete gynecological care, from routine check-ups and prenatal monitoring to specialized treatments.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-[#EAEAEA] bg-white p-6 text-center items-center">
                    <span className="material-symbols-outlined text-[#7ED321] text-4xl mb-2">radiology</span>
                    <h2 className="text-xl font-bold leading-tight text-[#111827]">Ultrasound Services</h2>
                    <p className="text-sm text-[#6B7280]">State-of-the-art ultrasound imaging for accurate diagnostics and detailed prenatal screening.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-[#EAEAEA] bg-white p-6 text-center items-center">
                    <span className="material-symbols-outlined text-[#7ED321] text-4xl mb-2">vaccines</span>
                    <h2 className="text-xl font-bold leading-tight text-[#111827]">Vaccination Services</h2>
                    <p className="text-sm text-[#6B7280]">Essential vaccinations to protect you and your family's health and long-term well-being.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col items-center gap-4">
                  <h4 className="text-[#7ED321] text-sm font-bold leading-normal tracking-widest uppercase">Our Clinic</h4>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-[#111827]">
                    Visit Our Facilities
                  </h1>
                  <p className="text-base text-[#4B5563] max-w-2xl">
                    Take a look at our modern, clean, and welcoming clinic space designed for your comfort and care.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <ClinicCarousel />
                  <div className="flex flex-col gap-4">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.28901821348612!2d122.7558212688709!3d11.57876878606013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1768459928322!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#7ED321]">location_on</span>
                          <div>
                            <p className="font-semibold text-[#111827] mb-1">Address</p>
                            <p className="text-sm text-[#6B7280]">
                              [Clinic Address Here]<br />
                              [City, Province]<br />
                              [Postal Code]
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#7ED321]">schedule</span>
                          <div>
                            <p className="font-semibold text-[#111827] mb-1">Clinic Hours</p>
                            <p className="text-sm text-[#6B7280]">
                              Monday - Friday: 9:00 AM - 5:00 PM<br />
                              Saturday: 9:00 AM - 1:00 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col items-center gap-4">
                  <h4 className="text-[#4A90E2] text-sm font-bold leading-normal tracking-widest uppercase">Patient Testimonials</h4>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-[#111827]">
                    Kind Words From Our Valued Patients
                  </h1>
                  <p className="text-base text-[#4B5563] max-w-2xl">
                    We are honored to have earned the trust of our patients. Here's what some of them have to say about their experience at CBH Clinic.
                  </p>
                </div>
                <TestimonialsCarousel />
              </div>
            </div>
          </section>
          <section className="bg-[#F9FAFB] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col items-center gap-4">
                  <h4 className="text-[#7ED321] text-sm font-bold leading-normal tracking-widest uppercase">Social Media</h4>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-[#111827]">
                    Community Appreciation
                  </h1>
                  <p className="text-base text-[#4B5563] max-w-2xl">
                    See what our community is saying about Dr. Hisanan on social media.
                  </p>
                </div>
                <SocialPostsCarousel />
              </div>
            </div>
          </section>
          <section className="bg-[#4A90E2]/90 text-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 text-center">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">smartphone</span>
                  <div className="flex flex-col items-start">
                    <span className="text-sm opacity-80">Smart</span>
                    <a className="font-bold text-lg hover:underline" href="tel:09638933717">0963-893-3717</a>
                  </div>
                </div>
                <div className="hidden md:block h-10 w-px bg-white/30"></div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">smartphone</span>
                  <div className="flex flex-col items-start">
                    <span className="text-sm opacity-80">Globe</span>
                    <a className="font-bold text-lg hover:underline" href="tel:09667584390">0966-758-4390</a>
                  </div>
                </div>
                <div className="hidden md:block h-10 w-px bg-white/30"></div>
                <div className="flex items-center gap-3">
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                  <div className="flex flex-col items-start">
                    <span className="text-sm opacity-80">Facebook</span>
                    <a className="font-bold text-lg hover:underline" href="#">@drbernabehisanan</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-[#F4F4F4] border-t border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4A90E2] text-2xl">medical_services</span>
                <span className="text-base font-semibold text-[#111827]">CBH Clinic</span>
              </div>
              <div className="flex gap-6 text-sm text-[#4B5563]">
                <a className="hover:text-[#4A90E2]" href="#">Privacy Policy</a>
                <a className="hover:text-[#4A90E2]" href="#">Terms of Service</a>
              </div>
              <p className="text-sm text-[#6B7280]">© 2024 CBH Clinic. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ClinicCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const images = [
    '/clinic-1.jpg',
    '/clinic-2.jpg',
    '/clinic-3.jpg',
    '/clinic-4.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Clinic view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#111827] rounded-full p-2 md:p-3 shadow-lg transition-all"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">chevron_left</span>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#111827] rounded-full p-2 md:p-3 shadow-lg transition-all"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">chevron_right</span>
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-[#4A90E2]' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ name, text, image }) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-[#EAEAEA] bg-[#F4F4F4]/50 p-6">
      <p className="text-base text-[#374151] italic flex-1">&quot;{text}&quot;</p>
      <div className="flex items-center gap-4">
        <img alt={`Portrait of ${name}`} className="w-14 h-14 rounded-full object-cover" src={image} />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-yellow-500">star</span>
            ))}
          </div>
          <p className="text-sm font-bold leading-tight text-[#111827]">{name}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const testimonials = [
    {
      name: "Maria J.",
      text: "Dr. Hisanan is very accommodating and kind. The clinic is clean, and the staff is friendly. Highly recommended for all moms-to-be!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCrBeOyumWj_fzey2-6KHW9ZIfcF9Uig8zPoruKVebTYQdT7lY6Sm3iS9zL382mD7Qp3yV62JvSfROonaz3NvJ-vi8gb0nKqWI-WbG0iB6sWm23lfrBOvyQ5ttq_cXFF8oONhe9yqXphUlcxdGtRFXolxEED7T-f1hMcOGR2G6j28ZQWGzrcZd9iKScLrxhHcOKAd-stAjgPLLBkh9W3x5dx-lNnuzWWMIbWuHcXsKpo6hN5PHAw_UW8DEvVGcHXG5RYFE1kKM5g"
    },
    {
      name: "Anna L.",
      text: "I had my very first ultrasound here. The experience was amazing. The clinic environment is so calm and professional. Thank you, CBH Clinic!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB45VsKcKNHkG-9sbX_02T-2HpCH77FpB7p3f26KLU4rKD4up5knoQJjULUriQowqQPzqWK3Zzmn3ZkMW-WGxqUAphUi_lq6kwNIPJ69y0vDHnHkzi7V_WfKGRx04j_M_Rn-6-wACwma5B-1vugqYQ80HkmAabK1pFxD-SyVrxgcYNgKV_iHZ1zonhPN5AUbsAkJDLKDQ6ArWWtERAfrVDfNIqOwbxukg2t3ajjYbQLtNygnN3IXxdhekxs8DR3iJSbG6OEn2H2nTo"
    },
    {
      name: "Rhea C.",
      text: "Excellent service and care. From booking an appointment to the consultation itself, everything was smooth and efficient.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCib3mHOwi8La134lRVCpwnbTK6AtWbsY5BgkTkcM_oEqSv2kPbVZJPk57OH0tphj6eaZSgQioHVgeO4sWCm1umI9P8GZFdwJE92S0HceHL1o8JEbzcNNDCMTANnXqnHRweEfx9P6No6Dgwssar06mX2X2ypXgvrn5Z7ZPF7X71asc-4rbjzXnXtw752XcrgDbFVr4oZrIq_Rlqzn6RineIBgyyho12zmiICPXSpVf1nTa21jQOvTl4FmTr3I4yoaHvN88O5d7uG_8"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Mobile Carousel View */}
      <div className="md:hidden relative w-full">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white hover:bg-gray-50 text-[#111827] rounded-full p-2 shadow-lg transition-all z-10"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white hover:bg-gray-50 text-[#111827] rounded-full p-2 shadow-lg transition-all z-10"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-[#4A90E2]' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </>
  );
}

function SocialPostsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // Social media appreciation posts
  const socialPosts = [
    {
      id: 1,
      image: '/social-post-1.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 2,
      image: '/social-post-2.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 3,
      image: '/social-post-3.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 4,
      image: '/social-post-4.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 5,
      image: '/social-post-5.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 6,
      image: '/social-post-6.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 7,
      image: '/social-post-7.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 8,
      image: '/social-post-8.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 9,
      image: '/social-post-9.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 10,
      image: '/social-post-10.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    },
    {
      id: 11,
      image: '/social-post-11.jpg',
      platform: 'facebook',
      author: 'Patient Community',
      date: 'Recent'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % socialPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + socialPosts.length) % socialPosts.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full overflow-hidden rounded-xl shadow-2xl bg-white">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {socialPosts.map((post) => (
            <div key={post.id} className="w-full flex-shrink-0">
              <div className="relative w-full aspect-[9/16] md:aspect-[4/5] bg-gray-100">
                <img
                  src={post.image}
                  alt={`Social media post ${post.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 flex items-center justify-between bg-white border-t border-gray-200">
                <div className="flex items-center gap-3">
                  {post.platform === 'facebook' && (
                    <svg className="w-5 h-5 text-[#4A90E2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{post.author}</p>
                    <p className="text-xs text-[#6B7280]">{post.date}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#7ED321]">favorite</span>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111827] rounded-full p-2 md:p-3 shadow-lg transition-all"
          aria-label="Previous post"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">chevron_left</span>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111827] rounded-full p-2 md:p-3 shadow-lg transition-all"
          aria-label="Next post"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">chevron_right</span>
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {socialPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-[#4A90E2]' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to post ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
