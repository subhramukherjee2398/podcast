
"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";



const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

const ConvexClerkProvider = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
//       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//         <App />
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   </React.StrictMode>,
// );
