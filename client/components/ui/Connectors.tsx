"use client"
import Image from 'next/image'
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function Connectors({ handleClick }: { handleClick: () => void }) {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => {
    const iconSrc = connector.icon?.trim() || null
    const isDataUri = iconSrc?.startsWith("data:")

    return (
      <React.Fragment key={connector.uid}>
        <button
          onClick={() => { 
              connect({ connector });
              handleClick();
            }
          }
          className="max-w-64 break-words flex items-center gap-2 border w-full ps-3 pe-7 py-3 rounded-lg border-emerald-800 hover:bg-emerald-800/30"
        >
          {iconSrc &&
            (isDataUri ? (
              // fallback for base64/data URIs
              <img
                src={iconSrc}
                alt={connector.name}
                width={27}
                height={27}
                className="rounded"
              />
            ) : (
              // optimized for remote/local images
              <Image
                src={iconSrc}
                width={27}
                height={27}
                alt={connector.name}
              />
            ))}

          {connector.name}
        </button>
        <br />
      </React.Fragment>
    )
  })
}
