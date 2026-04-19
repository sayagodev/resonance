import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useRef } from "react";

export function useCheckout() {
  const trpc = useTRPC()
  const checkoutInFlighRef = useRef(false)
  const mutation = useMutation(
    trpc.billing.createCheckout.mutationOptions({})
  )

  const checkout = useCallback(() => {
    if (checkoutInFlighRef.current) return;

    checkoutInFlighRef.current = true;
    mutation.mutate(undefined, {
      onSuccess: (data) => {
        window.location.href = data.checkoutUrl;
      },
      onError: () => {
        checkoutInFlighRef.current = false;
      }
    })
  }, [mutation])

  return {
    checkout,
    isPending: mutation.isPending
  }
}
