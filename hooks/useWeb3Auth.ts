// hooks/useWeb3Auth.js

import { useState, useEffect } from "react"
import { Web3Auth } from "@web3auth/modal"

import { ethers } from "ethers"
import Error from "next/error"

// Define the providers you want to support (e.g., MetaMask, WalletConnect)
const providerOptions = {
	/* See Web3Modal documentation for more options */
}

const useWeb3Auth = () => {
	const [provider, setProvider] = useState<any>(null)
	const [signer, setSigner] = useState(null)
	const [address, setAddress] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (provider) {
			const initializeSigner = async () => {
				try {
					const _signer = provider.getSigner()
					setSigner(_signer)
					const _address = await _signer.getAddress()
					setAddress(_address)
				} catch (err: any) {
					setError(err.message)
				}
			}
			initializeSigner()
		}
	}, [provider])

	const connectWallet = async () => {
		try {
			//Initialize within your constructor
			const web3auth = new Web3Auth({
				clientId: "", // Get your Client ID from Web3Auth Dashboard
				chainConfig: {
					chainNamespace: "eip155",
					chainId: "0x1",
				},
			})

			await web3auth.initModal()
			const _provider = await web3Modal.connect()
			const ethersProvider = new ethers.providers.Web3Provider(_provider)
			setProvider(ethersProvider)
		} catch (err: any) {
			setError(err.message)
		}
	}

	const disconnectWallet = async () => {
		try {
			if (provider?.provider?.disconnect) {
				await provider.provider.disconnect()
			}
			setProvider(null)
			setSigner(null)
			setAddress(null)
		} catch (err) {
			setError(err.message)
		}
	}

	return {
		provider,
		signer,
		address,
		error,
		connectWallet,
		disconnectWallet,
	}
}

export default useWeb3Auth
