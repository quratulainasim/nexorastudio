import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/Ali Raza.jpg";
import ecommerceImg from "@/assets/projects/ecommerce1.png";
import masalaMoodImg from "@/assets/projects/masalamood.png";
import cellPointImg from "@/assets/projects/cell-point.png";
import dibeticImg from "@/assets/projects/dibetic-checker.png";
import blogImg from "@/assets/projects/blog-web.png";
import hackBookImg from "@/assets/projects/hack1-book.png";
import hackTodoImg from "@/assets/projects/hack2-todo.png";
import hack5Img from "@/assets/projects/hack5.png";
import pharmacyProImg from "@/assets/projects/pharmacypro.png";
import p1 from "@/assets/Sara Ahmed.webp";
import p2 from "@/assets/p2.jpg";
import { Bot, Cloud, Code2, Palette, ScanSearch, Workflow } from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications and responsive websites built with the latest technologies to enhance your online presence.",
    points: ["React & Node", "Responsive Design", "Performance Optimized"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Custom AI-powered chatbots for customer support, sales, and lead generation. Available 24/7.",
    points: ["Knowledge-base trained", "Multi-channel Integration", "Lead capture"],
  },
  {
    icon: Workflow,
    title: "AI Employee / AI Agents",
    description:
      "Autonomous AI agents that work like real employees — handling tasks and making decisions independently.",
    points: ["Workflow execution", "Decision making", "24/7 Operation"],
  },
  {
    icon: Palette,
    title: "AI Automation & Integration",
    description:
      "Integrate AI into your systems and automate repetitive business processes for maximum efficiency.",
    points: ["Process automation", "Data processing", "System integration"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure and DevOps solutions using Docker and Kubernetes to deploy, manage and scale your applications with ease.",
    points: ["Docker Containerization", "Kubernetes Orchestration", "CI/CD Pipelines"],
  },
  {
    icon: ScanSearch,
    title: "OpenClaw — Autonomous AI Agents",
    description:
      "Deploy OpenClaw-powered AI agents that run 24/7 on your system — executing tasks, managing workflows, browsing the web, and integrating with WhatsApp, Telegram & Slack using Claude or GPT under the hood.",
    points: ["Local-first autonomous agents", "Messaging app integration", "LLM-powered task execution"],
  },
] as const;

export const projects = [
  { title: "Pharmacy & Hospital Management System", tag: "Full-Stack & FTE AI", url: "https://pharmacy-tan-seven.vercel.app/", color: "from-teal-500 to-emerald-600", image: pharmacyProImg },
  { title: "E-commerce Platform", tag: "Full-Stack", url: "https://final-project-coral-sigma.vercel.app/", color: "from-cyan-500 to-blue-600", image: ecommerceImg },
  { title: "Masala mood Restuarant website", tag: "Web App", url: "https://masala-mood2.vercel.app/ ", color: "from-rose-500 to-pink-600", image: masalaMoodImg },
  { title: "Phone Store UI", tag: "UX / UI", url: "https://cell-point-web-jna6.vercel.app/", color: "from-amber-500 to-orange-600", image: cellPointImg },
  { title: "Diabetic Checker App", tag: "AI Service", url: "https://diabetes123456.streamlit.app/", color: "from-emerald-500 to-teal-600", image: dibeticImg },
  { title: "Blogging Web App", tag: "Full-Stack", url: "https://blog-website-ochre-nine.vercel.app/", color: "from-violet-500 to-fuchsia-600", image: blogImg },
  { title: "Agentic Book App", tag: "Web App", url: "https://hackathon-1-robotics-book.vercel.app/", color: "from-indigo-500 to-purple-600", image: hackBookImg },
  { title: "Task Management App", tag: "Productivity", url: "https://hack2-nextjs-chatbot.vercel.app", color: "from-blue-500 to-cyan-600", image: hackTodoImg },
  { title: "CRM Software", tag: "Full-Stack", url: "https://www.youtube.com/watch?v=pFhBRoU4fPc", color: "from-teal-500 to-emerald-600", image: hack5Img },
] as const;

export const customers = [
  {
    name: "Ali Raza",
    role: "Founder, Technova Group",
    image: customer2,
    quote:
      "Nexora rebuilt our store and launched an AI assistant that handles 60% of support. Sales jumped 38% in two months.",
    product: "Full-Stack Website + AI Chatbot",
  },
  {
    name: "Sara Lin",
    role: "CEO, Pulse Analytics",
    image: customer1,
    quote:
      "The dashboard they designed is gorgeous and fast. Our automation pipeline saves the team 20+ hours every week.",
    product: "UX/UI + AI Automation",
  },
  {
    name: "Sara Ahmed",
    role: "Director, Webtech Group",
    image: p1,
    quote:
      "They delivered our business consultancy website on time and within budget. The design is modern, fast, and exactly what we envisioned.",
    product: "Web App Development",
  },
  {
    name: "Asim Khan",
    role: "Founder, TechRetail Pakistan",
    image: p2,
    quote:
      "The AI chatbot built for our support team reduced response time by 80%. It handles hundreds of queries daily without any human intervention.",
    product: "AI Service",
  },
] as const;
