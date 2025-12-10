import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patient Portal - Access Your Dental Records | OraPlus Bhubaneswar",
  description: "Access your dental health records, appointments, prescriptions at OraPlus Patient Portal. Secure login to manage your dental care journey in Bhubaneswar.",
  keywords: [
    "patient portal dental clinic",
    "OraPlus patient login",
    "dental records online Bhubaneswar",
    "dental appointment booking",
    "online dental portal Patia",
  ],
  openGraph: {
    title: "Patient Portal - OraPlus Dental Clinic",
    description: "Securely access your dental records and manage appointments online.",
    url: "https://oraplus.in/patient-portal",
  },
  alternates: {
    canonical: "https://oraplus.in/patient-portal",
  },
}

export default function PatientPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
