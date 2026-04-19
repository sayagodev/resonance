'use client';

import { useCallback } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useCheckout } from "../hooks/use-checkout";
import { useTRPC } from "@/trpc/client";

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100)
}

function UpgradeCard() {
  const { checkout, isPending: isCheckoutPending } = useCheckout()

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold tracking-tight text-foreground">
          Paga sobre la marcha
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Genera voz a partir de $0.30 por cada 1,000 caracteres
        </p>
      </div>
      <Button
        variant={"outline"}
        className="w-full text-xs"
        size={"sm"}
        disabled={isCheckoutPending}
        onClick={checkout}
      >
        {isCheckoutPending ? (
          <>
            <Spinner className="size-3" />
            Redireccionando...
          </>
        ) : (
          "Mejorar"
        )}
      </Button>
    </div>
  )
}

function UsageCard({
  estimatedCostCents
}: {
  estimatedCostCents: number;
}) {
  const trpc = useTRPC()
  const portalMutation = useMutation(
    trpc.billing.createPortalSession.mutationOptions({})
  )

  const openPortal = useCallback(() => {
    portalMutation.mutate(undefined, {
      onSuccess: (data) => {
        window.open(data.portalUrl, "_blank", "noopener,noreferrer")
      }
    })
  }, [portalMutation])

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold tracking-tight text-foreground">
          Uso actual
        </p>
        <p className="text-xl font-bold tracking-tight text-foreground mt-1">
          {formatCurrency(estimatedCostCents)}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Estimación de este período
        </p>
      </div>
      <Button
        variant={"outline"}
        className="w-full text-xs"
        size={"sm"}
        disabled={portalMutation.isPending}
        onClick={openPortal}
      >
        {portalMutation.isPending ? (
          <>
            <Spinner className="size-3" />
            Redireccionando...
          </>
        ) : (
          "Mejorar Suscripción"
        )}
      </Button>
    </div>
  )
}

export function UsageContainer() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.billing.getStatus.queryOptions())

  return (
    <div className="group-data-[collapsible=icon]:hidden overflow-hidden">
      <div className="min-w-[calc(var(--sidebar-width)-24px)] bg-background border border-border rounded-lg p-3">
        {data?.hasActiveSubscription ? (
          <UsageCard estimatedCostCents={data.estimatedCostCents} />
        ) : (
          <UpgradeCard />
        )}
      </div>
    </div>
  )
}
