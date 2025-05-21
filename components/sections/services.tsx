"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Users,
  Briefcase,
  BarChart,
  BookOpen,
  Shield,
  HeartHandshake,
  DollarSign,
  FileText,
  Receipt,
  Wallet,
  LineChart,
  ClipboardList,
  FileCheck2,
  Settings,
  CheckCircle2,
} from "lucide-react";

const hrServices = [
  {
    title: "Recruitment & Talent Acquisition",
    description:
      "End-to-end hiring solutions including sourcing, screening, and onboarding the right candidates.",
    icon: Users,
  },
  {
    title: "HR Policy Development",
    description:
      "Design and implementation of tailored HR policies, employee handbooks, and compliance frameworks.",
    icon: FileCheck2,
  },
  {
    title: "Performance Management Systems",
    description:
      "Creation and management of appraisal processes, KPIs, and evaluation methods.",
    icon: BarChart,
  },
  {
    title: "HR Outsourcing",
    description:
      "Comprehensive HR services including payroll, benefits admin, and employee lifecycle management.",
    icon: Settings,
  },
  {
    title: "Training & Development",
    description:
      "Custom programs for skill development, leadership, and employee engagement.",
    icon: BookOpen,
  },
  {
    title: "Compliance & Labor Law Advisory",
    description:
      "Expert guidance on labor laws, PF, ESI, gratuity, and workplace policies.",
    icon: CheckCircle2,
  },
];

const financialServices = [
  {
    title: "Financial Planning & Analysis",
    description:
      "Strategic financial plans, forecasts, and budgeting systems for long-term goals.",
    icon: LineChart,
  },
  {
    title: "Bookkeeping & Accounting",
    description:
      "Accurate bookkeeping, ledger maintenance, and financial statement preparation.",
    icon: FileText,
  },
  {
    title: "Tax Planning & Compliance",
    description:
      "Corporate and individual tax planning, GST filing, and regulatory compliance.",
    icon: Receipt,
  },
  {
    title: "Payroll Management",
    description:
      "Salary processing, tax deductions, and statutory compliance.",
    icon: Wallet,
  },
  {
    title: "Business Financial Health Check",
    description:
      "In-depth assessments of profitability, cash flow, and risk exposure.",
    icon: DollarSign,
  },
  {
    title: "Budgeting & Cost Control",
    description:
      "Customized budgeting frameworks and cost control strategies.",
    icon: ClipboardList,
  },
];

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const renderCards = (items: typeof hrServices) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {items.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 * index }}
        >
          <Card className="h-full hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900 transition">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Select a category to explore our HR and Financial service offerings.
          </p>
        </motion.div>

        <Tabs defaultValue="finance" >
          <TabsList className="flex justify-center gap-4 mb-6">
            
            <TabsTrigger value="finance">Financial Solutions</TabsTrigger>
            <TabsTrigger value="hr">Human Resource Solutions</TabsTrigger>
          </TabsList>

          
          <TabsContent value="finance">{renderCards(financialServices)}</TabsContent>
          <TabsContent value="hr">{renderCards(hrServices)}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
