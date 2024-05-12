"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react";

export const ReactQueryClienteProvider = ({ 
    children,
} : { children : React.ReactNode;

}) => {
    const [queryCliente] = useState(() => new QueryClient());
    return(
        <QueryClientProvider client={queryCliente}>
            {children}
        </QueryClientProvider>
    );
}