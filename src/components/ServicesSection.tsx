
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const bankingServices = [
    { name: "Cash Withdrawal", fee: "₹5", desc: "Mini ATM via AEPS" },
    { name: "Money Transfer", fee: "₹10", desc: "IMPS/NEFT transfers" },
    { name: "Bill Payment", fee: "₹5", desc: "Electricity, DTH, Mobile" },
    { name: "Balance Inquiry", fee: "₹2", desc: "Account balance check" }
  ];

  const govServices = [
    { name: "New PAN Card", fee: "₹110", desc: "Fresh application", time: "15-20 days" },
    { name: "PAN Correction", fee: "₹110", desc: "Name/DOB correction", time: "15-20 days" },
    { name: "LIC Premium", fee: "₹25", desc: "Premium payment", time: "Instant" },
    { name: "Aadhaar Print", fee: "₹30", desc: "Official Aadhaar copy", time: "Instant" }
  ];

  const documentServices = [
    { name: "Black & White Print", fee: "₹2/page", desc: "A4 size printing" },
    { name: "Color Print", fee: "₹10/page", desc: "High quality color" },
    { name: "Xerox Copy", fee: "₹1/page", desc: "Document copying" },
    { name: "Scan to PDF", fee: "₹5/page", desc: "Digital conversion" },
    { name: "Lamination", fee: "₹15/page", desc: "Document protection" },
    { name: "Binding", fee: "₹50", desc: "Spiral/comb binding" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete digital and document solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Banking Services */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-700 font-bold">₹</span>
                </div>
                <span>Banking Services</span>
              </CardTitle>
              <CardDescription>
                Mini banking solutions powered by AEPS technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bankingServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                  <Badge variant="secondary">{service.fee}</Badge>
                </div>
              ))}
              <Button className="w-full mt-4">Request Banking Service</Button>
            </CardContent>
          </Card>

          {/* Government Services */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-700 font-bold">🏛️</span>
                </div>
                <span>Government Services</span>
              </CardTitle>
              <CardDescription>
                PAN, LIC, Aadhaar and other government-related services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {govServices.map((service, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">{service.name}</p>
                    <Badge variant="secondary">{service.fee}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{service.desc}</p>
                  <p className="text-xs text-green-600">Time: {service.time}</p>
                </div>
              ))}
              <Button className="w-full mt-4">Apply for Service</Button>
            </CardContent>
          </Card>

          {/* Document Services */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-700 font-bold">📄</span>
                </div>
                <span>Document Services</span>
              </CardTitle>
              <CardDescription>
                Printing, xerox, scanning and binding services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {documentServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{service.name}</p>
                    <p className="text-xs text-muted-foreground">{service.desc}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">{service.fee}</Badge>
                </div>
              ))}
              <Button className="w-full mt-4">Upload Documents</Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Need Help with Our Services?</h3>
          <p className="text-muted-foreground mb-6">
            Visit our store or call us for assistance with any service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">📞 Call Now: +91 9876543210</Button>
            <Button variant="outline" size="lg">📍 Visit Store Location</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
