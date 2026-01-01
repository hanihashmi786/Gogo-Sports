"use client";

import React from "react"

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+966 53 458 3997",
    href: "tel:+966534583997",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@gogosports.online",
    href: "mailto:support@gogosports.online",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Riyadh, Saudi Arabia",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "9AM - 9PM (Sat-Thu)",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to a backend
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      <div className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Get in Touch
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                Have questions about our products or need help with an order?
                We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="bg-card rounded-xl p-4 border border-border text-center hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                    <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {info.title}
                  </p>
                  <p className="font-medium text-sm">{info.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us more..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* WhatsApp & Map */}
              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <div className="bg-[#25D366]/10 rounded-xl p-6 md:p-8 border border-[#25D366]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        Prefer WhatsApp?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant support
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Chat with us directly on WhatsApp for quick answers about
                    products, orders, or anything else.
                  </p>
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                      Start WhatsApp Chat
                    </Button>
                  </a>
                </div>

                {/* Location Map Placeholder */}
                <div className="bg-secondary rounded-xl p-6 md:p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="font-medium">Riyadh, Saudi Arabia</p>
                    <p className="text-sm text-muted-foreground">
                      Fast delivery across KSA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <MobileNav />
    </main>
  );
}
