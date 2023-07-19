"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("11b8162d-06fb-4405-bf68-a97490ee8b2b");
  }, []);

  return null;
};
