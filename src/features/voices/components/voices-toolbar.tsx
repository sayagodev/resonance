import { Search, Sparkles } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { voicesSearchParams } from "../lib/params";

export function VoicesToolbar() {
  const [query, setQuery] = useQueryState(
    "query",
    voicesSearchParams.query
  )
  const [localQuery, setLocalQuery] = useState(query);
  const debouncedSetQuery = useDebouncedCallback(
    (value: string) => setQuery(value),
    300,
  )

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl lg:text-2xl font-semibold tracking-tight">
          Todas las bibliotecas
        </h2>
        <p className="text-sm text-muted-foreground">
          Encuentra tu voz, o crea una
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <InputGroup className="lg:max-w-sm">
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Buscar voz..."
              value={localQuery}
              onChange={(e) => {
                setLocalQuery(e.target.value)
                debouncedSetQuery(e.target.value)
              }}
            >
            </InputGroupInput>
          </InputGroup>
          <div className="ml-auto hidden lg:block">
            <Button size="sm">
              <Sparkles />
              Voces personalizadas
            </Button>
          </div>
          <div className="lg:hidden">
            <Button size="sm" className="w-full">
              <Sparkles />
              Voces personalizadas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
