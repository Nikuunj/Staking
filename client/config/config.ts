import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import OrcaABI from '@/abi/OrcaContract.json'
import StackingABI from '@/abi/StakingContract.json'

export const config = createConfig({
   chains: [sepolia],
   connectors: [
      injected(),
   ],
   transports: {
      [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/e3fUoPqdyoLlCGWNHdY2lEOaovOsKddu"),
   },
})

export const orca_address = '0x35635E70dbcee6220e0AD8f97A0E5Ffd5B971BF0';
export const stacking_address = '0xD1f0DD77bbaBA47FB639a21cEf8e42AcF9fF8347';

export const orca_abi = OrcaABI.abi;
export const stacking_abi = StackingABI.abi;