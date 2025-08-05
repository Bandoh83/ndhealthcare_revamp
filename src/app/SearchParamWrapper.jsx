// app/SearchParamWrapper.tsx
"use client";

import { Suspense } from "react";


export default function SearchParamWrapper({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}