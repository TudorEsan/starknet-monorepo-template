"use client";
import React from "react";

import { useConnect, Connector } from "@starknet-react/core";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@pulsarmoney/ui/components/ui/dialog";
import { Button } from "@pulsarmoney/ui/components/ui/button";

export default function ConnectModal() {
  const { connect, connectors } = useConnect();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">Connect Wallet</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Connect Wallet</DialogHeader>
          <div className="flex flex-col gap-4">
            {connectors.map((connector: Connector) => (
              <Button
                key={connector.id}
                onClick={() => connect({ connector })}
                disabled={!connector.available()}
              >
                Connect {connector.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
