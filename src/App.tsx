"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Wrench, Car, Zap, Shield, Mail } from "lucide-react"
import { SimpleThemeToggle } from "@/components/simple-theme-toggle"

// Toggle this flag to show/hide the special hours banner
const SHOW_SPECIAL_HOURS_BANNER = false
const BUSINESS_NAME = "Nashville Auto Services And Motorsports"
const SPECIAL_MESSAGE = "Closed Dec 24-26 for Holiday | Extended Hours: Open until 8 PM Mon-Wed this week"
const PHONE_NUMBER_NO_DASH = "6159684009"
const PHONE_NUMBER_FORMATTED = "(615) 968-4009"
const EMAIL_ID = "nashvilleauto801@gmail.com"
const ADDRESS_LINE_1 = "801 Cowan Street"
const ADDRESS_LINE_2 = "Nashville, TN 37207"

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {SHOW_SPECIAL_HOURS_BANNER && (
        <div className="bg-red-600 text-white py-3 px-4 text-center">
          <div className="container mx-auto">
            <p className="text-sm md:text-base font-medium">
              <Clock className="inline-block w-4 h-4 mr-2" />
              {SPECIAL_MESSAGE}
            </p>
          </div>
        </div>
      )}

      <header className="bg-white shadow-sm border-b dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-transparent p-0">
                <img src="/logo.svg" alt="AutoPro Logo" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{BUSINESS_NAME}</h1>
                {/* <p className="text-sm text-gray-600 dark:text-gray-300">Professional Auto Care & Motorsports</p> */}
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Services
                </button>
                {/* <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300 dark:hover:text-blue-400"
                >
                  About
                </button> */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Contact
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <a href={`tel:${PHONE_NUMBER_NO_DASH}`} className="hidden md:flex">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <Button className="bg-blue-600 hover:bg-blue-700 md:hidden" size="sm" asChild>
                  <a href={`tel:${PHONE_NUMBER_NO_DASH}`}>
                    <Phone className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <SimpleThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-600 text-white">Professional Auto Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Expert Auto Care &<span className="text-blue-400"> Motorsports Services</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                From routine maintenance to high-performance modifications, we deliver exceptional automotive services
                with precision and passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href={`tel:${PHONE_NUMBER_NO_DASH}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Service
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  onClick={() => scrollToSection("services")}
                >
                  View Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Auto Services Shop"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive solutions for all your vehicle needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">General Repair</h4>
                <p className="text-gray-600">Complete automotive repair services for all makes and models</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Maintenance</h4>
                <p className="text-gray-600">Regular maintenance to keep your vehicle running smoothly</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Performance</h4>
                <p className="text-gray-600">High-performance modifications and motorsports preparation</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Diagnostics</h4>
                <p className="text-gray-600">Advanced diagnostic services using latest technology</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/assets/logo.svg?height=400&width=500"
                alt="Our Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-blue-600 text-white">About Us</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">25+ Years of Automotive Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're passionate automotive professionals dedicated to providing exceptional service. From everyday
                drivers to high-performance race cars, we treat every vehicle with the same level of care and expertise.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Vehicles Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">4.9/5 Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="pt-2 pb-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-xl text-gray-600">Get in touch for all your automotive and motorsports needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch h-full">
            {/* Contact Info */}
            <div className="flex flex-col space-y-8 h-full">
              <Card className="h-full flex-1 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                      <p className="text-gray-600">
                        {ADDRESS_LINE_1}
                        <br />
                        {ADDRESS_LINE_2}
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex-1 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phone Numbers</h4>
                      <p className="text-gray-600">
                        Main: {PHONE_NUMBER_FORMATTED}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex-1 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-blue-600 mt-2">Emergency services available 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 h-full flex">
              <Card className="h-full w-full flex-1 flex flex-col">
                <CardContent className="p-0 h-full min-h-[400px] flex-1 flex flex-col">
                  <div className="w-full h-full rounded-lg overflow-hidden flex-1">
                    <iframe
                      title="Google Map"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: 400, height: '100%' }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=801+Cowan+Street,+Nashville,+TN+37207&output=embed`}
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              {/* Footer Logo Placeholder */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent p-0">
                <img src="/logo.svg" alt="AutoPro Logo" className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{BUSINESS_NAME}</h4>
                  {/* <p className="text-sm text-gray-400">Professional Auto Care</p> */}
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all automotive needs. Quality service, competitive prices, and customer
                satisfaction guaranteed.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white">
                    Services
                  </button>
                </li>
                {/* <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white">
                    About Us
                  </button>
                </li> */}
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white">
                    Contact
                  </button>
                </li>
                {/* <li>
                  <button className="hover:text-white">Appointments</button>
                </li> */}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {PHONE_NUMBER_FORMATTED}
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {EMAIL_ID}
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {ADDRESS_LINE_1}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
