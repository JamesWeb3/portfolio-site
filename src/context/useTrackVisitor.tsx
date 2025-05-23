"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type VisitorData = {
  ip: string;
  city: string;
  region: string;
  website: string;
  country: string;
};

const VisitorContext = createContext<VisitorData | null>(null);

export const VisitorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [visitor, setVisitor] = useState<VisitorData | null>(null);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    async function fetchVisitor() {
      if (hasTracked) return;
  
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
  
        const visitorData: VisitorData = {
          ip: data.ip,
          city: data.city,
          region: data.region,
          website: "Artifakt Labs",
          country: data.country_name,
        };
  
        setVisitor(visitorData);
        setHasTracked(true);
  
        await fetch("/api/trackVisitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(visitorData),
        });
      } catch (err) {
        console.error("Failed to fetch visitor data", err);
      }
    }
  
    fetchVisitor();
  }, [hasTracked]);

  return (
    <VisitorContext.Provider value={visitor}>
      {children}
    </VisitorContext.Provider>
  );
};

export const useVisitor = () => useContext(VisitorContext);
