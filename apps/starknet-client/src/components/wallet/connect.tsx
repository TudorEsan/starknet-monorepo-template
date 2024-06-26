"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useAccount } from "@starknet-react/core";

const ConnectModal = dynamic(() => import("./connect-modal"), { ssr: false });

const DisconnectModal = dynamic(() => import("./disconect-modal"), {
  ssr: false,
});

export default function ConnectWallet() {
  const { address } = useAccount();

  return address ? <DisconnectModal /> : <ConnectModal />;
}
