import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-playfair text-2xl font-bold text-blue-400">
                Deven<span className="text-blue-600">Sun</span>{" "}
                <span className="text-white">Consultants</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Transforming businesses through Strategic Finance and HR Solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="devensunconsultants@gmail.com"
                className="text-muted-foreground hover:text-blue-600"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/devensun_consultants/"
                className="text-muted-foreground hover:text-blue-600"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/107095416/admin/dashboard/"
                className="text-muted-foreground hover:text-blue-600"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  Financial Planning & Budgeting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  Tax & Regulatory Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  Payroll Management & Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  HR Policy Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  Talent Acquisition & Recruitment
                </Link>
                {/* <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  Employee Onboarding & Engagement
                </Link> */}
                {/* <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  Performance Management Systems

                </Link> */}
                {/* <Link
                  href="#"
                  className="text-muted-foreground hover:text-blue-600"
                >
                  HR Compliance & Audit Support
                </Link> */}
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                {/* <span className="text-muted-foreground">123 Business Ave, Suite 200<br />New York, NY 10001</span> */}
              </li>
              <li className="flex items-center space-x-3">
                <Link
                  href="tel:+918269599169"
                  className="flex items-center text-muted-foreground  hover:text-pink-600 transition-colors"
                >
                  <Phone size={20} />
                  <span className="ml-2">+91 8269599169</span>
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Link
                  href="mailto:devensunconsultants@gmail.com"
                  className="flex items-center text-muted-foreground   hover:text-pink-600 transition-colors"
                >
                  <Mail size={20} />
                  <span className="ml-2">devensunconsultants@gmail.com</span>
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Link
                  href="https://www.linkedin.com/company/107095416/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground  hover:text-pink-600 transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="ml-2">LinkedIn</span>
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Link
                  href="https://www.instagram.com/devensun_consultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="ml-2">Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevenSun Consultant. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600">Privacy Policy</Link> */}
            {/* <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600">Terms of Service</Link> */}
            {/* <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600">Cookie Policy</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
