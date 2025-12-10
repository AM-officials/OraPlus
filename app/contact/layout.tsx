import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact OraPlus Dental Clinic - Location, Hours, Book Appointment | Bhubaneswar",
  description: "Visit OraPlus Dental Clinic at Plot 421, Kanan Vihar, Patia, Bhubaneswar. Open 7 days 10AM-9PM. Call +91-8249736036 or book online. Located near KIIT University with free parking.",
  keywords: [
    "OraPlus dental clinic address",
    "dental clinic Patia Bhubaneswar",
    "dentist near KIIT contact",
    "dental clinic Kanan Vihar",
    "OraPlus phone number",
    "book dental appointment Bhubaneswar",
    "dental clinic hours Patia",
    "emergency dentist Bhubaneswar contact",
    "dental clinic near me Bhubaneswar",
    "OraPlus location map"
  ],
  openGraph: {
    title: "Contact OraPlus Dental - Visit Us in Bhubaneswar",
    description: "Located at Kanan Vihar, Patia near KIIT. Open 7 days 10AM-9PM. Call +91-8249736036!",
    url: "https://oraplus.in/contact",
  },
  alternates: {
    canonical: "https://oraplus.in/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
